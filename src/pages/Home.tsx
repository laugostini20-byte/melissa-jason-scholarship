import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import recipientsData from '../data/recipients.json';
import eventsData from '../data/events.json';

const Home = () => {
  const recentRecipients = recipientsData.slice(0, 3);
  const upcomingEvent = eventsData[0];

  return (
    <div className="bg-light-gray">
      <Hero />

      {/* About section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square">
                <img src="/image2.png" alt="Melissa and Jason" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-square mt-6">
                <img src="/image4.png" alt="Melissa and Jason" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div>
              <div className="w-10 h-1 bg-gold mb-5 rounded-full" />
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5 leading-tight">About the Scholarship</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Established in honor of Melissa Klotz and Jason Pollack, this scholarship supports Brighton High School students who embody the kindness, strength, and spark that defined them. Through this scholarship, we carry their light forward and help the next generation thrive in the community they loved.
              </p>
              <Link to="/about" className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Event */}
      {upcomingEvent && (
        <section className="py-16 md:py-20 px-4 bg-navy text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <div className="w-10 h-1 bg-gold mb-5 rounded-full mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Upcoming Event</h2>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-left">
              <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">
                {new Date(upcomingEvent.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">{upcomingEvent.title}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">{upcomingEvent.description}</p>
              <div className="flex flex-wrap gap-4">
                {upcomingEvent.link && (
                  <a href={upcomingEvent.link} target="_blank" rel="noopener noreferrer"
                    className="text-gold hover:text-gold/80 font-semibold">
                    Read article →
                  </a>
                )}
                <Link to="/events" className="text-gold hover:text-gold/80 font-semibold">
                  View All Events →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recipients */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <div className="w-10 h-1 bg-gold mb-5 rounded-full mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">2025 Recipients</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {recentRecipients.map((recipient, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden w-full md:w-72 group">
                <div className="h-56 overflow-hidden bg-gray-100">
                  {recipient.photo && recipient.photo !== '/placeholder.jpg' ? (
                    <img src={recipient.photo} alt={recipient.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">Photo</div>
                  )}
                </div>
                <div className="p-5 border-t-2 border-gold">
                  <h3 className="text-lg font-bold text-navy">{recipient.name}</h3>
                  <p className="text-sm text-gold font-semibold mb-1">Class of {recipient.year}</p>
                  <p className="text-sm text-gray-600">{recipient.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/recipients" className="inline-block border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors">
              View All Recipients
            </Link>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="w-10 h-1 bg-gold mb-5 rounded-full mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Support Our Mission</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Your donation helps us provide scholarships to deserving Brighton students. Every contribution makes a meaningful difference.
          </p>
          <div className="bg-light-gray rounded-2xl p-8 mb-8 inline-block">
            <img src="/qr-code.png" alt="Donation QR Code" className="w-44 h-44 object-contain mx-auto" />
            <p className="text-sm text-gray-500 mt-3">Scan to donate</p>
          </div>
          <div>
            <Link to="/donate" className="inline-block bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
