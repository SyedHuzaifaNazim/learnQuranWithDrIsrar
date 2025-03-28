import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuranCardProps {
  id: number;
  surahNumber: number;
  nameArabic: string;
  nameUrdu: string;
  nameEnglish: string;
  totalAyats: number;
  duration: string;
}

const QuranCard = ({
  id,
  surahNumber,
  nameArabic,
  nameUrdu,
  nameEnglish,
  totalAyats,
  duration,
}: QuranCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/surah/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-xl transition-all duration-300",
        "bg-white dark:bg-black/20 hover:bg-islamic-gold/5 dark:hover:bg-islamic-gold/10",
        "border border-border hover:border-islamic-gold/50",
        "backdrop-blur-sm shadow-md hover:shadow-xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 w-16 h-16 bg-islamic-gold/10 rounded-bl-3xl z-0"></div>

      <div className="p-5 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-islamic-navy/10 dark:bg-white/10 text-islamic-navy dark:text-white font-semibold">
            {surahNumber}
          </div>

          <div className="flex items-center text-xs text-foreground/70">
            <Clock className="h-3.5 w-3.5 mr-1" />
            {duration}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-arabic text-right mb-1" dir="rtl">
            {nameArabic}
          </h3>

          <p className="text-base font-decorative text-foreground">
            {nameEnglish}
          </p>
          <p className="text-sm text-foreground/70">{totalAyats} Ayats</p>
        </div>

        <div
          className={`mt-4 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center px-3 py-1.5 bg-islamic-gold/20 rounded-full text-sm font-medium text-islamic-navy dark:text-white group-hover:bg-islamic-gold group-hover:text-black transition-colors">
            <Play className="h-3.5 w-3.5 mr-1.5" />
            <span>Watch Now</span>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-t from-islamic-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
    </Link>
  );
};

export default QuranCard;
