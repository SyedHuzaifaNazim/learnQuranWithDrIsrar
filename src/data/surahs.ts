export interface Surah {
  id: number;
  surahNumber: number;
  nameArabic: string;
  nameUrdu: string;
  nameEnglish: string;
  totalAyats: number;
  duration: string;
  youtubeUrl: string;
  urduDescription: string;
  englishDescription: string;
  pdfUrl: string;
}

const surahs: Surah[] = [
  {
    id: 1,
    surahNumber: 1,
    nameArabic: "الفاتحة",
    nameUrdu: "الفاتحہ",
    nameEnglish: "Al-Fatiha",
    totalAyats: 7,
    urduDescription:
      'یہ ایک مکی سورہ ہے جس میں 7 آیات ہیں۔ یہ سورہ "افتتاح" کے نام سے بھی جانی جاتی ہے اور قرآن کا خلاصہ سمجھی جاتی ہے۔ یہ ہدایت کی دعا ہے، جس میں اللہ کی رحمت اور مدد طلب کی جاتی ہے۔ اس میں اللہ کی بادشاہت، اس کی رحمت اور عبادت و حساب کے تصور کو اجاگر کیا گیا ہے۔ یہ سورہ ہر نماز میں پڑھی جاتی ہے۔',
    englishDescription:
      "This is a Makki Surah with 7 Ayahs. Also known as 'The Opening,' this Surah is the essence of the Quran, summarizing key Islamic beliefs. It is a prayer for guidance, seeking Allah’s mercy and help in staying on the straight path. It emphasizes Allah’s sovereignty, His mercy, and the concept of worship and accountability. This Surah is recited in every unit of the Muslim prayer (Salah).",
    duration: "40:05",
    youtubeUrl: "https://www.youtube.com/watch?v=2WAFIAfL7nM",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/001_Surah_Al-Fatiha.pdf",
  },
  {
    id: 2,
    surahNumber: 2,
    nameArabic: "البقرة",
    nameUrdu: "البقرہ",
    nameEnglish: "Al-Baqarah",
    totalAyats: 286,
    duration: "10:38:52",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 286 آیات ہیں۔ قرآن کی سب سے طویل سورہ جو عقیدہ، قانون، اور اخلاقیات پر روشنی ڈالتی ہے۔ اس میں پچھلی قوموں کے واقعات، صبر، صدقہ، اور عدل کی اہمیت بیان کی گئی ہے۔ اس میں آیت الکرسی شامل ہے جو اللہ کی عظمت بیان کرتی ہے۔ اس سورہ میں سماجی اور اقتصادی انصاف کے اصول، روزے، حج اور خاندانی زندگی کے احکام بیان کیے گئے ہیں۔",
    englishDescription:
      "This is a Madani Surah with 286 Ayahs. The longest Surah of the Quran, it provides a comprehensive guide on faith, law, and morality. It discusses the stories of past nations, the importance of patience, charity, and justice. It contains Ayat-ul-Kursi, one of the most powerful verses about Allah’s majesty. The Surah also lays down principles of social and economic justice, along with laws on fasting, Hajj, and family life.",
    youtubeUrl: "https://www.youtube.com/watch?v=h130FLc5f7w",
    pdfUrl:
      "http://download3.quranurdu.com/Urdu%20Tafheem-ul-Quran%20PDF/002%20Surah%20Baqarah.pdf",
  },
  {
    id: 3,
    surahNumber: 3,
    nameArabic: "آل عمران",
    nameUrdu: "آل عمران",
    nameEnglish: "Aali Imran",
    totalAyats: 200,
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 200 آیات ہیں۔ یہ سورہ حضرت عمرانؑ کے خاندان کا ذکر کرتی ہے، جو حضرت مریمؑ کے والد تھے۔ اس میں حق اور باطل کی کشمکش، حضرت عیسیٰؑ کے معجزات، مومنین کی اخلاص، اور مشکلات میں صبر کی اہمیت بیان کی گئی ہے۔ اس میں غزوہ احد کا ذکر بھی کیا گیا ہے اور اس سے سیکھنے کے اسباق فراہم کیے گئے ہیں۔",
    englishDescription:
      "This is a Madani Surah with 200 Ayahs. Named after the family of Imran (father of Maryam AS), this Surah discusses the struggle between truth and falsehood. It highlights the miracles of Jesus (AS), the sincerity of believers, and the importance of patience in difficult times. It also touches upon the Battle of Uhud and provides lessons in trust and perseverance.",
    duration: "4:09:23",
    youtubeUrl: "https://www.youtube.com/watch?v=1pah8tCC3jw",
    pdfUrl:
      "http://download3.quranurdu.com/Urdu%20Tafheem-ul-Quran%20PDF/003%20Surah%20Al%20Imran.pdf",
  },
  {
    id: 4,
    surahNumber: 4,
    nameArabic: "النساء",
    nameUrdu: "النساء",
    nameEnglish: "An-Nisa",
    totalAyats: 176,
    duration: "4:46:39",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 176 آیات ہیں۔ یہ سورہ خواتین کے حقوق، وراثت کے قوانین، شادی اور خاندانی زندگی کے اصولوں پر روشنی ڈالتی ہے۔ اس میں سماجی انصاف، یتیموں کے حقوق، اور عدل و انصاف کی تعلیم دی گئی ہے۔ اس سورہ میں جہاد اور اسلامی ریاست کے قوانین بھی بیان کیے گئے ہیں۔",
    englishDescription:
      "This is a Madani Surah with 176 Ayahs. It discusses women's rights, inheritance laws, and principles of marriage and family life. It emphasizes social justice, the rights of orphans, and the importance of fairness and equity. The Surah also outlines the rules of Jihad and governance in an Islamic state.",
    youtubeUrl: "https://www.youtube.com/watch?v=Qei4mdlV9FU",
    pdfUrl:
      "http://download3.quranurdu.com/Urdu%20Tafheem-ul-Quran%20PDF/004%20Surah%20An%20Nisa.pdf",
  },
  {
    id: 5,
    surahNumber: 5,
    nameArabic: "المائدة",
    nameUrdu: "المائدہ",
    nameEnglish: "Al-Ma'idah",
    totalAyats: 120,
    duration: "2:58:38",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 120 آیات ہیں۔ اس میں حلال اور حرام کھانے کے احکام، عہد کی پابندی، اور عدل و انصاف پر زور دیا گیا ہے۔ اس سورہ میں اہل کتاب کے ساتھ تعلقات اور حضرت عیسیٰؑ کے معجزات کا ذکر کیا گیا ہے۔",
    englishDescription:
      "This is a Madani Surah with 120 Ayahs. It provides laws on permissible and forbidden foods, emphasizes the importance of keeping promises, and upholds justice and fairness. The Surah also discusses relations with the People of the Book and highlights the miracles of Jesus (AS).",
    youtubeUrl: "https://www.youtube.com/watch?v=mNQ132zc1zk",
    pdfUrl:
      "http://download3.quranurdu.com/Urdu%20Tafheem-ul-Quran%20PDF/005%20Surah%20Al%20Maidah.pdf",
  },
  {
    id: 6,
    surahNumber: 6,
    nameArabic: "الأنعام",
    nameUrdu: "الانعام",
    nameEnglish: "Al-An'am",
    totalAyats: 165,
    duration: "3:45:39",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 165 آیات ہیں۔ یہ توحید، نبوت اور آخرت پر زور دیتی ہے۔ اس میں اللہ کی قدرت، نشانیاں، اور انبیاء کی تبلیغ کا ذکر کیا گیا ہے۔ مشرکین کے عقائد کی تردید کی گئی ہے اور حق کی پیروی کی ترغیب دی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 165 Ayahs. It emphasizes monotheism, prophethood, and the Hereafter. It highlights Allah’s signs in creation and the messages of past prophets. It refutes polytheistic beliefs and urges people to follow the truth.",
    youtubeUrl: "https://www.youtube.com/watch?v=rQXsmZF2ZtA",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/006_Surah_Al-Anaam.pdf",
  },
  {
    id: 7,
    surahNumber: 7,
    nameArabic: "الأعراف",
    nameUrdu: "الاعراف",
    nameEnglish: "Al-A'raf",
    totalAyats: 206,
    duration: "4:56:44",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 206 آیات ہیں۔ اس میں حضرت آدمؑ، حضرت نوحؑ، حضرت ہودؑ، حضرت صالحؑ، حضرت شعیبؑ اور حضرت موسیٰؑ کے واقعات بیان کیے گئے ہیں۔ اس میں نیکی اور بدی کے انجام، جنت و دوزخ اور قیامت کے دن کا ذکر ہے۔ اصحاب الاعراف کا تذکرہ بھی اس سورہ میں آتا ہے۔",
    englishDescription:
      "This is a Makki Surah with 206 Ayahs. It narrates the stories of Prophets Adam, Noah, Hud, Salih, Shuaib, and Moses (AS). It emphasizes the consequences of good and evil, descriptions of Heaven and Hell, and the events of the Day of Judgment. It also mentions the people of A’raf (the heights between Paradise and Hell).",
    youtubeUrl: "https://www.youtube.com/watch?v=Uz6UueBkp6M",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/007_Surah_Al-Araf.pdf",
  },
  {
    id: 8,
    surahNumber: 8,
    nameArabic: "الأنفال",
    nameUrdu: "الانفال",
    nameEnglish: "Al-Anfal",
    totalAyats: 75,
    duration: "1:57:52",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 75 آیات ہیں۔ اس میں غزوہ بدر کے احوال، مال غنیمت کے اصول، اور مسلمانوں کو اللہ پر بھروسہ رکھنے کی ہدایت دی گئی ہے۔ اس میں جہاد، صبر، اور اتحاد کی اہمیت پر بھی زور دیا گیا ہے۔",
    englishDescription:
      "This is a Madani Surah with 75 Ayahs. It discusses the events of the Battle of Badr, rules regarding war booty, and encourages Muslims to trust in Allah. It also highlights the importance of Jihad, patience, and unity among believers.",
    youtubeUrl: "https://www.youtube.com/watch?v=VkgJE1X22TE",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/008_Surah_Al-Anfal.pdf",
  },
  {
    id: 9,
    surahNumber: 9,
    nameArabic: "التوبة",
    nameUrdu: "التوبہ",
    nameEnglish: "At-Tawbah",
    totalAyats: 129,
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 129 آیات ہیں۔ یہ سورہ بغیر بِسم اللہ کے شروع ہوتی ہے اور منافقین کے کردار کو بے نقاب کرتی ہے۔ اس میں غزوہ تبوک، اللہ کی رحمت، اور سچے ایمان والوں کی نشانیوں کا ذکر ہے۔",
    englishDescription:
      "This is a Madani Surah with 129 Ayahs. It is the only Surah that does not begin with 'Bismillah' and exposes the hypocrisy of certain individuals. It discusses the Battle of Tabuk, Allah’s mercy, and the characteristics of true believers.",
    duration: "2:59:00",
    youtubeUrl: "https://www.youtube.com/watch?v=2DCllbQETIU",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/008_Surah_Al-Anfal.pdf",
  },
  {
    id: 10,
    surahNumber: 10,
    nameArabic: "يونس",
    nameUrdu: "یونس",
    nameEnglish: "Yunus",
    totalAyats: 109,
    duration: "1:36:27",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 109 آیات ہیں۔ اس میں حضرت یونسؑ کی قوم کی توبہ، اللہ کی رحمت، اور قرآن کی حقانیت بیان کی گئی ہے۔ اس میں نبیوں کی دعوت اور اللہ کی نشانیوں پر غور و فکر کرنے کی تلقین دی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 109 Ayahs. It narrates the repentance of the people of Prophet Yunus (AS), discusses Allah’s mercy, and emphasizes the truth of the Quran. It also calls for reflection on the signs of Allah and the message of the prophets.",
    youtubeUrl: "https://www.youtube.com/watch?v=MvsTtm_pvOM",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/010_Surah_Yunus.pdf",
  },
  {
    id: 11,
    surahNumber: 11,
    nameArabic: "هود",
    nameUrdu: "ہود",
    nameEnglish: "Hud",
    totalAyats: 123,
    duration: "1:50:43",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 123 آیات ہیں۔ اس میں حضرت نوحؑ، حضرت ہودؑ، حضرت صالحؑ، حضرت ابراہیمؑ، حضرت لوطؑ، حضرت شعیبؑ اور حضرت موسیٰؑ کے واقعات بیان کیے گئے ہیں۔ یہ سورہ صبر، استقامت، اور حق پر ثابت قدم رہنے کی تلقین کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 123 Ayahs. It recounts the stories of Prophets Noah, Hud, Salih, Ibrahim, Lot, Shuaib, and Moses (AS). It emphasizes patience, perseverance, and steadfastness in faith.",
    youtubeUrl: "https://www.youtube.com/watch?v=Bd-NdmYRAYc",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/011_Surah_Hud.pdf",
  },
  {
    id: 12,
    surahNumber: 12,
    nameArabic: "يوسف",
    nameUrdu: "یوسف",
    nameEnglish: "Yusuf",
    totalAyats: 111,
    duration: "1:39:53",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 111 آیات ہیں۔ اس میں حضرت یوسفؑ کی پوری زندگی کا بیان ہے، جو صبر، وفاداری اور اللہ پر بھروسے کی ایک عظیم مثال ہے۔ یہ سورہ ایمان، حکمت اور نیکی کی تعلیم دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 111 Ayahs. It narrates the complete story of Prophet Yusuf (AS), showcasing patience, loyalty, and trust in Allah. This Surah teaches lessons of faith, wisdom, and righteousness.",
    youtubeUrl: "https://www.youtube.com/watch?v=Sj4Xl_Tx-Wk",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/012_Surah_Yusuf.pdf",
  },
  {
    id: 13,
    surahNumber: 13,
    nameArabic: "الرعد",
    nameUrdu: "الرعد",
    nameEnglish: "Ar-Ra'd",
    totalAyats: 43,
    duration: "42:20",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 43 آیات ہیں۔ اس میں قدرت کے نشانات، اللہ کی قدرت، اور وحی کی سچائی پر زور دیا گیا ہے۔ یہ سورہ صبر اور ایمان والوں کے انعامات کا ذکر کرتی ہے۔",
    englishDescription:
      "This is a Madani Surah with 43 Ayahs. It emphasizes the signs of nature, Allah’s power, and the truth of revelation. It highlights patience and the rewards for the believers.",
    youtubeUrl: "https://www.youtube.com/watch?v=-LOXsgWvKdo",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/013_Surah_Al-Raad.pdf",
  },
  {
    id: 14,
    surahNumber: 14,
    nameArabic: "إبراهيم",
    nameUrdu: "ابراہیم",
    nameEnglish: "Ibrahim",
    totalAyats: 52,
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 52 آیات ہیں۔ اس میں حضرت ابراہیمؑ کی دعا، اللہ کی نعمتوں، اور ناشکری کے انجام کا ذکر ہے۔ یہ سورہ اللہ کے عدل اور رحمت پر زور دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 52 Ayahs. It includes the supplication of Prophet Ibrahim (AS), discussions on Allah’s blessings, and the consequences of ingratitude. The Surah emphasizes Allah’s justice and mercy.",
    duration: "55:30",
    youtubeUrl: "https://www.youtube.com/watch?v=mc-ujkAvWNI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/014_Surah%20Al%20Ibrahim.pdf",
  },
  {
    id: 15,
    surahNumber: 15,
    nameArabic: "الحجر",
    nameUrdu: "الحجر",
    nameEnglish: "Al-Hijr",
    totalAyats: 99,
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 99 آیات ہیں۔ اس میں گزشتہ قوموں کے انجام، شیطان کی سرکشی، اور قرآن کی حفاظت کا ذکر کیا گیا ہے۔ یہ سورہ اللہ کی قدرت کو بیان کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 99 Ayahs. It discusses the fate of past nations, Satan’s rebellion, and the divine protection of the Quran. The Surah highlights Allah’s supreme power.",
    duration: "1:12:33",
    youtubeUrl: "https://www.youtube.com/watch?v=2nALhA3e8eU",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/015_Surah%20Al%20Hijr.pdf",
  },
  {
    id: 16,
    surahNumber: 16,
    nameArabic: "النحل",
    nameUrdu: "النحل",
    nameEnglish: "An-Nahl",
    totalAyats: 128,
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 128 آیات ہیں۔ اس میں اللہ کی تخلیقات، نعمتوں، اور شکر گزاری کی اہمیت پر زور دیا گیا ہے۔ یہ سورہ توحید اور وحی کی سچائی کو بیان کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 128 Ayahs. It highlights Allah’s creations, blessings, and the importance of gratitude. The Surah affirms monotheism and the truth of revelation.",
    duration: "1:59:05",
    youtubeUrl: "https://www.youtube.com/watch?v=g-3xBe8roZI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/016_Surah%20An%20Nahl.pdf",
  },
  {
    id: 17,
    surahNumber: 17,
    nameArabic: "الإسراء",
    nameUrdu: "بنی اسرائیل",
    nameEnglish: "Al-Isra",
    totalAyats: 111,
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 111 آیات ہیں۔ اس میں معراج کا ذکر، بنی اسرائیل کی سرکشی، اور قرآن کی عظمت بیان کی گئی ہے۔ یہ سورہ صبر اور نیکی کی تلقین کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 111 Ayahs. It discusses the Night Journey (Isra), the rebellion of the Israelites, and the greatness of the Quran. The Surah emphasizes patience and righteousness.",
    duration: "2:18:49",
    youtubeUrl: "https://www.youtube.com/watch?v=CjzH_QELUjo",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/017_Surah%20Al%20Bani%20Israel.pdf",
  },
  {
    id: 18,
    surahNumber: 18,
    nameArabic: "الكهف",
    nameUrdu: "الکہف",
    nameEnglish: "Al-Kahf",
    totalAyats: 110,
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 110 آیات ہیں۔ اس میں اصحاب کہف، حضرت موسیٰؑ اور خضرؑ، اور ذوالقرنین کے واقعات بیان کیے گئے ہیں۔ یہ سورہ ایمان کی آزمائش اور صبر کا درس دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 110 Ayahs. It narrates the stories of the People of the Cave, Prophet Musa (AS) and Khidr, and Dhul-Qarnayn. The Surah teaches lessons on faith trials and patience.",
    duration: "2:15:20",
    youtubeUrl: "https://www.youtube.com/watch?v=0u9uZR5ZrA0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/018_Surah_Al-Kahaf.pdf",
  },
  {
    id: 19,
    surahNumber: 19,
    nameArabic: "مريم",
    nameUrdu: "مریم",
    nameEnglish: "Maryam",
    totalAyats: 98,
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 98 آیات ہیں۔ اس میں حضرت مریمؑ، حضرت عیسیٰؑ، اور دیگر انبیاء کے واقعات بیان کیے گئے ہیں۔ یہ سورہ اللہ کی رحمت اور انبیاء کی دعاؤں پر زور دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 98 Ayahs. It narrates the stories of Maryam (AS), Prophet Isa (AS), and other prophets. The Surah highlights Allah’s mercy and the prayers of the prophets.",
    duration: "1:08:04",
    youtubeUrl: "https://www.youtube.com/watch?v=txmkzCqSstI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/019_Surah_Al-Maryam.pdf",
  },
  {
    id: 20,
    surahNumber: 20,
    nameArabic: "طه",
    nameUrdu: "طٰہٰ",
    nameEnglish: "Ta-Ha",
    totalAyats: 135,
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 135 آیات ہیں۔ اس میں حضرت موسیٰؑ کی کہانی، فرعون کا انجام، اور قرآن کی نصیحتیں بیان کی گئی ہیں۔ یہ سورہ ہدایت اور صبر کا پیغام دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 135 Ayahs. It narrates the story of Prophet Musa (AS), the fate of Pharaoh, and the teachings of the Quran. The Surah conveys messages of guidance and patience.",
    duration: "1:10:10",
    youtubeUrl: "https://www.youtube.com/watch?v=9je3o5Im8Yo",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/020_Surah_Al-Taha.pdf",
  },
  {
    id: 21,
    surahNumber: 21,
    nameArabic: "الأنبياء",
    nameUrdu: "الانبیاء",
    nameEnglish: "Al-Anbiya",
    totalAyats: 112,
    duration: "1:21:00",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 112 آیات ہیں۔ اس میں مختلف انبیاء کرام کے واقعات اور ان کی قوموں پر آنے والے عذاب کا ذکر ہے۔ یہ سورہ اللہ کی قدرت اور قیامت کی حقیقت پر زور دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 112 Ayahs. It discusses stories of various prophets and the punishments faced by their nations. The Surah emphasizes Allah’s power and the reality of the Day of Judgment.",
    youtubeUrl: "https://www.youtube.com/watch?v=Gvr5tlIPE4c",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/021_Surah_Al-Anbia.pdf",
  },
  {
    id: 22,
    surahNumber: 22,
    nameArabic: "الحج",
    nameUrdu: "الحج",
    nameEnglish: "Al-Hajj",
    totalAyats: 78,
    duration: "1:44:22",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 78 آیات ہیں۔ اس میں حج کے احکام، قیامت کے مناظر، اور اللہ کی وحدانیت پر زور دیا گیا ہے۔ یہ سورہ قربانی اور عبادات کی اہمیت کو اجاگر کرتی ہے۔",
    englishDescription:
      "This is a Madani Surah with 78 Ayahs. It discusses the rituals of Hajj, scenes of the Day of Judgment, and emphasizes the oneness of Allah. The Surah highlights the importance of sacrifice and worship.",
    youtubeUrl: "https://www.youtube.com/watch?v=YYNaD_5Ssl0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/022_Surah_Al-Hajj.pdf",
  },
  {
    id: 23,
    surahNumber: 23,
    nameArabic: "المؤمنون",
    nameUrdu: "المؤمنون",
    nameEnglish: "Al-Mu'minun",
    totalAyats: 118,
    duration: "1:04:40",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 118 آیات ہیں۔ اس میں مومنین کی صفات، قیامت کے احوال، اور اللہ کی رحمت و سزا کا ذکر ہے۔ یہ سورہ ایمان کی بنیادوں کو مضبوط کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 118 Ayahs. It describes the characteristics of true believers, scenes from the Day of Judgment, and Allah’s mercy and punishment. The Surah strengthens the foundations of faith.",
    youtubeUrl: "https://www.youtube.com/watch?v=xNt4KfZdABg",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/023_Surah_Al-Mominoon.pdf",
  },
  {
    id: 24,
    surahNumber: 24,
    nameArabic: "النور",
    nameUrdu: "النور",
    nameEnglish: "An-Nur",
    totalAyats: 64,
    duration: "1:41:12",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 64 آیات ہیں۔ اس میں معاشرتی اصول، پاکدامنی، اور اسلامی معاشرتی قوانین کا ذکر ہے۔ یہ سورہ زنا اور بہتان کے احکام بھی بیان کرتی ہے۔",
    englishDescription:
      "This is a Madani Surah with 64 Ayahs. It discusses social conduct, chastity, and Islamic societal laws. The Surah also provides rulings on adultery and false accusations.",
    youtubeUrl: "https://www.youtube.com/watch?v=q88qvnJa5uo",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/024_Surah_Al-Noor.pdf",
  },
  {
    id: 25,
    surahNumber: 25,
    nameArabic: "الفرقان",
    nameUrdu: "الفرقان",
    nameEnglish: "Al-Furqan",
    totalAyats: 77,
    duration: "1:07:05",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 77 آیات ہیں۔ اس میں قرآن کو حق و باطل میں فرق کرنے والا قرار دیا گیا ہے۔ یہ سورہ کفار کے اعتراضات کا جواب دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 77 Ayahs. It declares the Quran as the criterion between truth and falsehood. The Surah responds to the objections of disbelievers.",
    youtubeUrl: "https://www.youtube.com/watch?v=jpYMPrUmu5Q",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/025_Surah_Al-Furquan.pdf",
  },
  {
    id: 26,
    surahNumber: 26,
    nameArabic: "الشعراء",
    nameUrdu: "الشعراء",
    nameEnglish: "Ash-Shu'ara",
    totalAyats: 227,
    duration: "1:03:18",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 227 آیات ہیں۔ اس میں مختلف انبیاء کی قوموں کے واقعات بیان کیے گئے ہیں، جو اللہ کے پیغام کو جھٹلانے کے نتیجے میں ہلاک ہوئیں۔ یہ سورہ اللہ کی قدرت اور پیغمبروں کی سچائی کو ثابت کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 227 Ayahs. It narrates the stories of various prophets and their nations, who were destroyed for rejecting Allah’s message. The Surah highlights Allah’s power and the truthfulness of the prophets.",
    youtubeUrl: "https://www.youtube.com/watch?v=GlbEc72NkRA",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/026_Surah_Al-Shuara.pdf",
  },
  {
    id: 27,
    surahNumber: 27,
    nameArabic: "النمل",
    nameUrdu: "النمل",
    nameEnglish: "An-Naml",
    totalAyats: 93,
    duration: "56:08",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 93 آیات ہیں۔ اس میں حضرت سلیمانؑ اور ملکہ سبا کی کہانی بیان کی گئی ہے، جس میں اللہ کی حکمت اور معجزات کا ذکر ہے۔ یہ سورہ ایمان، شکرگزاری اور قیامت کی یاد دہانی کراتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 93 Ayahs. It includes the story of Prophet Sulaiman (AS) and the Queen of Sheba, demonstrating Allah’s wisdom and miracles. The Surah emphasizes faith, gratitude, and reminders of the Day of Judgment.",
    youtubeUrl: "https://www.youtube.com/watch?v=SKpHGNj5B4s",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/027_Surah_Al-Naml.pdf",
  },
  {
    id: 28,
    surahNumber: 28,
    nameArabic: "القصص",
    nameUrdu: "القصص",
    nameEnglish: "Al-Qasas",
    totalAyats: 88,
    duration: "1:39:11",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 88 آیات ہیں۔ اس میں حضرت موسیٰؑ کی زندگی کے اہم واقعات بیان کیے گئے ہیں، خاص طور پر ان کی فرعون کے خلاف جدوجہد۔ یہ سورہ اللہ کی مدد اور انصاف پر زور دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 88 Ayahs. It recounts major events in the life of Prophet Musa (AS), particularly his struggle against Pharaoh. The Surah highlights Allah’s support and justice.",
    youtubeUrl: "https://www.youtube.com/watch?v=QEp70pwzZz0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/028_Surah_Al-Qasas.pdf",
  },
  {
    id: 29,
    surahNumber: 29,
    nameArabic: "العنكبوت",
    nameUrdu: "العنکبوت",
    nameEnglish: "Al-Ankabut",
    totalAyats: 69,
    duration: "1:13:29",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 69 آیات ہیں۔ اس میں آزمائشوں اور صبر پر زور دیا گیا ہے، اور بتایا گیا ہے کہ ایمان والوں کو آزمائشوں سے گزارا جاتا ہے۔ یہ سورہ نفاق اور سچائی کے درمیان فرق واضح کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 69 Ayahs. It emphasizes trials and patience, explaining that believers are tested. The Surah differentiates between hypocrisy and truth.",
    youtubeUrl: "https://www.youtube.com/watch?v=EEapQ1N6dCQ",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/029_Surah_Al-Ankabut.pdf",
  },
  {
    id: 30,
    surahNumber: 30,
    nameArabic: "الروم",
    nameUrdu: "الروم",
    nameEnglish: "Ar-Rum",
    totalAyats: 60,
    duration: "47:44",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 60 آیات ہیں۔ اس میں رومیوں کی شکست اور پھر فتح کی پیشن گوئی کی گئی ہے، جو اللہ کی قدرت کی نشانی ہے۔ یہ سورہ تخلیق، قدرت، اور قیامت کے بارے میں بتاتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 60 Ayahs. It prophesizes the defeat and later victory of the Romans, showcasing Allah’s power. The Surah discusses creation, divine power, and the Day of Judgment.",
    youtubeUrl: "https://www.youtube.com/watch?v=eRsk6tNZp2E",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/030_Surah_Al-Rum.pdf",
  },
  {
    id: 31,
    surahNumber: 31,
    nameArabic: "لقمان",
    nameUrdu: "لقمان",
    nameEnglish: "Luqman",
    totalAyats: 34,
    duration: "43:31",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 34 آیات ہیں۔ اس میں حضرت لقمان کی نصیحتیں، حکمت اور والدین کی فرمانبرداری کی اہمیت پر زور دیا گیا ہے۔ یہ سورہ توحید، اعمال کی جزا و سزا اور قیامت کے احوال بیان کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 34 Ayahs. It highlights the wisdom of Luqman, his advice, and the importance of obeying parents. The Surah emphasizes monotheism, reward and punishment for deeds, and the reality of the Hereafter.",
    youtubeUrl: "https://www.youtube.com/watch?v=u7BQtfRFDDI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/031_Surah_Luqman.pdf",
  },
  {
    id: 32,
    surahNumber: 32,
    nameArabic: "السجدة",
    nameUrdu: "السجدہ",
    nameEnglish: "As-Sajdah",
    totalAyats: 30,
    duration: "21:56",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 30 آیات ہیں۔ اس میں انسان کی تخلیق، مرنے کے بعد زندگی اور قیامت کی حقیقت کو بیان کیا گیا ہے۔ یہ سورہ سجدہ کرنے کی فضیلت پر بھی زور دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 30 Ayahs. It discusses the creation of man, life after death, and the reality of the Day of Judgment. The Surah also highlights the virtue of prostration before Allah.",
    youtubeUrl: "https://www.youtube.com/watch?v=ZnMSfzueOGE",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/032_Surah_Al-Sajda.pdf",
  },
  {
    id: 33,
    surahNumber: 33,
    nameArabic: "الأحزاب",
    nameUrdu: "الاحزاب",
    nameEnglish: "Al-Ahzab",
    totalAyats: 73,
    duration: "1:59:01",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 73 آیات ہیں۔ اس میں جنگ احزاب کا ذکر ہے اور نبی کریم ﷺ کی عظمت، ازواج مطہرات کا مقام، اور پردے کے احکام بیان کیے گئے ہیں۔",
    englishDescription:
      "This is a Madani Surah with 73 Ayahs. It discusses the Battle of Ahzab, the greatness of the Prophet Muhammad (PBUH), the status of his wives, and the rulings on modesty.",
    youtubeUrl: "https://www.youtube.com/watch?v=KfHYLh7hOF0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/033_Surah_Al-Ahzab.pdf",
  },
  {
    id: 34,
    surahNumber: 34,
    nameArabic: "سبأ",
    nameUrdu: "سبا",
    nameEnglish: "Saba",
    totalAyats: 54,
    duration: "50:11",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 54 آیات ہیں۔ اس میں قوم سبا کا ذکر ہے، جو اللہ کی نعمتوں کے باوجود ناشکری کے باعث تباہ ہو گئی۔ یہ سورہ توحید اور قیامت پر زور دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 54 Ayahs. It narrates the story of the people of Saba, who were destroyed due to their ingratitude despite Allah’s blessings. The Surah emphasizes monotheism and the reality of the Hereafter.",
    youtubeUrl: "https://www.youtube.com/watch?v=qurJoVZdvdk",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/034_Surah_Saba.pdf",
  },
  {
    id: 35,
    surahNumber: 35,
    nameArabic: "فاطر",
    nameUrdu: "فاطر",
    nameEnglish: "Fatir",
    totalAyats: 45,
    duration: "37:07",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 45 آیات ہیں۔ اس میں اللہ کی قدرت، فرشتوں کی تخلیق، اور نیک و بد اعمال کے نتائج کو بیان کیا گیا ہے۔ یہ سورہ اللہ کی رحمت اور بخشش کو بھی اجاگر کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 45 Ayahs. It highlights Allah’s power, the creation of angels, and the consequences of good and evil deeds. The Surah also emphasizes Allah’s mercy and forgiveness.",
    youtubeUrl: "https://www.youtube.com/watch?v=Ohq7pb8z3bg",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/035_Surah_Fatir.pdf",
  },
  {
    id: 36,
    surahNumber: 36,
    nameArabic: "يس",
    nameUrdu: "یٰسٓ",
    nameEnglish: "Ya-Sin",
    totalAyats: 83,
    duration: "41:43",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 83 آیات ہیں۔ یہ قرآن کا دل کہلاتی ہے اور اللہ کی قدرت، وحی کی صداقت، اور مرنے کے بعد زندگی پر زور دیتی ہے۔ اس میں سابقہ اقوام کے انجام اور قیامت کے احوال بھی بیان کیے گئے ہیں۔",
    englishDescription:
      "This is a Makki Surah with 83 Ayahs. Known as the heart of the Quran, it emphasizes Allah’s power, the truth of revelation, and life after death. The Surah also narrates the fate of previous nations and discusses the Day of Judgment.",
    youtubeUrl: "https://www.youtube.com/watch?v=BPKirN0vwZ8",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/036_Surah_Yasin.pdf",
  },
  {
    id: 37,
    surahNumber: 37,
    nameArabic: "الصافات",
    nameUrdu: "الصّٰفّٰت",
    nameEnglish: "As-Saffat",
    totalAyats: 182,
    duration: "1:07:36",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 182 آیات ہیں۔ اس میں فرشتوں، توحید، قیامت اور انبیاء کے واقعات کو بیان کیا گیا ہے۔ حضرت ابراہیمؑ اور حضرت اسماعیلؑ کی قربانی کا ذکر بھی اس سورہ میں موجود ہے۔",
    englishDescription:
      "This is a Makki Surah with 182 Ayahs. It discusses angels, monotheism, the Day of Judgment, and stories of prophets. The Surah also narrates the sacrifice of Prophet Ibrahim (AS) and Prophet Ismail (AS).",
    youtubeUrl: "https://www.youtube.com/watch?v=9dJYuYza1V0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/037_Surah_Al-Saffat.pdf",
  },
  {
    id: 38,
    surahNumber: 38,
    nameArabic: "ص",
    nameUrdu: "صٓ",
    nameEnglish: "Sad",
    totalAyats: 88,
    duration: "58:05",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 88 آیات ہیں۔ اس میں حضرت داؤدؑ، حضرت سلیمانؑ اور حضرت ایوبؑ کے واقعات، ان کے صبر اور اللہ کی رحمت کا ذکر ہے۔ اس میں کفار کے انجام پر بھی روشنی ڈالی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 88 Ayahs. It narrates the stories of Prophet Dawood (AS), Prophet Sulaiman (AS), and Prophet Ayyub (AS), highlighting their patience and Allah’s mercy. The Surah also discusses the fate of disbelievers.",
    youtubeUrl: "https://www.youtube.com/watch?v=jqA2oN4c6oA",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/038_Surah_Al-Sad.pdf",
  },
  {
    id: 39,
    surahNumber: 39,
    nameArabic: "الزمر",
    nameUrdu: "الزمر",
    nameEnglish: "Az-Zumar",
    totalAyats: 75,
    duration: "1:19:52",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 75 آیات ہیں۔ یہ اخلاص، توحید، اور اعمال کے نتائج پر زور دیتی ہے۔ جنت اور جہنم کے مناظر بھی اس سورہ میں بیان کیے گئے ہیں۔",
    englishDescription:
      "This is a Makki Surah with 75 Ayahs. It emphasizes sincerity, monotheism, and the consequences of actions. The Surah also describes scenes from Paradise and Hell.",
    youtubeUrl: "https://www.youtube.com/watch?v=etvYdidGw58",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/039_Surah_Al-Zumar.pdf",
  },
  {
    id: 40,
    surahNumber: 40,
    nameArabic: "غافر",
    nameUrdu: "المؤمن",
    nameEnglish: "Ghafir",
    totalAyats: 85,
    duration: "1:05:30",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 85 آیات ہیں۔ اس میں اللہ کی مغفرت، نیک اعمال کی جزا، اور نافرمانوں کے انجام کو بیان کیا گیا ہے۔ حضرت موسیٰؑ اور فرعون کے درمیان کشمکش کا ذکر بھی کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 85 Ayahs. It highlights Allah’s forgiveness, the reward for good deeds, and the punishment of disbelievers. The Surah also narrates the conflict between Prophet Musa (AS) and Pharaoh.",
    youtubeUrl: "https://www.youtube.com/watch?v=e66-lPTC4S0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/040_Surah_Al-Momin.pdf",
  },
  {
    id: 41,
    surahNumber: 41,
    nameArabic: "فصلت",
    nameUrdu: "حٰمٓ السجدہ",
    nameEnglish: "Fussilat",
    totalAyats: 54,
    duration: "1:09:12",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 54 آیات ہیں۔ اس میں قرآن کی عظمت، اللہ کی نشانیاں، اور سابقہ اقوام کے انجام کا ذکر ہے۔ یہ سورہ قیامت اور جہنم کی سزا کو بھی بیان کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 54 Ayahs. It highlights the greatness of the Quran, Allah’s signs, and the fate of past nations. The Surah also discusses the Day of Judgment and the punishment of Hell.",
    youtubeUrl: "https://www.youtube.com/watch?v=zRXjU7GpbzI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/041_Surah_Hameem%20Al-Sajda.pdf",
  },
  {
    id: 42,
    surahNumber: 42,
    nameArabic: "الشورى",
    nameUrdu: "الشوریٰ",
    nameEnglish: "Ash-Shura",
    totalAyats: 53,
    duration: "1:10:11",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 53 آیات ہیں۔ اس میں مشاورت کی اہمیت، وحی، اور اللہ کی رحمت پر زور دیا گیا ہے۔ یہ سورہ توحید اور آخرت کی جزا و سزا کے بارے میں بھی بیان کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 53 Ayahs. It emphasizes the importance of consultation, revelation, and Allah’s mercy. The Surah also discusses monotheism and the rewards and punishments of the Hereafter.",
    youtubeUrl: "https://www.youtube.com/watch?v=IxCvAp6-wHE",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/042_Surah_Al-Shura.pdf",
  },
  {
    id: 43,
    surahNumber: 43,
    nameArabic: "الزخرف",
    nameUrdu: "الزخرف",
    nameEnglish: "Az-Zukhruf",
    totalAyats: 89,
    duration: "39:55",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 89 آیات ہیں۔ اس میں دنیاوی عیش و عشرت کی حقیقت، حضرت ابراہیمؑ کی دعوت، اور نبی کریم ﷺ کے مشن کا ذکر ہے۔",
    englishDescription:
      "This is a Makki Surah with 89 Ayahs. It discusses the reality of worldly luxuries, Prophet Ibrahim’s (AS) call to faith, and the mission of Prophet Muhammad (PBUH).",
    youtubeUrl: "https://www.youtube.com/watch?v=gKoJAr_-qHM",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/043_Surah_Al-Zukhruf.pdf",
  },
  {
    id: 44,
    surahNumber: 44,
    nameArabic: "الدخان",
    nameUrdu: "الدخان",
    nameEnglish: "Ad-Dukhan",
    totalAyats: 59,
    duration: "28:15",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 59 آیات ہیں۔ اس میں دھوئیں کے عذاب، فرعون کی تباہی، اور قیامت کے خوفناک مناظر کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 59 Ayahs. It mentions the punishment of smoke, the destruction of Pharaoh, and the terrifying scenes of the Day of Judgment.",
    youtubeUrl: "https://www.youtube.com/watch?v=gDoV-NTwq-4",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/044_Surah_Al-Dokhan.pdf",
  },
  {
    id: 45,
    surahNumber: 45,
    nameArabic: "الجاثية",
    nameUrdu: "الجاثیہ",
    nameEnglish: "Al-Jathiyah",
    totalAyats: 37,
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 37 آیات ہیں۔ اس میں اللہ کی قدرت، کفار کا انجام، اور قیامت کے دن کی سختیوں کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 37 Ayahs. It highlights Allah’s power, the fate of disbelievers, and the hardships of the Day of Judgment.",
    duration: "30:22",
    youtubeUrl: "https://www.youtube.com/watch?v=aWAd7Au3rUM",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/045_Surah_Al-Jathiah.pdf",
  },
  {
    id: 46,
    surahNumber: 46,
    nameArabic: "الأحقاف",
    nameUrdu: "الاحقاف",
    nameEnglish: "Al-Ahqaf",
    totalAyats: 35,
    duration: "43:37",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 35 آیات ہیں۔ اس میں عاد قوم کی تباہی، اللہ کی قدرت، اور وحی کی صداقت کا ذکر ہے۔ یہ انسان کو آخرت کی یاد دہانی کراتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 35 Ayahs. It discusses the destruction of the people of 'Ad, Allah’s power, and the truth of revelation. The Surah serves as a reminder of the Hereafter.",
    youtubeUrl: "https://www.youtube.com/watch?v=Q_6UqIoJSMU",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/046_Surah_Al-Ahqaf.pdf",
  },
  {
    id: 47,
    surahNumber: 47,
    nameArabic: "محمد",
    nameUrdu: "محمد",
    nameEnglish: "Muhammad",
    totalAyats: 38,
    duration: "38:34",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 38 آیات ہیں۔ اس میں جہاد، مومنوں اور منافقوں کے درمیان فرق، اور نبی کریم ﷺ کی اطاعت پر زور دیا گیا ہے۔",
    englishDescription:
      "This is a Madani Surah with 38 Ayahs. It discusses jihad, the distinction between believers and hypocrites, and emphasizes obedience to Prophet Muhammad (PBUH).",
    youtubeUrl: "https://www.youtube.com/watch?v=wcLgEEZ3Ggc",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/047_Surah_Mohammad.pdf",
  },
  {
    id: 48,
    surahNumber: 48,
    nameArabic: "الفتح",
    nameUrdu: "الفتح",
    nameEnglish: "Al-Fath",
    totalAyats: 29,
    duration: "54:46",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 29 آیات ہیں۔ اس میں صلح حدیبیہ، فتح مکہ کی بشارت، اور ایمان والوں کی صفات کا ذکر ہے۔",
    englishDescription:
      "This is a Madani Surah with 29 Ayahs. It discusses the Treaty of Hudaybiyyah, the prophecy of Makkah’s conquest, and the qualities of true believers.",
    youtubeUrl: "https://www.youtube.com/watch?v=IWwOLq9gXc4",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/048_Surah_Al-Fath.pdf",
  },
  {
    id: 49,
    surahNumber: 49,
    nameArabic: "الحجرات",
    nameUrdu: "الحجرات",
    nameEnglish: "Al-Hujurat",
    totalAyats: 18,
    duration: "38:16",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 18 آیات ہیں۔ اس میں معاشرتی آداب، اسلامی بھائی چارے، اور سچائی کی اہمیت کو اجاگر کیا گیا ہے۔",
    englishDescription:
      "This is a Madani Surah with 18 Ayahs. It highlights social manners, Islamic brotherhood, and the importance of truthfulness.",
    youtubeUrl: "https://www.youtube.com/watch?v=Kn8H3wX16kA",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/049_Surah_Al-Hujurat.pdf",
  },
  {
    id: 50,
    surahNumber: 50,
    nameArabic: "ق",
    nameUrdu: "قٓ",
    nameEnglish: "Qaf",
    totalAyats: 45,
    duration: "43:41",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 45 آیات ہیں۔ یہ قیامت، مرنے کے بعد زندگی، اور اللہ کی قدرت پر زور دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 45 Ayahs. It emphasizes the Day of Judgment, life after death, and the immense power of Allah.",
    youtubeUrl: "https://www.youtube.com/watch?v=swJXZZWvIkI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/050_Surah_Qaf.pdf",
  },
  {
    id: 51,
    surahNumber: 51,
    nameArabic: "الذاريات",
    nameUrdu: "الذّٰریٰت",
    nameEnglish: "Adh-Dhariyat",
    totalAyats: 60,
    duration: "23:46",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 60 آیات ہیں۔ اس میں قیامت، اللہ کی قدرت، اور پچھلی اقوام کی تباہی کا ذکر ہے۔ یہ انسان کو اللہ کی نشانیوں پر غور و فکر کرنے کی دعوت دیتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 60 Ayahs. It discusses the Day of Judgment, Allah’s power, and the destruction of past nations. The Surah invites humans to reflect on Allah’s signs.",
    youtubeUrl: "https://www.youtube.com/watch?v=iMyZncYArXI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/051_Surah_Al-Zariat.pdf",
  },
  {
    id: 52,
    surahNumber: 52,
    nameArabic: "الطور",
    nameUrdu: "الطور",
    nameEnglish: "At-Tur",
    totalAyats: 49,
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 49 آیات ہیں۔ اس میں قیامت، جنت اور جہنم کے حالات، اور نبی کریم ﷺ کی حقانیت کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 49 Ayahs. It describes the Day of Judgment, the conditions of Paradise and Hell, and the truthfulness of Prophet Muhammad (PBUH).",
    duration: "24:14",
    youtubeUrl: "https://www.youtube.com/watch?v=J6yT0ZKAsMA",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/052_Surah_Al-Tur.pdf",
  },
  {
    id: 53,
    surahNumber: 53,
    nameArabic: "النجم",
    nameUrdu: "النجم",
    nameEnglish: "An-Najm",
    totalAyats: 62,
    duration: "23:21",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 62 آیات ہیں۔ اس میں وحی، نبی کریم ﷺ کے معراج کا ذکر، اور اللہ کی قدرت کے مختلف مظاہر بیان کیے گئے ہیں۔",
    englishDescription:
      "This is a Makki Surah with 62 Ayahs. It discusses revelation, the Prophet Muhammad’s (PBUH) ascension (Miraj), and various manifestations of Allah’s power.",
    youtubeUrl: "https://www.youtube.com/watch?v=eEBpotTp_j8",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/053_Surah_Al-Najm.pdf",
  },
  {
    id: 54,
    surahNumber: 54,
    nameArabic: "القمر",
    nameUrdu: "القمر",
    nameEnglish: "Al-Qamar",
    totalAyats: 55,
    duration: "27:47",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 55 آیات ہیں۔ اس میں چاند کے دو ٹکڑے ہونے کا معجزہ، سابقہ قوموں کی تباہی، اور قیامت کے احوال بیان کیے گئے ہیں۔",
    englishDescription:
      "This is a Makki Surah with 55 Ayahs. It discusses the miracle of the moon splitting, the destruction of past nations, and the events of the Day of Judgment.",
    youtubeUrl: "https://www.youtube.com/watch?v=uHHG-IbR54E",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/054_Surah_Al-Qamar.pdf",
  },
  {
    id: 55,
    surahNumber: 55,
    nameArabic: "الرحمن",
    nameUrdu: "الرحمٰن",
    nameEnglish: "Ar-Rahman",
    totalAyats: 78,
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 78 آیات ہیں۔ اس میں اللہ کی بے شمار نعمتوں کا ذکر ہے اور بار بار سوال کیا گیا ہے کہ 'پس تم اپنے رب کی کون کون سی نعمتوں کو جھٹلاؤ گے؟'",
    englishDescription:
      "This is a Madani Surah with 78 Ayahs. It highlights countless blessings of Allah and repeatedly asks the question: 'Then which of the favors of your Lord will you deny?'",
    duration: "41:52",
    youtubeUrl: "https://www.youtube.com/watch?v=mhOS4cngC5s",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/055_Surah%20Ar-Rahman.pdf",
  },
  {
    id: 56,
    surahNumber: 56,
    nameArabic: "الواقعة",
    nameUrdu: "الواقعہ",
    nameEnglish: "Al-Waqi'ah",
    totalAyats: 96,
    duration: "41:41",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 96 آیات ہیں۔ اس میں قیامت کے مناظر، جنت و جہنم کی حقیقت، اور نیک و بد لوگوں کے انجام کا ذکر کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 96 Ayahs. It describes the scenes of the Day of Judgment, the reality of Paradise and Hell, and the fate of the righteous and the wicked.",
    youtubeUrl: "https://www.youtube.com/watch?v=BCKhfmWngxE",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/056_Surah_Al-Waqiah.pdf",
  },
  {
    id: 57,
    surahNumber: 57,
    nameArabic: "الحديد",
    nameUrdu: "الحدید",
    nameEnglish: "Al-Hadid",
    totalAyats: 29,
    duration: "1:47:26",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 29 آیات ہیں۔ اس میں اللہ کی قدرت، صدقہ و خیرات کی فضیلت، اور ایمان والوں کو استقامت کی تلقین کی گئی ہے۔",
    englishDescription:
      "This is a Madani Surah with 29 Ayahs. It highlights Allah’s power, the virtue of charity, and encourages believers to remain steadfast in faith.",
    youtubeUrl: "https://www.youtube.com/watch?v=EBWEdTEhFJY",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/057_Surah_Al-Hadid.pdf",
  },
  {
    id: 58,
    surahNumber: 58,
    nameArabic: "المجادلة",
    nameUrdu: "المجادلہ",
    nameEnglish: "Al-Mujadilah",
    totalAyats: 22,
    duration: "42:39",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 22 آیات ہیں۔ اس میں ازدواجی مسائل، جھوٹی قسموں، اور اللہ کی نگرانی کے تصور پر روشنی ڈالی گئی ہے۔",
    englishDescription:
      "This is a Madani Surah with 22 Ayahs. It addresses marital issues, false oaths, and emphasizes Allah’s constant watch over everything.",
    youtubeUrl: "https://www.youtube.com/watch?v=dsxxsU1Hk5k",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/058_Surah_Al-Mujadilah.pdf",
  },
  {
    id: 59,
    surahNumber: 59,
    nameArabic: "الحشر",
    nameUrdu: "الحشر",
    nameEnglish: "Al-Hashr",
    totalAyats: 24,
    duration: "58:58",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 24 آیات ہیں۔ اس میں اللہ کے ناموں، منافقوں کے کردار، اور ایمانداروں کی فضیلت کا ذکر کیا گیا ہے۔",
    englishDescription:
      "This is a Madani Surah with 24 Ayahs. It discusses Allah’s names, the character of hypocrites, and the virtues of true believers.",
    youtubeUrl: "https://www.youtube.com/watch?v=rmoiBJwLixE",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/059_Surah_Al-Hashr.pdf",
  },
  {
    id: 60,
    surahNumber: 60,
    nameArabic: "الممتحنة",
    nameUrdu: "الممتحنہ",
    nameEnglish: "Al-Mumtahanah",
    totalAyats: 13,
    duration: "30:09",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 13 آیات ہیں۔ اس میں مسلمانوں کو دشمنوں کے ساتھ تعلقات میں احتیاط اور سچی دوستی کی اہمیت پر زور دیا گیا ہے۔",
    englishDescription:
      "This is a Madani Surah with 13 Ayahs. It instructs Muslims to be cautious in dealings with enemies and highlights the importance of true friendship.",
    youtubeUrl: "https://www.youtube.com/watch?v=SsyQzEB7W3Y",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/060_Surah_Al-Mumtahinah.pdf",
  },
  {
    id: 61,
    surahNumber: 61,
    nameArabic: "الصف",
    nameUrdu: "الصف",
    nameEnglish: "As-Saff",
    totalAyats: 14,
    duration: "33:59",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 14 آیات ہیں۔ اس میں اللہ کے راستے میں جدوجہد، ایمان کی سچائی، اور رسولوں کی تعلیمات پر عمل کرنے کی تلقین کی گئی ہے۔",
    englishDescription:
      "This is a Madani Surah with 14 Ayahs. It encourages striving in Allah’s cause, the truth of faith, and following the teachings of the messengers.",
    youtubeUrl: "https://www.youtube.com/watch?v=ncoIUi_Wzh4",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/061_Surah_As-Saff.pdf",
  },
  {
    id: 62,
    surahNumber: 62,
    nameArabic: "الجمعة",
    nameUrdu: "الجمعہ",
    nameEnglish: "Al-Jumu'ah",
    totalAyats: 11,
    duration: "28:47",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 11 آیات ہیں۔ اس میں جمعہ کی نماز کی اہمیت، علم کے بغیر عمل کی مذمت، اور اللہ کی اطاعت کی تلقین کی گئی ہے۔",
    englishDescription:
      "This is a Madani Surah with 11 Ayahs. It highlights the importance of Friday prayers, condemns actions without knowledge, and urges obedience to Allah.",
    youtubeUrl: "https://www.youtube.com/watch?v=4IKacXNU6fI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/062_Surah_Al-Jumah.pdf",
  },
  {
    id: 63,
    surahNumber: 63,
    nameArabic: "المنافقون",
    nameUrdu: "المنٰفقون",
    nameEnglish: "Al-Munafiqun",
    totalAyats: 11,
    duration: "28:14",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 11 آیات ہیں۔ اس میں منافقین کی علامات، ان کے جھوٹے وعدوں، اور مسلمانوں کو ان سے بچنے کی ہدایت دی گئی ہے۔",
    englishDescription:
      "This is a Madani Surah with 11 Ayahs. It describes the traits of hypocrites, their false promises, and warns Muslims to be cautious of them.",
    youtubeUrl: "https://www.youtube.com/watch?v=Q5akIuFV_B4",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/063_Surah_Al-Munafiqoon.pdf",
  },
  {
    id: 64,
    surahNumber: 64,
    nameArabic: "التغابن",
    nameUrdu: "التغابن",
    nameEnglish: "At-Taghabun",
    totalAyats: 18,
    duration: "33:53",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 18 آیات ہیں۔ اس میں قیامت کے دن کی حقیقت، اللہ کی قدرت، اور دنیاوی آزمائشوں پر صبر کرنے کی تلقین کی گئی ہے۔",
    englishDescription:
      "This is a Madani Surah with 18 Ayahs. It describes the reality of the Day of Judgment, Allah’s power, and advises patience in worldly trials.",
    youtubeUrl: "https://www.youtube.com/watch?v=uLGMyN9r1YQ",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/064_Surah_Al-Taghabun.pdf",
  },
  {
    id: 65,
    surahNumber: 65,
    nameArabic: "الطلاق",
    nameUrdu: "الطلاق",
    nameEnglish: "At-Talaq",
    totalAyats: 12,
    duration: "25:58",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 12 آیات ہیں۔ اس میں طلاق کے اصول، عورتوں کے حقوق، اور اللہ پر بھروسہ رکھنے کی تعلیم دی گئی ہے۔",
    englishDescription:
      "This is a Madani Surah with 12 Ayahs. It outlines the rules of divorce, women’s rights, and emphasizes trust in Allah.",
    youtubeUrl: "https://www.youtube.com/watch?v=4GLQfQFiXWU",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/065_Surah_Al-Talaq.pdf",
  },
  {
    id: 66,
    surahNumber: 66,
    nameArabic: "التحريم",
    nameUrdu: "التحریم",
    nameEnglish: "At-Tahrim",
    totalAyats: 12,
    duration: "27:33",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 12 آیات ہیں۔ اس میں نبی کریمﷺ کے گھریلو معاملات، توبہ کی اہمیت، اور ایمان والوں کو اپنے اعمال درست کرنے کی ہدایت دی گئی ہے۔",
    englishDescription:
      "This is a Madani Surah with 12 Ayahs. It discusses the Prophet’s household matters, the importance of repentance, and urges believers to correct their deeds.",
    youtubeUrl: "https://www.youtube.com/watch?v=hQgLqxox_2c",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/066_Surah_At-Tahrim.pdf",
  },
  {
    id: 67,
    surahNumber: 67,
    nameArabic: "الملك",
    nameUrdu: "الملک",
    nameEnglish: "Al-Mulk",
    totalAyats: 30,
    duration: "21:51",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 30 آیات ہیں۔ اس میں اللہ کی قدرت، موت و حیات کی حکمت، اور نافرمانوں کے انجام پر روشنی ڈالی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 30 Ayahs. It highlights Allah’s power, the wisdom behind life and death, and the fate of the disbelievers.",
    youtubeUrl: "https://www.youtube.com/watch?v=Bi-fwtUXr1s",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/067_Surah_Al-Mulk.pdf",
  },
  {
    id: 68,
    surahNumber: 68,
    nameArabic: "القلم",
    nameUrdu: "القلم",
    nameEnglish: "Al-Qalam",
    totalAyats: 52,
    duration: "25:23",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 52 آیات ہیں۔ اس میں نبی کریمﷺ کے کردار کی عظمت، جھٹلانے والوں کا انجام، اور صبر و استقامت کی تلقین کی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 52 Ayahs. It praises the character of the Prophet ﷺ, warns against the fate of deniers, and encourages patience and steadfastness.",
    youtubeUrl: "https://www.youtube.com/watch?v=7m5MPHO5uGY",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/068_Surah_Al-Qalam.pdf",
  },
  {
    id: 69,
    surahNumber: 69,
    nameArabic: "الحاقة",
    nameUrdu: "الحاقہ",
    nameEnglish: "Al-Haqqah",
    totalAyats: 52,
    duration: "12:10",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 52 آیات ہیں۔ اس میں قیامت کی حقیقت، سابقہ قوموں کی ہلاکت، اور آخرت میں نیک و بد کے انجام کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 52 Ayahs. It describes the reality of the Day of Judgment, the destruction of past nations, and the fate of the righteous and wicked in the Hereafter.",
    youtubeUrl: "https://www.youtube.com/watch?v=6ZMb9hVAQFc",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/069_Surah_Al-Haqqah.pdf",
  },
  {
    id: 70,
    surahNumber: 70,
    nameArabic: "المعارج",
    nameUrdu: "المعارج",
    nameEnglish: "Al-Ma'arij",
    totalAyats: 44,
    duration: "18:24",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 44 آیات ہیں۔ اس میں قیامت کے ہولناک مناظر، نیک اعمال کی اہمیت، اور صبر و نماز کی تلقین کی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 44 Ayahs. It describes the terrifying scenes of the Day of Judgment, emphasizes the importance of righteous deeds, and urges patience and prayer.",
    youtubeUrl: "https://www.youtube.com/watch?v=0AWXj4koQGY",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/070_Surah_Al-Maarij.pdf",
  },
  {
    id: 71,
    surahNumber: 71,
    nameArabic: "نوح",
    nameUrdu: "نوح",
    nameEnglish: "Nuh",
    totalAyats: 28,
    duration: "14:57",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 28 آیات ہیں۔ اس میں حضرت نوحؑ کی دعوت، ان کی قوم کی نافرمانی، اور اللہ کے عذاب کا ذکر کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 28 Ayahs. It discusses Prophet Nuh’s call to his people, their disobedience, and the punishment from Allah.",
    youtubeUrl: "https://www.youtube.com/watch?v=YuqyY2XLcCg",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/071_Surah_Nuh.pdf",
  },
  {
    id: 72,
    surahNumber: 72,
    nameArabic: "الجن",
    nameUrdu: "الجن",
    nameEnglish: "Al-Jinn",
    totalAyats: 28,
    duration: "20:39",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 28 آیات ہیں۔ اس میں جنات کی حقیقت، ان کے ایمان لانے کا واقعہ، اور توحید کی تعلیم دی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 28 Ayahs. It describes the reality of the Jinn, their acceptance of faith, and emphasizes the oneness of Allah.",
    youtubeUrl: "https://www.youtube.com/watch?v=nefn7qFlSNE",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/072_Surah_Al-Jinn.pdf",
  },
  {
    id: 73,
    surahNumber: 73,
    nameArabic: "المزمل",
    nameUrdu: "المزمل",
    nameEnglish: "Al-Muzzammil",
    totalAyats: 20,
    duration: "15:56",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 20 آیات ہیں۔ اس میں رات کی عبادت کی اہمیت، صبر و استقامت، اور قرآن کی تلاوت کی تاکید کی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 20 Ayahs. It highlights the importance of night prayers, patience, steadfastness, and the recitation of the Quran.",
    youtubeUrl: "https://www.youtube.com/watch?v=cp7a0uZuSPU",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/073_Surah_Al-Mozammil.pdf",
  },
  {
    id: 74,
    surahNumber: 74,
    nameArabic: "المدثر",
    nameUrdu: "المدثر",
    nameEnglish: "Al-Muddathir",
    totalAyats: 56,
    duration: "30:35",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 56 آیات ہیں۔ اس میں نبی کریمﷺ کو دعوت کے حکم، قیامت کی ہولناکی، اور نافرمانوں کے انجام کے بارے میں بتایا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 56 Ayahs. It commands the Prophet ﷺ to spread the message, describes the horrors of Judgment Day, and warns against the fate of the disbelievers.",
    youtubeUrl: "https://www.youtube.com/watch?v=aDimMtFw4nM",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/074_Surah_Al-Mudaththir.pdf",
  },
  {
    id: 75,
    surahNumber: 75,
    nameArabic: "القيامة",
    nameUrdu: "القیٰمۃ",
    nameEnglish: "Al-Qiyamah",
    totalAyats: 40,
    duration: "15:53",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 40 آیات ہیں۔ اس میں قیامت کے دن کی حقیقت، انسان کی نافرمانی، اور آخرت کی جزا و سزا کا ذکر ہے۔",
    englishDescription:
      "This is a Makki Surah with 40 Ayahs. It discusses the reality of the Day of Judgment, human disobedience, and the rewards and punishments of the Hereafter.",
    youtubeUrl: "https://www.youtube.com/watch?v=w18e1jTkhZU",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/075_Surah_Al-Qiyamah.pdf",
  },
  {
    id: 76,
    surahNumber: 76,
    nameArabic: "الإنسان",
    nameUrdu: "الدہر",
    nameEnglish: "Al-Insan",
    totalAyats: 31,
    duration: "14:13",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 31 آیات ہیں۔ اس میں انسان کی تخلیق، نیک لوگوں کے انعامات، اور صبر و شکر کی اہمیت کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Madani Surah with 31 Ayahs. It discusses human creation, the rewards for the righteous, and the importance of patience and gratitude.",
    youtubeUrl: "https://www.youtube.com/watch?v=xkiOndjzeAs",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/076_Surah_Al-Dahr.pdf",
  },
  {
    id: 77,
    surahNumber: 77,
    nameArabic: "المرسلات",
    nameUrdu: "المرسلٰت",
    nameEnglish: "Al-Mursalat",
    totalAyats: 50,
    duration: "12:46",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 50 آیات ہیں۔ اس میں قیامت کی نشانیاں، مجرموں کی سزا، اور نیکوکاروں کی جزا کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 50 Ayahs. It describes the signs of Judgment Day, the punishment of sinners, and the rewards for the righteous.",
    youtubeUrl: "https://www.youtube.com/watch?v=eUych4A9fJ0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/077_Surah_Al-Mursalat.pdf",
  },
  {
    id: 78,
    surahNumber: 78,
    nameArabic: "النبأ",
    nameUrdu: "النبا",
    nameEnglish: "An-Naba",
    totalAyats: 40,
    duration: "9:30",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 40 آیات ہیں۔ اس میں قیامت کے دن کی حقیقت، جنت و جہنم کی تفصیلات، اور اللہ کی قدرت کے مظاہر بیان کیے گئے ہیں۔",
    englishDescription:
      "This is a Makki Surah with 40 Ayahs. It describes the reality of Judgment Day, details about Paradise and Hell, and signs of Allah’s power.",
    youtubeUrl: "https://www.youtube.com/watch?v=Znqm2BT6vEE",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/078_Surah_Al-Naba.pdf",
  },
  {
    id: 79,
    surahNumber: 79,
    nameArabic: "النازعات",
    nameUrdu: "النّٰزعٰت",
    nameEnglish: "An-Nazi'at",
    totalAyats: 46,
    duration: "16:32",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 46 آیات ہیں۔ اس میں فرشتوں کی ذمہ داری، قیامت کے ہولناک مناظر، اور کفار کے انجام کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 46 Ayahs. It discusses the role of angels, the terrifying scenes of Judgment Day, and the fate of the disbelievers.",
    youtubeUrl: "https://www.youtube.com/watch?v=RnEi2idTBgw",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/079_Surah_Al-Naziat.pdf",
  },
  {
    id: 80,
    surahNumber: 80,
    nameArabic: "عبس",
    nameUrdu: "عبس",
    nameEnglish: "Abasa",
    totalAyats: 42,
    duration: "16:06",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 42 آیات ہیں۔ اس میں اللہ کے ہاں حقیقی عزت کا معیار، قیامت کے دن کی حالت، اور قرآن کی اہمیت کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 42 Ayahs. It highlights the true standard of honor in Allah’s eyes, the conditions of Judgment Day, and the significance of the Quran.",
    youtubeUrl: "https://www.youtube.com/watch?v=ypq74UdFymY",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/080_Surah_Al-Abas.pdf",
  },
  {
    id: 81,
    surahNumber: 81,
    nameArabic: "التكوير",
    nameUrdu: "التکویر",
    nameEnglish: "At-Takwir",
    totalAyats: 29,
    duration: "13:17",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 29 آیات ہیں۔ اس میں قیامت کے مناظر، وحی کی سچائی، اور اللہ کی قدرت کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 29 Ayahs. It describes the scenes of the Day of Judgment, the truth of revelation, and the power of Allah.",
    youtubeUrl: "https://www.youtube.com/watch?v=SMLTcCD5OeY",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/081_Surah_Al-Takwir.pdf",
  },
  {
    id: 82,
    surahNumber: 82,
    nameArabic: "الإنفطار",
    nameUrdu: "الانفطار",
    nameEnglish: "Al-Infitar",
    totalAyats: 19,
    duration: "9:28",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 19 آیات ہیں۔ اس میں قیامت کے دن کی تباہی، اعمال کے حساب، اور نیک و بد کے انجام کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 19 Ayahs. It describes the destruction of the Last Day, accountability of deeds, and the fate of the righteous and wicked.",
    youtubeUrl: "https://www.youtube.com/watch?v=rTvsoHRgLFU",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/082_Surah_Al-Infitar.pdf",
  },
  {
    id: 83,
    surahNumber: 83,
    nameArabic: "المطففين",
    nameUrdu: "المطففین",
    nameEnglish: "Al-Mutaffifin",
    totalAyats: 36,
    duration: "13:42",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 36 آیات ہیں۔ اس میں ناپ تول میں کمی کرنے والوں کے لیے وعید، قیامت کے دن کی جزا و سزا، اور جنت و جہنم کے مناظر بیان کیے گئے ہیں۔",
    englishDescription:
      "This is a Makki Surah with 36 Ayahs. It warns against fraudulent trade, describes the rewards and punishments of Judgment Day, and portrays scenes of Paradise and Hell.",
    youtubeUrl: "https://www.youtube.com/watch?v=hfSEbpFXotM",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/083_Surah_Al-Mutaffifin.pdf",
  },
  {
    id: 84,
    surahNumber: 84,
    nameArabic: "الإنشقاق",
    nameUrdu: "الانشقاق",
    nameEnglish: "Al-Inshiqaq",
    totalAyats: 25,
    duration: "21:31",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 25 آیات ہیں۔ اس میں قیامت کے دن زمین و آسمان کی تبدیلی، اعمال کے مطابق انسانوں کے انجام، اور آخرت کی حقیقت کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 25 Ayahs. It discusses the transformation of the heavens and earth on Judgment Day, people's fates according to their deeds, and the reality of the Hereafter.",
    youtubeUrl: "https://www.youtube.com/watch?v=A8Umx_mqbfQ",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/084_Surah_Al-Inshiqaq.pdf",
  },
  {
    id: 85,
    surahNumber: 85,
    nameArabic: "البروج",
    nameUrdu: "البروج",
    nameEnglish: "Al-Buruj",
    totalAyats: 22,
    duration: "9:42",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 22 آیات ہیں۔ اس میں سابقہ قوموں پر ہونے والے مظالم، اللہ کی قدرت، اور اہل ایمان کے لیے بشارت کا ذکر ہے۔",
    englishDescription:
      "This is a Makki Surah with 22 Ayahs. It recounts the oppression faced by past nations, Allah’s supreme power, and glad tidings for the believers.",
    youtubeUrl: "https://www.youtube.com/watch?v=cm7bjeFQCbk",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/085_Surah_Al-Buruj.pdf",
  },
  {
    id: 86,
    surahNumber: 86,
    nameArabic: "الطارق",
    nameUrdu: "الطارق",
    nameEnglish: "At-Tariq",
    totalAyats: 17,
    duration: "4:44",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 17 آیات ہیں۔ اس میں انسان کی تخلیق، اللہ کی قدرت، اور قیامت کے دن کا ذکر کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 17 Ayahs. It discusses human creation, Allah’s power, and the events of the Day of Judgment.",
    youtubeUrl: "https://www.youtube.com/watch?v=O_hc_MQOHNg",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/086_Surah_Al-Tariq.pdf",
  },
  {
    id: 87,
    surahNumber: 87,
    nameArabic: "الأعلى",
    nameUrdu: "الاعلیٰ",
    nameEnglish: "Al-A'la",
    totalAyats: 19,
    duration: "18:26",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 19 آیات ہیں۔ اس میں اللہ کی تسبیح، وحی کی اہمیت، اور کامیاب لوگوں کی صفات بیان کی گئی ہیں۔",
    englishDescription:
      "This is a Makki Surah with 19 Ayahs. It emphasizes glorifying Allah, the significance of revelation, and the traits of successful people.",
    youtubeUrl: "https://www.youtube.com/watch?v=PeKhqvIP05I",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/087_Surah_Al-Ala.pdf",
  },
  {
    id: 88,
    surahNumber: 88,
    nameArabic: "الغاشية",
    nameUrdu: "الغاشیہ",
    nameEnglish: "Al-Ghashiyah",
    totalAyats: 26,
    duration: "10:45",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 26 آیات ہیں۔ اس میں قیامت کے دن کی کیفیت، نیکوکاروں کے انعامات، اور مجرموں کی سزا بیان کی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 26 Ayahs. It describes the conditions of the Last Day, rewards for the righteous, and punishments for the wicked.",
    youtubeUrl: "https://www.youtube.com/watch?v=mLr2GAgXf5Q",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/088_Surah_Al-Ghashiyah.pdf",
  },
  {
    id: 89,
    surahNumber: 89,
    nameArabic: "الفجر",
    nameUrdu: "الفجر",
    nameEnglish: "Al-Fajr",
    totalAyats: 30,
    duration: "18:03",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 30 آیات ہیں۔ اس میں سابقہ قوموں کی تباہی، آزمائش کی حقیقت، اور آخرت کی جزا و سزا کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 30 Ayahs. It mentions the destruction of past nations, the reality of trials, and the rewards and punishments of the Hereafter.",
    youtubeUrl: "https://www.youtube.com/watch?v=ZHhtiSsBVYg",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/089_Surah_Al-Fajr.pdf",
  },
  {
    id: 90,
    surahNumber: 90,
    nameArabic: "البلد",
    nameUrdu: "البلد",
    nameEnglish: "Al-Balad",
    totalAyats: 20,
    duration: "13:03",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 20 آیات ہیں۔ اس میں انسان کی آزمائش، نیکی و بدی کے راستے، اور فلاح پانے والوں کی صفات کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 20 Ayahs. It discusses human trials, the paths of righteousness and evil, and the qualities of those who attain success.",
    youtubeUrl: "https://www.youtube.com/watch?v=Ty6xPyLi3sk",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/090_Surah_Al-Balad.pdf",
  },
  {
    id: 91,
    surahNumber: 91,
    nameArabic: "الشمس",
    nameUrdu: "الشمس",
    nameEnglish: "Ash-Shams",
    totalAyats: 15,
    duration: "15:04",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 15 آیات ہیں۔ اس میں نفس کی پاکیزگی، قوم ثمود کی تباہی، اور نیکی و بدی کے انجام کو بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 15 Ayahs. It discusses the purification of the soul, the destruction of Thamud, and the consequences of righteousness and wickedness.",
    youtubeUrl: "https://www.youtube.com/watch?v=83ud165uejs",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/091_Surah_Al-Shams.pdf",
  },
  {
    id: 92,
    surahNumber: 92,
    nameArabic: "الليل",
    nameUrdu: "اللیل",
    nameEnglish: "Al-Layl",
    totalAyats: 21,
    duration: "20:21",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 21 آیات ہیں۔ اس میں اعمال کی جزا و سزا، نیکی کی راہ، اور بخل و تقویٰ کے اثرات کا ذکر کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 21 Ayahs. It discusses the rewards and punishments for deeds, the path of righteousness, and the effects of miserliness and piety.",
    youtubeUrl: "https://www.youtube.com/watch?v=GpiaeKTS8RM",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/092_Surah_Al-Lail.pdf",
  },
  {
    id: 93,
    surahNumber: 93,
    nameArabic: "الضحى",
    nameUrdu: "الضحیٰ",
    nameEnglish: "Ad-Duha",
    totalAyats: 11,
    duration: "11:23",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 11 آیات ہیں۔ اس میں نبی کریم ﷺ کو تسلی دی گئی، اللہ کی رحمت، اور یتیموں و محتاجوں کے حقوق بیان کیے گئے ہیں۔",
    englishDescription:
      "This is a Makki Surah with 11 Ayahs. It provides comfort to Prophet Muhammad ﷺ, highlights Allah’s mercy, and emphasizes the rights of orphans and the needy.",
    youtubeUrl: "https://www.youtube.com/watch?v=-2l7a6N9Ve4",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/093_Surah_Al-Duha.pdf",
  },
  {
    id: 94,
    surahNumber: 94,
    nameArabic: "الشرح",
    nameUrdu: "الانشراح",
    nameEnglish: "Ash-Sharh",
    totalAyats: 8,
    duration: "9:35",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 8 آیات ہیں۔ اس میں نبی کریم ﷺ کے سینہ کھولنے، مشکلات کے بعد آسانی، اور صبر کی تلقین کا ذکر کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 8 Ayahs. It mentions the expansion of the Prophet’s ﷺ chest, the promise of ease after hardship, and encouragement for patience.",
    youtubeUrl: "https://www.youtube.com/watch?v=48Y-1LmNQfI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/094_Surah_Al-Inshirah.pdf",
  },
  {
    id: 95,
    surahNumber: 95,
    nameArabic: "التين",
    nameUrdu: "التین",
    nameEnglish: "At-Tin",
    totalAyats: 8,
    duration: "6:38",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 8 آیات ہیں۔ اس میں انسان کی تخلیق، انصاف کا دن، اور نیک لوگوں کے بلند مقام کا ذکر کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 8 Ayahs. It discusses human creation, the Day of Judgment, and the high status of the righteous.",
    youtubeUrl: "https://www.youtube.com/watch?v=sEiRS6fKoSk",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/095_Surah_Al-Tin.pdf",
  },
  {
    id: 96,
    surahNumber: 96,
    nameArabic: "العلق",
    nameUrdu: "العلق",
    nameEnglish: "Al-Alaq",
    totalAyats: 19,
    duration: "13:01",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 19 آیات ہیں۔ یہ قرآن کی پہلی وحی پر مشتمل ہے، علم کی اہمیت، انسان کی سرکشی، اور اللہ کی قدرت پر روشنی ڈالتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 19 Ayahs. It contains the first revelation of the Quran, emphasizing the importance of knowledge, human arrogance, and Allah’s power.",
    youtubeUrl: "https://www.youtube.com/watch?v=qnV9eB00IOo",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/096_Surah_Al-Alaq.pdf",
  },
  {
    id: 97,
    surahNumber: 97,
    nameArabic: "القدر",
    nameUrdu: "القدر",
    nameEnglish: "Al-Qadr",
    totalAyats: 5,
    duration: "3:45",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 5 آیات ہیں۔ اس میں لیلة القدر کی فضیلت، فرشتوں کے نزول، اور اس رات کی عبادت کے اجر و ثواب کا بیان ہے۔",
    englishDescription:
      "This is a Makki Surah with 5 Ayahs. It describes the virtues of Laylat-ul-Qadr, the descent of angels, and the immense rewards of worship on this night.",
    youtubeUrl: "https://www.youtube.com/watch?v=pCEeQFIxAIw",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/097_Surah_Al-Qadr.pdf",
  },
  {
    id: 98,
    surahNumber: 98,
    nameArabic: "البينة",
    nameUrdu: "البینہ",
    nameEnglish: "Al-Bayyinah",
    totalAyats: 8,
    duration: "9:37",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 8 آیات ہیں۔ اس میں اہل کتاب اور مشرکین کی گمراہی، رسول کی آمد، اور نیکوکاروں کی جزا کا ذکر ہے۔",
    englishDescription:
      "This is a Madani Surah with 8 Ayahs. It discusses the misguidance of the People of the Book and polytheists, the coming of the Messenger, and the rewards for the righteous.",
    youtubeUrl: "https://www.youtube.com/watch?v=CQFCnWmJmtE",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/098_Surah_Al-Bayyinah.pdf",
  },
  {
    id: 99,
    surahNumber: 99,
    nameArabic: "الزلزلة",
    nameUrdu: "الزلزال",
    nameEnglish: "Az-Zalzalah",
    totalAyats: 8,
    duration: "5:22",
    urduDescription:
      "یہ ایک مدنی سورہ ہے جس میں 8 آیات ہیں۔ اس میں قیامت کے دن کی زلزلہ خیز کیفیت اور انسان کے اعمال کے بدلے کا ذکر ہے۔",
    englishDescription:
      "This is a Madani Surah with 8 Ayahs. It describes the great earthquake of the Last Day and the recompense for human deeds.",
    youtubeUrl: "https://www.youtube.com/watch?v=84JrV_usez0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/099_Surah_Al-Zilzal.pdf",
  },
  {
    id: 100,
    surahNumber: 100,
    nameArabic: "العاديات",
    nameUrdu: "العادیات",
    nameEnglish: "Al-Adiyat",
    totalAyats: 11,
    duration: "5:21",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 11 آیات ہیں۔ اس میں گھوڑوں کی تیز رفتاری، انسان کی ناشکری، اور آخرت میں حساب کتاب کا بیان ہے۔",
    englishDescription:
      "This is a Makki Surah with 11 Ayahs. It describes the swift-running horses, human ingratitude, and the accountability in the Hereafter.",
    youtubeUrl: "https://www.youtube.com/watch?v=9zUYx-54KSI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/100_Surah_Al-Adiyat.pdf",
  },
  {
    id: 101,
    surahNumber: 101,
    nameArabic: "القارعة",
    nameUrdu: "القارعہ",
    nameEnglish: "Al-Qari'ah",
    totalAyats: 11,
    duration: "3:03",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 11 آیات ہیں۔ اس میں قیامت کے ہولناک مناظر، انسان کے اعمال کا وزن، اور جنت و جہنم کے انجام کا ذکر ہے۔",
    englishDescription:
      "This is a Makki Surah with 11 Ayahs. It describes the terrifying scenes of the Day of Judgment, the weighing of deeds, and the fate of people in Paradise and Hell.",
    youtubeUrl: "https://www.youtube.com/watch?v=uTNz_utO8nI",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/101_Surah_Al-Qariah.pdf",
  },
  {
    id: 102,
    surahNumber: 102,
    nameArabic: "التكاثر",
    nameUrdu: "التکاثر",
    nameEnglish: "At-Takathur",
    totalAyats: 8,
    duration: "4:26",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 8 آیات ہیں۔ اس میں دنیاوی مال و دولت کی دوڑ، قبر میں حساب، اور آخرت میں انجام کا ذکر کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 8 Ayahs. It warns about the competition for worldly wealth, the accountability in the grave, and the consequences in the Hereafter.",
    youtubeUrl: "https://www.youtube.com/watch?v=HPZruubeD6k",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/102_Surah_Al-Takatur.pdf",
  },
  {
    id: 103,
    surahNumber: 103,
    nameArabic: "العصر",
    nameUrdu: "العصر",
    nameEnglish: "Al-Asr",
    totalAyats: 3,
    duration: "3:29",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 3 آیات ہیں۔ اس میں وقت کی قسم کھا کر انسان کے نقصان میں ہونے اور نجات کے لیے ایمان، نیک اعمال، اور صبر کی تاکید کی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 3 Ayahs. It swears by time, emphasizing that humanity is at a loss except those who have faith, do righteous deeds, and remain patient.",
    youtubeUrl: "https://www.youtube.com/watch?v=kvzdyKT7phk",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/103_Surah_Al-Asr.pdf",
  },
  {
    id: 104,
    surahNumber: 104,
    nameArabic: "الهمزة",
    nameUrdu: "الہمزہ",
    nameEnglish: "Al-Humazah",
    totalAyats: 9,
    duration: "6:05",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 9 آیات ہیں۔ اس میں طعنہ زنی، غیبت، اور مال جمع کرنے والوں کا انجام بیان کیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 9 Ayahs. It condemns backbiting, slander, and those obsessed with hoarding wealth, describing their dire consequences.",
    youtubeUrl: "https://www.youtube.com/watch?v=dSsJ0oCOhR8",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/104_Surah_Al-Humazah.pdf",
  },
  {
    id: 105,
    surahNumber: 105,
    nameArabic: "الفيل",
    nameUrdu: "الفیل",
    nameEnglish: "Al-Fil",
    totalAyats: 5,
    duration: "3:52",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 5 آیات ہیں۔ اس میں ابرہہ کے ہاتھی والے لشکر کی تباہی اور اللہ کی قدرت کا بیان ہے۔",
    englishDescription:
      "This is a Makki Surah with 5 Ayahs. It narrates the destruction of Abraha’s army of elephants and highlights Allah’s supreme power.",
    youtubeUrl: "https://www.youtube.com/watch?v=7GuqkBfjen0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/105_Surah_Al-Fil.pdf",
  },
  {
    id: 106,
    surahNumber: 106,
    nameArabic: "قريش",
    nameUrdu: "قریش",
    nameEnglish: "Quraysh",
    totalAyats: 4,
    duration: "4:39",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 4 آیات ہیں۔ اس میں قریش قبیلے کی تجارت کے فوائد اور اللہ کی عبادت کی اہمیت پر زور دیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 4 Ayahs. It emphasizes the benefits of the trade of the Quraish tribe and the importance of worshiping Allah.",
    youtubeUrl: "https://www.youtube.com/watch?v=4j4P520Kous",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/106_Surah_Al-Quraish.pdf",
  },
  {
    id: 107,
    surahNumber: 107,
    nameArabic: "الماعون",
    nameUrdu: "الماعون",
    nameEnglish: "Al-Ma'un",
    totalAyats: 7,
    duration: "4:36",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 7 آیات ہیں۔ اس میں ان لوگوں کا ذکر ہے جو دوسروں کی مدد نہیں کرتے اور عبادات میں ریاکاری کرتے ہیں۔",
    englishDescription:
      "This is a Makki Surah with 7 Ayahs. It mentions those who do not help others and perform acts of worship with hypocrisy.",
    youtubeUrl: "https://www.youtube.com/watch?v=5xk9X832Vqo",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/107_Surah_Al-Maun.pdf",
  },
  {
    id: 108,
    surahNumber: 108,
    nameArabic: "الكوثر",
    nameUrdu: "الکوثر",
    nameEnglish: "Al-Kawthar",
    totalAyats: 3,
    duration: "3:28",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 3 آیات ہیں۔ اس میں اللہ کی بے پناہ نعمتوں اور حضرت محمد صلی اللہ علیہ وسلم کے لیے دعا کا ذکر ہے۔",
    englishDescription:
      "This is a Makki Surah with 3 Ayahs. It speaks of Allah’s infinite blessings and a prayer for Prophet Muhammad (PBUH).",
    youtubeUrl: "https://www.youtube.com/watch?v=7UPzG-uTgYY",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/108_Surah_Al-Kausar.pdf",
  },
  {
    id: 109,
    surahNumber: 109,
    nameArabic: "الكافرون",
    nameUrdu: "الکٰفرون",
    nameEnglish: "Al-Kafirun",
    totalAyats: 6,
    duration: "2:41",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 6 آیات ہیں۔ اس میں کافروں سے علیحدگی کی بات کی گئی ہے اور ایمان کی پختگی کا پیغام دیا گیا ہے۔",
    englishDescription:
      "This is a Makki Surah with 6 Ayahs. It emphasizes separation from disbelievers and strengthens the message of firm belief.",
    youtubeUrl: "https://www.youtube.com/watch?v=QLAv3-U3TY0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/109_Surah_Al-Kafirun.pdf",
  },
  {
    id: 110,
    surahNumber: 110,
    nameArabic: "النصر",
    nameUrdu: "النصر",
    nameEnglish: "An-Nasr",
    totalAyats: 3,
    duration: "2:53",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 3 آیات ہیں۔ اس میں اللہ کی مدد اور فتح کا ذکر ہے، اور اس کا پیغام ہے کہ اللہ کی مدد کے بعد توبہ اور اس کی حمد کی جانی چاہیے۔",
    englishDescription:
      "This is a Makki Surah with 3 Ayahs. It speaks of Allah’s help and victory, and the message is to repent and praise Allah after His aid.",
    youtubeUrl: "https://www.youtube.com/watch?v=oYfbf3sxxGw",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/110_Surah_An-Nasar.pdf",
  },
  {
    id: 111,
    surahNumber: 111,
    nameArabic: "المسد",
    nameUrdu: "اللہب",
    nameEnglish: "Al-Masad",
    totalAyats: 5,
    duration: "6:10",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 5 آیات ہیں۔ اس میں ابو لہب اور اس کی بیوی کے عذاب کا ذکر ہے، جو اللہ کے پیغمبر کے مخالف تھے۔",
    englishDescription:
      "This is a Makki Surah with 5 Ayahs. It mentions the punishment of Abu Lahab and his wife, who were enemies of Allah’s Messenger.",
    youtubeUrl: "https://www.youtube.com/watch?v=HmCnrDuv1m0",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/111_Surah_Al-Lahab.pdf",
  },
  {
    id: 112,
    surahNumber: 112,
    nameArabic: "الإخلاص",
    nameUrdu: "الاخلاص",
    nameEnglish: "Al-Ikhlas",
    totalAyats: 4,
    duration: "3:47",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 4 آیات ہیں۔ یہ سورہ اللہ کی واحدیت، اس کے بے نیاز ہونے اور اس کی بے نظیر خصوصیات کو بیان کرتی ہے۔",
    englishDescription:
      "This is a Makki Surah with 4 Ayahs. It declares the Oneness of Allah, His self-sufficiency, and His unique attributes.",
    youtubeUrl: "https://www.youtube.com/watch?v=FZsr1xtgj0k",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/112_Surah_Al-Ikhlas.pdf",
  },
  {
    id: 113,
    surahNumber: 113,
    nameArabic: "الفلق",
    nameUrdu: "الفلق",
    nameEnglish: "Al-Falaq",
    totalAyats: 5,
    duration: "8:14",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 5 آیات ہیں۔ یہ سورہ اللہ کی پناہ طلب کرنے کے بارے میں ہے، خاص طور پر برائیوں، جادو، اور حسد سے بچنے کے لیے دعا کی گئی ہے۔",
    englishDescription:
      "This is a Makki Surah with 5 Ayahs. It is a prayer seeking refuge in Allah from the evils of creation, sorcery, and envy.",
    youtubeUrl: "https://www.youtube.com/watch?v=uaItRZob6Zg",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/113_Surah_Al-Falaq.pdf",
  },
  {
    id: 114,
    surahNumber: 114,
    nameArabic: "الناس",
    nameUrdu: "الناس",
    nameEnglish: "An-Nas",
    totalAyats: 6,
    duration: "5:46",
    urduDescription:
      "یہ ایک مکی سورہ ہے جس میں 6 آیات ہیں۔ اس میں اللہ سے پناہ مانگنے کی دعا کی گئی ہے، خاص طور پر شیطان کی وسوسوں اور برائیوں سے بچنے کے لیے۔",
    englishDescription:
      "This is a Makki Surah with 6 Ayahs. It is a prayer asking for protection from the whisperings of Satan and the evils of humanity.",
    youtubeUrl: "https://www.youtube.com/watch?v=UjLZLt3A6OE",
    pdfUrl:
      "https://quranurdu.com/Tafheem-ul-Quran%20by%20Syed%20Moududi_eBook/114_Surah_Al-Nas.pdf",
  },
];

export default surahs;
