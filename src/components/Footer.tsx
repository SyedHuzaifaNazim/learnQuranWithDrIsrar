
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-islamic-navy/10 dark:bg-islamic-navy/50 border-t border-border backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-foreground">Learn Quran with Israr</h3>
            <p className="text-sm text-foreground/80 max-w-xs">
              Explore the teachings of Dr. Israr Ahmed and deepen your understanding of the Holy Quran through his insightful lectures.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-islamic-gold transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-islamic-gold transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-islamic-gold transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-foreground/80 hover:text-islamic-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/quran" className="text-sm text-foreground/80 hover:text-islamic-gold transition-colors">Quran</Link>
              </li>
              <li>
                <Link to="/books" className="text-sm text-foreground/80 hover:text-islamic-gold transition-colors">Books</Link>
              </li>
              <li>
                <Link to="/dua" className="text-sm text-foreground/80 hover:text-islamic-gold transition-colors">Dua</Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-foreground/80 hover:text-islamic-gold transition-colors">About Dr. Israr</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-semibold text-foreground">Contact</h3>
            <p className="text-sm text-foreground/80">
              For inquiries and feedback, please reach out to us.
            </p>
            <div className="text-sm text-foreground/80">
              <p>Email: info@learnquranwithisrar.com</p>
              <p className="mt-1">Phone: +92 XXX XXXXXXX</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 py-6 text-center text-sm text-foreground/70">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-islamic-burgundy" fill="currentColor" /> for spreading knowledge | © {currentYear} Learn Quran with Israr
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
