import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import recipientsData from '../data/recipients.json';
import eventsData from '../data/events.json';

const Home = () => {
  const recentRecipients = recipientsData.slice(0, 3);
  const upcomingEvent = eventsData[0];

  return (
    <div>
      <Hero />
      
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About the Scholarship</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Melissa & Jason Scholarship Fund was established to honor the memory of two 
              extraordinary individuals who believed deeply in the power of education to transform 
              lives. Our mission is to support outstanding students at BHS by providing annual 
              scholarships that recognize academic excellence, leadership, and community service.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We are committed to helping students achieve their educational goals and make a 
              positive impact in their communities.
            </p>
            <div className="text-center">
              <Link
                to="/about"
                className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {upcomingEvent && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Event</h2>
            <div className="max-w-2xl mx-auto bg-light-gray p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-3 text-navy">{upcomingEvent.title}</h3>
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

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Past Recipients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {recentRecipients.map((recipient, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Photo</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">{recipient.name}</h3>
                <p className="text-gray-600 mb-2">Class of {recipient.year}</p>
                <p className="text-gray-700">{recipient.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/recipients"
              className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              View All Recipients
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              Your donation helps us provide scholarships to deserving students. 
              Every contribution makes a difference in a student's educational journey.
            </p>
            <div className="bg-light-gray p-8 rounded-lg mb-6">
              <div className="w-48 h-48 mx-auto bg-gray-200 rounded flex items-center justify-center mb-4">
                <span className="text-gray-400">QR Code</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Scan to donate</p>
            </div>
            <Link
              to="/donate"
              className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
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

