
export interface Surah {
  id: number;
  surahNumber: number;
  nameArabic: string;
  nameUrdu: string;
  nameEnglish: string;
  totalAyats: number;
  duration: string;
  youtubeUrl: string;
  pdfUrl?: string;
}

const surahs: Surah[] = [
  {
    id: 1,
    surahNumber: 1,
    nameArabic: "الفاتحة",
    nameUrdu: "الفاتحہ",
    nameEnglish: "Al-Fatiha",
    totalAyats: 7,
    duration: "24:38",
    youtubeUrl: "https://www.youtube.com/watch?v=2WAFIAfL7nM",
    pdfUrl: "#"
  },
  {
    id: 2,
    surahNumber: 2,
    nameArabic: "البقرة",
    nameUrdu: "البقرہ",
    nameEnglish: "Al-Baqarah",
    totalAyats: 286,
    duration: "1:32:46",
    youtubeUrl: "https://www.youtube.com/watch?v=h130FLc5f7w",
    pdfUrl: "#"
  },
  {
    id: 3,
    surahNumber: 3,
    nameArabic: "آل عمران",
    nameUrdu: "آل عمران",
    nameEnglish: "Aali Imran",
    totalAyats: 200,
    duration: "1:21:05",
    youtubeUrl: "https://www.youtube.com/watch?v=1pah8tCC3jw",
    pdfUrl: "#"
  },
  {
    id: 4,
    surahNumber: 4,
    nameArabic: "النساء",
    nameUrdu: "النساء",
    nameEnglish: "An-Nisa",
    totalAyats: 176,
    duration: "4:42:15",
    youtubeUrl: "https://www.youtube.com/watch?v=Qei4mdlV9FU",
    pdfUrl: "#"
  },
  {
    id: 5,
    surahNumber: 5,
    nameArabic: "المائدة",
    nameUrdu: "المائدہ",
    nameEnglish: "Al-Ma'idah",
    totalAyats: 120,
    duration: "0:19",
    youtubeUrl: "https://www.youtube.com/watch?v=mNQ132zc1zk",
    pdfUrl: "#"
  },
  {
    id: 6,
    surahNumber: 6,
    nameArabic: "الأنعام",
    nameUrdu: "الانعام",
    nameEnglish: "Al-An'am",
    totalAyats: 165,
    duration: "1:38:24",
    youtubeUrl: "https://www.youtube.com/watch?v=rQXsmZF2ZtA",
    pdfUrl: "#"
  },
  {
    id: 7,
    surahNumber: 7,
    nameArabic: "الأعراف",
    nameUrdu: "الاعراف",
    nameEnglish: "Al-A'raf",
    totalAyats: 206,
    duration: "1:45:32",
    youtubeUrl: "https://www.youtube.com/watch?v=Uz6UueBkp6M",
    pdfUrl: "#"
  }
];

export default surahs;
