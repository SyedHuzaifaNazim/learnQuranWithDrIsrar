import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative  pt-5 overflow-hidden bg-gradient-to-b from-background to-islamic-navy/10 dark:from-background dark:to-islamic-navy/30">
      <div className="absolute inset-0 bg-[url('/islamic-pattern-light.png')] dark:bg-[url('/islamic-pattern-dark.png')] opacity-5 bg-repeat"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-islamic-navy dark:text-white">
              Learn the <span className="text-islamic-gold">Holy Quran</span>{" "}
              with Dr. Israr Ahmed
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              Explore the wisdom and teachings of the Quran through the
              insightful lectures and explanations of one of the most respected
              Islamic scholars.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                to="/quran"
                className="inline-flex items-center justify-center px-6 py-3 bg-islamic-gold hover:bg-islamic-gold/90 text-black font-medium rounded-md transition-colors group"
              >
                <BookOpen className="mr-2 h-5 w-5 md:h-3 md:w-3 lg:h-5 lg:w-5" />
                <span>Learn Quran</span>
                <ChevronRight className="ml-2 h-5 w-5 md:h-3 md:w-3 lg:h-5 lg:w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-islamic-navy dark:border-white hover:border-islamic-gold dark:hover:border-islamic-gold text-islamic-navy dark:text-white font-medium rounded-md transition-colors"
              >
                <span>About Dr. Israr</span>
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-sm mx-auto">
              <div className="absolute inset-0 bg-islamic-gold/20 mix-blend-overlay z-10"></div>
              <img
                src="/Dr.Israr_Ahmed.jpg"
                alt="Dr. Israr Ahmed"
                className="object-cover w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute -bottom-3 -left-3 w-16 h-16 md:w-24 md:h-24 bg-islamic-gold/20 backdrop-blur-sm rounded-full z-10 animate-pulse"></div>
              <div className="absolute -top-3 -right-3 w-16 h-16 md:w-24 md:h-24 bg-islamic-navy/20 backdrop-blur-sm rounded-full z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
