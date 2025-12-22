import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import recipientsData from '../data/recipients.json';
import eventsData from '../data/events.json';
import donorsData from '../data/donors.json';

const Home = () => {
  const recentRecipients = recipientsData.slice(0, 3);
  const upcomingEvent = eventsData[0];
  const topDonors = donorsData.slice(0, 6);

  return (
    <div>
      <Hero />
      
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">About the Scholarship</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6">
              <div className="flex flex-col justify-center">
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  The Melissa & Jason Scholarship Fund was established to honor the memory of two 
                  extraordinary individuals who believed deeply in the power of education to transform 
                  lives. Our mission is to honor the lives of Melissa Klotz and Jason Pollack by supporting Brighton High School students who embody the kindness, strength, and spark that defined them. Through this scholarship, we carry their light forward and help the next generation thrive in the community they loved.
                </p>
                <div className="text-center md:text-left">
                  <Link
                    to="/about"
                    className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors text-base sm:text-lg"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/image1.png" 
                    alt="Melissa and Jason" 
                    className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/image2.png" 
                    alt="Melissa and Jason" 
                    className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {upcomingEvent && (
        <section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Upcoming Event</h2>
            <div className="max-w-2xl mx-auto bg-light-gray p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-navy">{upcomingEvent.title}</h3>
              <p className="text-gray-600 mb-2">
                <strong>Date:</strong> {new Date(upcomingEvent.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-700">{upcomingEvent.description}</p>
              <Link
                to="/events"
                className="inline-block mt-4 text-gold hover:text-gold/80 font-semibold"
              >
                View All Events →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Past Recipients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {recentRecipients.map((recipient, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="h-40 sm:h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm sm:text-base">Photo</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-navy">{recipient.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-2">Class of {recipient.year}</p>
                <p className="text-sm sm:text-base text-gray-700">{recipient.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/recipients"
              className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-base sm:text-lg"
            >
              View All Recipients
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Our Top Donors</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 text-center max-w-3xl mx-auto px-4">
            We are grateful to our generous donors who make these scholarships possible. 
            Their support helps students achieve their educational dreams.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {topDonors && topDonors.length > 0 ? (
              topDonors.map((donor, index) => (
                <div key={index} className="bg-light-gray p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg sm:text-xl font-semibold text-navy mb-2">{donor.name}</h3>
                  <p className="text-sm sm:text-base text-gold font-semibold mb-3">{donor.amount}</p>
                  <p className="text-sm sm:text-base text-gray-700">{donor.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600 col-span-full text-center">No donors to display at this time.</p>
            )}
          </div>
          <div className="text-center">
            <Link
              to="/donors"
              className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-base sm:text-lg mb-4"
            >
              View All Donors
            </Link>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Want to join our community of supporters?
            </p>
            <Link
              to="/donate"
              className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors text-base sm:text-lg"
            >
              Become a Donor
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Support Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 px-2">
              Your donation helps us provide scholarships to deserving students. 
              Every contribution makes a difference in a student's educational journey.
            </p>
            <div className="bg-light-gray p-6 sm:p-8 rounded-lg mb-6">
              <div className="w-40 h-40 sm:w-48 sm:h-48 mx-auto rounded flex items-center justify-center mb-4">
                <img 
                  src="/qr-code.png" 
                  alt="Donation QR Code" 
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">Scan to donate</p>
            </div>
            <Link
              to="/donate"
              className="inline-block bg-navy text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors text-base sm:text-lg"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

