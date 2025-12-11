import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-navy text-white py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Melissa & Jason Scholarship Fund
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 px-2">
          Supporting outstanding students at Brighton High School through annual scholarships
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            to="/apply"
            className="bg-gold text-navy px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-base sm:text-lg"
          >
            Apply Now
          </Link>
          <Link
            to="/about"
            className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy transition-colors text-base sm:text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

