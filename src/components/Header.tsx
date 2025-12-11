import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-navy text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
            <span className="hidden sm:inline">Melissa & Jason Scholarship Fund</span>
            <span className="sm:hidden">M&J Scholarship</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded p-2 touch-target"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 md:top-auto bg-navy md:bg-transparent shadow-lg md:shadow-none`}>
            <div className="container mx-auto px-4 py-4 md:py-0 md:px-0">
              <div className="flex flex-col md:flex-row md:items-center md:gap-6 space-y-0 md:space-y-0">
                <Link to="/" className="py-3 md:py-2 hover:text-gold transition-colors touch-target flex items-center" onClick={closeMenu}>Home</Link>
                <Link to="/about" className="py-3 md:py-2 hover:text-gold transition-colors touch-target flex items-center" onClick={closeMenu}>About</Link>
                <Link to="/eligibility" className="py-3 md:py-2 hover:text-gold transition-colors touch-target flex items-center" onClick={closeMenu}>Eligibility</Link>
                <Link to="/apply" className="py-3 md:py-2 hover:text-gold transition-colors touch-target flex items-center" onClick={closeMenu}>Apply</Link>
                <Link to="/donate" className="py-3 md:py-2 hover:text-gold transition-colors touch-target flex items-center" onClick={closeMenu}>Donate</Link>
                <Link to="/recipients" className="py-3 md:py-2 hover:text-gold transition-colors touch-target flex items-center" onClick={closeMenu}>Recipients</Link>
                <Link to="/events" className="py-3 md:py-2 hover:text-gold transition-colors touch-target flex items-center" onClick={closeMenu}>Events</Link>
                <Link to="/faq" className="py-3 md:py-2 hover:text-gold transition-colors touch-target flex items-center" onClick={closeMenu}>FAQ</Link>
                <Link to="/contact" className="py-3 md:py-2 hover:text-gold transition-colors touch-target flex items-center" onClick={closeMenu}>Contact</Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

