import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const Donors = () => {
  return (
    <div>
      <PageHeader
        title="Our Donors"
        subtitle="Thank you to our generous supporters"
      />

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <p className="text-base sm:text-lg text-gray-700 text-center">
            We are deeply grateful to all our donors who make these scholarships possible.
            Their generosity helps students achieve their educational dreams and honors the
            legacy of Melissa & Jason.
          </p>
        </div>

        <div className="text-center py-12 text-gray-500 text-base sm:text-lg">
          Donor recognition coming soon.
        </div>

        <div className="mt-12 bg-light-gray p-6 sm:p-8 rounded-lg text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-navy">Become a Donor</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
            Your support makes a difference in students' lives. Join our community of generous donors
            and help us continue supporting outstanding students at Brighton High School.
          </p>
          <Link
            to="/donate"
            className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors text-base sm:text-lg"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Donors;
