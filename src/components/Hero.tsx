import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-navy text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Melissa & Jason Scholarship Fund
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Supporting outstanding students at BHS through annual scholarships
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/apply"
            className="bg-gold text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
          >
            Apply Now
          </Link>
          <Link
            to="/about"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

