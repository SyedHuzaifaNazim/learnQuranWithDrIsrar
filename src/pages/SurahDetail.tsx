import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { FileText, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuranCard from "@/components/QuranCard";
import surahs from "@/data/surahs";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import { YouTubePlayer } from "react-youtube";

const SurahDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [currentSurah, setCurrentSurah] = useState<(typeof surahs)[0] | null>(
    null
  );
  const [suggestedSurahs, setSuggestedSurahs] = useState<typeof surahs>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [youtubeId, setYoutubeId] = useState("");
  const [languageToggle, setLanguageToggle] = useState(true);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);
  const [lastSeenTime, setLastSeenTime] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    if (id) {
      const surahId = parseInt(id);
      const surah = surahs.find((s) => s.id === surahId);

      if (surah) {
        setCurrentSurah(surah);

        const youtubeUrlParams = new URL(surah.youtubeUrl).searchParams;
        const extractedYoutubeId = youtubeUrlParams.get("v");
        if (extractedYoutubeId) {
          setYoutubeId(extractedYoutubeId);
        }

        Object.keys(localStorage).forEach((key) => {
          const isCurrentSurahKey = key === `lastSeen-${surah.surahNumber}`;
          if (key.startsWith("lastSeen-") && !isCurrentSurahKey) {
            localStorage.removeItem(key);
          }
        });

        const lastTime = localStorage.getItem(`lastSeen-${surah.surahNumber}`);
        if (lastTime) {
          setLastSeenTime(parseFloat(lastTime));
        }

        const suggested = surahs
          .filter((s) => s.id !== surahId)
          .sort((a, b) => Math.abs(a.id - surahId) - Math.abs(b.id - surahId))
          .slice(0, 4);

        setSuggestedSurahs(suggested);
      }
    }

    setTimeout(() => setIsLoading(false), 1000);
  }, [id]);

  const handleFullscreen = () => {
    if (window.innerWidth < 1024 && iframeRef.current) {
      const iframe = iframeRef.current;
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
  };

  const getPreviousSurah = () => {
    if (!currentSurah) return null;
    return surahs.find((s) => s.surahNumber === currentSurah.surahNumber - 1);
  };

  const getNextSurah = () => {
    if (!currentSurah) return null;
    return surahs.find((s) => s.surahNumber === currentSurah.surahNumber + 1);
  };

  const handlePlayerReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;

    // Check if current time is valid and matches current Surah number
    const currentSurahNumber = currentSurah?.surahNumber;
    const savedTime = localStorage.getItem(`lastSeen-${currentSurahNumber}`);

    if (savedTime && parseFloat(savedTime) > 0) {
      // Seek to the saved timestamp
      event.target.seekTo(parseFloat(savedTime), true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const previousSurah = getPreviousSurah();
  const nextSurah = getNextSurah();
  const isMobile = window.innerWidth <= 500;

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (playerRef.current && currentSurah) {
        const currentTime = playerRef.current.getCurrentTime();
        localStorage.setItem(
          `lastSeen-${currentSurah.surahNumber}`,
          currentTime.toFixed(2)
        );
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      handleBeforeUnload();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [currentSurah]);

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gradient-to-b from-background to-islamic-navy/5 dark:from-background dark:to-islamic-navy/20">
        <section className="py-8 px-1 sm:px-4">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-8/12 lg:w-9/12">
                {isLoading ? (
                  <div className="rounded-xl bg-secondary dark:bg-white border border-border p-2 sm:p-6 animate-pulse">
                    <div className="h-8 w-2/3 bg-secondary rounded mb-4"></div>
                    <div className="h-4 w-1/3 bg-secondary rounded mb-8"></div>
                    <div className="aspect-video bg-secondary rounded"></div>
                  </div>
                ) : currentSurah ? (
                  <div className="bg-white dark:bg-black border border-border rounded-xl overflow-hidden shadow-md">
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                        <div>
                          <h1 className="text-2xl md:text-3xl font-serif font-bold">
                            Surah {currentSurah.nameEnglish}
                          </h1>
                          <p className="text-foreground/70">
                            Surah No. {currentSurah.surahNumber} •{" "}
                            {currentSurah.totalAyats} Ayats •{" "}
                            {currentSurah.duration}
                          </p>
                        </div>

                        {currentSurah.pdfUrl && (
                          <a
                            href={currentSurah.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex mt-5 sm:mt-0 mb-2 sm:mb-0 items-center px-4 py-2 bg-islamic-navy/10 hover:bg-islamic-navy/20 dark:bg-white/10 dark:hover:bg-white/20 text-islamic-navy dark:text-white rounded-lg transition-colors"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            <span>PDF Explanation</span>
                          </a>
                        )}
                      </div>

                      <div className="flex items-center justify-center mb-6">
                        <h2
                          className="text-3xl font-arabic text-islamic-gold"
                          dir="rtl"
                        >
                          {currentSurah.nameArabic}
                        </h2>
                      </div>

                      <div
                        className="aspect-video w-full overflow-hidden rounded-lg"
                        onClick={handleFullscreen}
                      >
                        {/* <YouTube
                          videoId={youtubeId}
                          opts={{
                            width: "100%",
                            height: "450",
                            playerVars: {
                              autoplay: 0,
                              controls: 1,
                              modestbranding: 1,
                              fullscreen: 1,
                            },
                          }}
                          onReady={handlePlayerReady}
                          className="rounded-lg"
                        /> */}

                        {isMobile ? (
                          <iframe
                            ref={iframeRef}
                            src={`https://www.youtube.com/embed/${youtubeId}?playsinline=1`}
                            title={`Surah ${currentSurah?.nameEnglish} - Dr. Israr Ahmed`}
                            className="w-full aspect-video rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                            allowFullScreen={true}
                            frameBorder="0"
                          />
                        ) : (
                          <YouTube
                            videoId={youtubeId}
                            opts={{
                              width: "100%",
                              height: "450",
                              playerVars: {
                                autoplay: 0,
                                controls: 1,
                                modestbranding: 1,
                              },
                            }}
                            onReady={handlePlayerReady}
                          />
                        )}
                      </div>

                      <div className="mt-6 border-t border-border/50 pt-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-semibold">Overview</h3>
                          <motion.button
                            className="px-4 py-2 bg-islamic-navy/10 dark:bg-gray-800/80 text-islamic-navy dark:text-white rounded-lg"
                            onClick={() => setLanguageToggle((prev) => !prev)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {languageToggle
                              ? "Switch to Urdu"
                              : "Switch to English"}
                          </motion.button>
                        </div>

                        <p className="text-foreground/70">
                          {languageToggle
                            ? currentSurah?.englishDescription
                            : currentSurah?.urduDescription}
                        </p>
                      </div>

                      <div className="mt-6 border-t border-border/50 pt-6">
                        <div className="flex justify-between gap-2">
                          {previousSurah ? (
                            <Link
                              to={`/surah/${previousSurah.id}`}
                              className="inline-flex items-center text-islamic-navy dark:text-white hover:text-islamic-gold dark:hover:text-islamic-gold transition-colors"
                            >
                              <ChevronLeft className="h-5 w-5 mr-1" />
                              <span className="text-[15px] sm:text-base">
                                Previous: Surah {previousSurah.nameEnglish}
                              </span>
                            </Link>
                          ) : (
                            <div></div>
                          )}

                          {nextSurah ? (
                            <Link
                              to={`/surah/${nextSurah.id}`}
                              className="inline-flex items-center text-islamic-navy dark:text-white hover:text-islamic-gold dark:hover:text-islamic-gold transition-colors"
                            >
                              <span className="text-[15px] sm:text-base">
                                Next: Surah {nextSurah.nameEnglish}
                              </span>
                              <ChevronRight className="h-5 w-5 ml-1" />
                            </Link>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white dark:bg-black border border-border rounded-xl p-8 text-center">
                    <h2 className="text-xl font-medium mb-4">
                      Surah not found
                    </h2>
                    <Link
                      to="/quran"
                      className="inline-flex items-center text-islamic-gold hover:underline"
                    >
                      <ChevronLeft className="h-5 w-5 mr-1" />
                      <span>Back to all Surahs</span>
                    </Link>
                  </div>
                )}
              </div>

              <div className="w-full md:w-4/12 lg:w-3/12">
                <div className="sticky top-20">
                  <h3 className="text-lg font-serif font-semibold mb-4">
                    Suggested Surahs
                  </h3>

                  <div className="space-y-4">
                    {isLoading ? (
                      Array.from({ length: 3 }).map((_, index) => (
                        <div
                          key={index}
                          className="rounded-xl bg-secondary/70 dark:bg-white/5 border border-border h-28 animate-pulse"
                        ></div>
                      ))
                    ) : suggestedSurahs.length > 0 ? (
                      suggestedSurahs.map((surah) => (
                        <Link
                          key={surah.id}
                          to={`/surah/${surah.id}`}
                          className="block bg-white/80 dark:bg-black/30 backdrop-blur-sm border border-border hover:border-islamic-gold/50 rounded-lg overflow-hidden transition-all hover:shadow-md"
                        >
                          <div className="p-3">
                            <div className="flex justify-between items-center mb-2">
                              <div className="h-7 w-7 flex items-center justify-center rounded-full bg-islamic-navy/10 dark:bg-white/10 text-islamic-navy dark:text-white text-sm font-medium">
                                {surah.surahNumber}
                              </div>
                              <div className="text-xs text-foreground/70">
                                {surah.duration}
                              </div>
                            </div>
                            <h4 className="font-medium">{surah.nameEnglish}</h4>
                            <p className="text-xs text-foreground/70">
                              {surah.totalAyats} Ayats
                            </p>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-foreground/70 text-sm">
                        No suggestions available
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/quran"
                      className="block text-center py-3 px-4 bg-islamic-gold/20 hover:bg-islamic-gold/30 text-islamic-navy dark:text-white rounded-lg transition-colors"
                    >
                      View All Surahs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SurahDetail;
