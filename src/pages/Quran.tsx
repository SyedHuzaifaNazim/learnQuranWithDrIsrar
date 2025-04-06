import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuranCard from "@/components/QuranCard";
import surahs from "@/data/surahs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SearchInput from "@/components/ui/SearchInput";

const Quran = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSurahs, setFilteredSurahs] = useState(surahs);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastSeenData, setLastSeenData] = useState<{
    surahNumber: number;
    time: number;
  } | null>(null);
  const surahsPerPage = 16;

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check for any lastSeen- keys in localStorage
    for (let i = 1; i <= 114; i++) {
      const key = `lastSeen-${i}`;
      const value = localStorage.getItem(key);
      if (value) {
        setLastSeenData({ surahNumber: i, time: parseFloat(value) });
        break; // Only show the most recent one found
      }
    }
  }, []);

  // Time formatter function
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h > 0 ? h + ":" : ""}${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredSurahs(surahs);
      setCurrentPage(1);
      return;
    }

    const lowercasedSearch = searchTerm.toLowerCase();
    const filtered = surahs.filter(
      (surah) =>
        surah.surahNumber.toString().includes(searchTerm) ||
        surah.nameEnglish.toLowerCase().includes(lowercasedSearch) ||
        surah.nameUrdu.includes(searchTerm) ||
        surah.nameArabic.includes(searchTerm)
    );

    setFilteredSurahs(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  // Get current surahs for pagination
  const indexOfLastSurah = currentPage * surahsPerPage;
  const indexOfFirstSurah = indexOfLastSurah - surahsPerPage;
  const currentSurahs = filteredSurahs.slice(
    indexOfFirstSurah,
    indexOfLastSurah
  );
  const totalPages = Math.ceil(filteredSurahs.length / surahsPerPage);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Generate pagination items
  const renderPaginationItems = () => {
    const items = [];

    // Always show first page
    items.push(
      <PaginationItem key="first">
        <PaginationLink
          isActive={currentPage === 1}
          onClick={() => paginate(1)}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    // Show ellipsis if needed
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="ellipsis1">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Show pages around current page
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 1 || i === totalPages) continue; // Skip first and last as they're always shown
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPage === i}
            onClick={() => paginate(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Show ellipsis if needed
    if (currentPage < totalPages - 2) {
      items.push(
        <PaginationItem key="ellipsis2">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key="last">
          <PaginationLink
            isActive={currentPage === totalPages}
            onClick={() => paginate(totalPages)}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-background to-islamic-navy/5 dark:from-background dark:to-islamic-navy/20">
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-decorative font-bold mb-4">
                Explore the Holy Quran
              </h1>
              <div className="h-1 w-20 bg-islamic-gold mx-auto mb-6"></div>
              <p className="text-foreground/80 font-arabic">
                Discover all 114 Surahs with Dr. Israr Ahmed's explanations
              </p>
            </div>

            <SearchInput
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            {/* Last Seen Section */}
            {lastSeenData && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Last Seen
                </h2>
                <div className="bg-secondary/70 dark:bg-white/5 border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold text-islamic-gold mb-1">
                      Surah {lastSeenData.surahNumber} -{" "}
                      {
                        surahs.find(
                          (s) => s.surahNumber === lastSeenData.surahNumber
                        )?.nameEnglish
                      }
                    </p>
                    <p className="text-sm text-foreground/70 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Last watched at {formatTime(lastSeenData.time)}
                    </p>
                  </div>
                  <a
                    href={`/surah/${lastSeenData.surahNumber}`}
                    className="bg-islamic-navy text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-islamic-navy/90 transition w-max mx-auto sm:mx-0"
                  >
                    Resume
                  </a>
                </div>
              </div>
            )}

            {/* Surah Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {isLoading ? (
                // Skeleton loading
                Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-secondary/70 dark:bg-white/5 border border-border h-60 animate-pulse"
                  >
                    <div className="p-5 h-full flex flex-col">
                      <div className="flex justify-between mb-4">
                        <div className="h-10 w-10 rounded-full bg-secondary"></div>
                        <div className="h-4 w-16 bg-secondary rounded"></div>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="h-6 w-full bg-secondary rounded"></div>
                        <div className="h-4 w-3/4 bg-secondary rounded"></div>
                        <div className="h-4 w-1/2 bg-secondary rounded"></div>
                      </div>
                    </div>
                  </div>
                ))
              ) : filteredSurahs.length > 0 ? (
                currentSurahs.map((surah) => (
                  <QuranCard
                    key={surah.id}
                    id={surah.id}
                    surahNumber={surah.surahNumber}
                    nameArabic={surah.nameArabic}
                    nameUrdu={surah.nameUrdu}
                    nameEnglish={surah.nameEnglish}
                    totalAyats={surah.totalAyats}
                    duration={surah.duration}
                  />
                ))
              ) : (
                <div className="col-span-full py-10 text-center">
                  <p className="text-lg text-foreground/70">
                    No surahs found matching "{searchTerm}"
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {!isLoading && filteredSurahs.length > surahsPerPage && (
              <div className="mt-10">
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={() => paginate(currentPage - 1)}
                        />
                      </PaginationItem>
                    )}

                    {renderPaginationItems()}

                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext
                          onClick={() => paginate(currentPage + 1)}
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Quran;
