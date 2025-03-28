import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Quran", path: "/quran" },
    { name: "Books", path: "/books" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <span className="text-xl md:text-2xl font-serif font-bold bg-gradient-to-r from-islamic-navy to-islamic-gold bg-clip-text text-transparent dark:from-white dark:to-islamic-gold">
              Learn Quran with Dr Israr
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-islamic-gold dark:text-islamic-gold"
                      : "text-foreground/80 hover:text-foreground dark:text-foreground/80 dark:hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="ml-2 p-2 rounded-md text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 dark:bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-islamic-gold dark:text-islamic-gold bg-primary/5"
                      : "text-foreground/80 hover:text-foreground hover:bg-primary/5"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
