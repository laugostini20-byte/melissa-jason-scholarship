import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="h-px bg-gold/30" />
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-1 h-7 bg-gold rounded-full" />
              <h3 className="text-lg font-bold">Melissa &amp; Jason Scholarship Fund</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Honoring the memory of Melissa Klotz and Jason Pollack by supporting outstanding students at Brighton High School.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {[
                { to: '/about', label: 'About' },
                { to: '/eligibility', label: 'Eligibility' },
                { to: '/recipients', label: 'Recipients' },
                { to: '/donate', label: 'Donate' },
                { to: '/events', label: 'Events' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <Link key={to} to={to} className="text-sm text-gray-400 hover:text-gold transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          &copy; {currentYear} Melissa &amp; Jason Scholarship Fund. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
