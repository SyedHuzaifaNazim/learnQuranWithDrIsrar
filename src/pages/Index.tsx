import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Book,
  User,
  Award,
  MessageSquare,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const achievements = [
    {
      icon: <Book />,
      title: "Scholar",
      description:
        "A renowned Islamic scholar who dedicated his life to Quranic teachings",
    },
    {
      icon: <User />,
      title: "Teacher",
      description:
        "Inspired millions through his lectures and educational initiatives",
    },
    {
      icon: <Award />,
      title: "Author",
      description:
        "Published numerous books on Islamic theology and philosophy",
    },
    {
      icon: <MessageSquare />,
      title: "Speaker",
      description:
        "Delivered impactful speeches on Quranic interpretation worldwide",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />

        <section
          id="about"
          className="section-padding bg-secondary/30 dark:bg-islamic-navy/20"
        >
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                About Dr. Israr Ahmed
              </h2>
              <div className="h-1 w-20 bg-islamic-gold mx-auto mb-6"></div>
              <p className="text-foreground/80">
                A distinguished Islamic scholar dedicated to spreading the
                message of the Quran
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-6">
                <p className="text-foreground/90">
                  Dr. Israr Ahmed (1932-2010) was a Pakistani Islamic
                  theologian, philosopher, and scholar who became a prominent
                  figure in Islamic revival. After initially being affiliated
                  with Jamaat-e-Islami, he went on to form his own organization
                  called Tanzeem-e-Islami.
                </p>
                <p className="text-foreground/90">
                  Born in Hisar, British India (now in Haryana, India), Dr.
                  Israr migrated to Pakistan during the partition in 1947. He
                  received his MBBS degree from King Edward Medical University
                  in Lahore and practiced medicine for a brief period before
                  dedicating his life to Islamic studies and da'wah (preaching).
                </p>
                <p className="text-foreground/90">
                  He founded the Quran Academy in Lahore and the Markazi Anjuman
                  Khuddam-ul-Quran. Through these institutions, he established
                  an extensive network of Quranic education centers and
                  delivered numerous lectures on Quranic exegesis.
                </p>
                <div className="pt-4">
                  <a
                    href="https://en.wikipedia.org/wiki/Israr_Ahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-islamic-navy dark:text-islamic-gold hover:underline"
                  >
                    Read more on Wikipedia
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border p-5 rounded-xl hover:border-islamic-gold/30 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-islamic-gold/20 text-islamic-navy dark:text-islamic-gold mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-islamic-navy/10 dark:bg-islamic-navy/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/islamic-pattern-light.png')] dark:bg-[url('/islamic-pattern-dark.png')] opacity-5 bg-repeat"></div>

          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Begin Your Journey with the Holy Quran
              </h2>
              <p className="text-lg mb-8 text-foreground/80 max-w-2xl mx-auto">
                Explore the 114 Surahs of the Quran through Dr. Israr Ahmed's
                insightful explanations and deepen your understanding of the
                Allah's message.
              </p>
              <Link
                to="/quran"
                className="inline-flex items-center px-8 py-4 bg-islamic-gold hover:bg-islamic-gold/90 text-black font-medium rounded-md transition-colors group"
              >
                <span>Explore All Surahs</span>
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
