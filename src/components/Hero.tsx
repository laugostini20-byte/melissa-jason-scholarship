import { Link } from 'react-router-dom';

const stats = [
  { value: 'Brighton', label: 'High School' },
  { value: 'Annual', label: 'Scholarship Award' },
];

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        {/* Background photo */}
        <img
          src="/shannon.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        {/* Dark navy overlay — gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm font-semibold uppercase tracking-widest">Brighton High School</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Melissa &amp; Jason<br />
              <span className="text-gold">Scholarship</span> Fund
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Honoring two extraordinary students by lifting the next generation — through kindness, perseverance, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="bg-gold text-navy px-7 py-3.5 rounded-lg font-bold hover:bg-gold/90 transition-colors text-center shadow-lg shadow-gold/20"
              >
                Our Story
              </Link>
              <Link
                to="/donate"
                className="border-2 border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 hover:border-white/60 transition-colors text-center backdrop-blur-sm"
              >
                Support a Student
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-light-gray to-transparent" />
      </section>

      {/* Stats strip */}
      <div className="bg-navy border-y border-gold/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 divide-x divide-gold/20 max-w-sm mx-auto">
            {stats.map(({ value, label }) => (
              <div key={label} className="py-5 text-center">
                <div className="text-gold font-bold text-xl sm:text-2xl">{value}</div>
                <div className="text-gray-400 text-xs sm:text-sm mt-0.5 uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
