import PageHeader from '../components/PageHeader';
import donorsData from '../data/donors.json';
import type { Donor } from '../types';

const Donors = () => {
  const donors: Donor[] = donorsData;

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {donors.map((donor, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2">{donor.name}</h3>
              <p className="text-sm sm:text-base text-gold font-semibold mb-3">{donor.amount}</p>
              <p className="text-sm sm:text-base text-gray-700">{donor.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-light-gray p-6 sm:p-8 rounded-lg text-center">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-navy">Become a Donor</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
            Your support makes a difference in students' lives. Join our community of generous donors 
            and help us continue supporting outstanding students at Brighton High School.
          </p>
          <a
            href="/donate"
            className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors text-base sm:text-lg"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donors;

