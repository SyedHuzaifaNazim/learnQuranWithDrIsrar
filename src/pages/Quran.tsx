
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuranCard from '@/components/QuranCard';
import surahs from '@/data/surahs';

const Quran = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSurahs, setFilteredSurahs] = useState(surahs);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredSurahs(surahs);
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
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-background to-islamic-navy/5 dark:from-background dark:to-islamic-navy/20">
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Explore the Holy Quran
              </h1>
              <div className="h-1 w-20 bg-islamic-gold mx-auto mb-6"></div>
              <p className="text-foreground/80">
                Discover all 114 Surahs with Dr. Israr Ahmed's explanations
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto mb-10">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-foreground/50" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-3 bg-secondary/50 dark:bg-white/5 backdrop-blur-sm border border-border rounded-lg focus:ring-2 focus:ring-islamic-gold/30 focus:border-islamic-gold/30 focus:outline-none transition-all"
                  placeholder="Search by Surah number or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

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
                filteredSurahs.map((surah) => (
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
                  <p className="text-lg text-foreground/70">No surahs found matching "{searchTerm}"</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Quran;
