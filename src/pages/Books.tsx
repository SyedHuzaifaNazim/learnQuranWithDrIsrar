import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Book {
  title: string;
  description: string;
  pages: number;
  author: string;
  publishedYear: number;
  language: string;
  pdfLink: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative overflow-hidden  rounded-xl transition-all duration-300",
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
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="text-xs text-foreground/70">{book.pages} Pages</div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">
            {book.title}
          </h3>
          <p className="text-sm text-foreground/70">{book.description}</p>
          <p className="text-xs text-foreground/50">
            By {book.author} ({book.publishedYear})
          </p>
        </div>

        <div
          className={`mt-4 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            to={book.pdfLink}
            target="_blank"
            className="inline-flex items-center cursor-pointer justify-center px-3 py-1.5 bg-islamic-gold/20 rounded-full text-sm font-medium text-islamic-navy dark:text-white group-hover:bg-islamic-gold group-hover:text-black transition-colors"
          >
            <FileText className="h-4 w-4 mr-1.5" />
            <span>Read PDF</span>
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-islamic-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

const Books: React.FC<{ books: Book[] }> = ({ books }) => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 lg:grid-cols-4 gap-6 p-5">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Books;
