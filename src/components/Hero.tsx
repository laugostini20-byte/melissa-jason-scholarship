import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-navy text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <div>
            <div className="w-12 h-1 bg-gold mb-6 rounded-full" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Melissa &amp; Jason<br />
              <span className="text-gold">Scholarship</span> Fund
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
              Honoring two extraordinary Brighton students by supporting the next generation — through kindness, perseverance, and community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="bg-gold text-navy px-6 py-3 rounded-lg font-bold hover:bg-gold/90 transition-colors text-center"
              >
                Our Story
              </Link>
              <Link
                to="/donate"
                className="border-2 border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:border-white hover:bg-white/10 transition-colors text-center"
              >
                Support a Student
              </Link>
            </div>
          </div>

          {/* Photo side */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Gold decorative ring */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-gold/40" />
              <img
                src="/image1.png"
                alt="Melissa and Jason"
                className="relative w-full rounded-2xl object-cover shadow-2xl"
              />
              {/* Year badge */}
              <div className="absolute -bottom-4 -left-4 bg-gold text-navy px-4 py-2 rounded-xl font-bold text-sm shadow-lg">
                Est. 1997 · Brighton High School
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Angled bottom edge */}
      <div className="h-12 bg-light-gray" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  );
};

export default Hero;
