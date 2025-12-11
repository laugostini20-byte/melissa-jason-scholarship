import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-navy text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <Link to="/" className="text-2xl font-bold mb-4 md:mb-0">
            Melissa & Jason Scholarship Fund
          </Link>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <Link to="/about" className="hover:text-gold transition-colors">About</Link>
            <Link to="/eligibility" className="hover:text-gold transition-colors">Eligibility</Link>
            <Link to="/apply" className="hover:text-gold transition-colors">Apply</Link>
            <Link to="/donate" className="hover:text-gold transition-colors">Donate</Link>
            <Link to="/recipients" className="hover:text-gold transition-colors">Recipients</Link>
            <Link to="/events" className="hover:text-gold transition-colors">Events</Link>
            <Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

