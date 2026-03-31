import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/eligibility', label: 'Eligibility' },
  { to: '/recipients', label: 'Recipients' },
  { to: '/donors', label: 'Donors' },
  { to: '/events', label: 'Events' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-navy sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <span className="w-1 h-8 bg-gold rounded-full" />
            <span className="text-white font-bold text-base sm:text-lg tracking-tight leading-tight">
              <span className="hidden sm:inline">Melissa & Jason Scholarship Fund</span>
              <span className="sm:hidden">M&J Scholarship</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) =>
              label === 'Donate' ? null : (
                <Link
                  key={to}
                  to={to}
                  className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                    location.pathname === to
                      ? 'text-gold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              )
            )}
            <Link
              to="/donate"
              className="ml-3 bg-gold text-navy px-4 py-2 rounded-lg text-sm font-bold hover:bg-gold/90 transition-colors"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold rounded p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="h-px bg-gold/30" />

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMenu}
                className={`px-3 py-3 text-base font-medium rounded transition-colors ${
                  location.pathname === to ? 'text-gold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/donate"
              onClick={closeMenu}
              className="mt-2 bg-gold text-navy px-4 py-3 rounded-lg text-base font-bold text-center"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
