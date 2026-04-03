import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1 h-8 bg-gold rounded-full" />
              <h3 className="text-xl font-bold">Melissa &amp; Jason Scholarship Fund</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Honoring the memory of Melissa Klotz and Jason Pollack — two remarkable Brighton students whose spirit lives on through every scholarship awarded.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-gold uppercase tracking-widest mb-5">Navigate</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4">
              {[
                { to: '/about', label: 'About' },
                { to: '/eligibility', label: 'Eligibility' },
                { to: '/recipients', label: 'Recipients' },
                { to: '/donate', label: 'Donate' },
                { to: '/events', label: 'Events' },
                { to: '/get-involved', label: 'Get Involved' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="text-sm text-gray-400 hover:text-gold transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-600">
          &copy; {currentYear} Melissa &amp; Jason Scholarship Fund · Brighton, NY
        </div>
      </div>
    </footer>
  );
};

export default Footer;
