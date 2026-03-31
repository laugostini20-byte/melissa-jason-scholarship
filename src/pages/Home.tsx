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

      {/* About */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Staggered photos */}
            <div className="relative h-80 sm:h-96">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-xl">
                <img src="/image2.png" alt="Melissa and Jason" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-xl border-4 border-light-gray">
                <img src="/image4.png" alt="Melissa and Jason" className="w-full h-full object-cover" />
              </div>
              {/* Gold accent dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gold shadow-lg shadow-gold/40" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">Est. 1997</span>
              </div>
              <h2 className="text-4xl font-bold text-navy mb-5 leading-snug">
                Keeping Their Light Alive
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Melissa Klotz and Jason Pollack were more than Brighton High School students — they were friends, artists, athletes, and a light to everyone around them. Their lives were cut short on June 21, 1997.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                This scholarship exists so that their kindness and spirit live on in every student it supports.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors">
                Read Their Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="bg-navy py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="border-l-2 border-gold pl-8">
            <blockquote className="text-white text-xl sm:text-2xl font-semibold leading-relaxed mb-4">
              We carry their light forward and help the next generation thrive in the community they loved.
            </blockquote>
            <p className="text-gold text-sm uppercase tracking-widest font-semibold">— Melissa & Jason Scholarship Fund</p>
          </div>
        </div>
      </section>

      {/* Upcoming Event */}
      {upcomingEvent && (
        <section className="py-20 md:py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs font-semibold uppercase tracking-widest">Latest</span>
            </div>
            <h2 className="text-4xl font-bold text-navy mb-10">Upcoming Event</h2>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="bg-navy text-white p-8 flex flex-col justify-center items-center md:w-48 shrink-0">
                <div className="text-gold text-sm font-semibold uppercase tracking-wide mb-1">
                  {new Date(upcomingEvent.date).toLocaleDateString('en-US', { month: 'short' })}
                </div>
                <div className="text-5xl font-bold leading-none">
                  {new Date(upcomingEvent.date).getDate()}
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  {new Date(upcomingEvent.date).getFullYear()}
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-navy mb-2">{upcomingEvent.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-5">{upcomingEvent.description}</p>
                <div className="flex flex-wrap gap-5">
                  {upcomingEvent.link && (
                    <a href={upcomingEvent.link} target="_blank" rel="noopener noreferrer"
                      className="text-gold hover:text-gold/80 font-semibold text-sm">
                      Read article →
                    </a>
                  )}
                  <Link to="/events" className="text-gold hover:text-gold/80 font-semibold text-sm">
                    View All Events →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recipients */}
      <section className="py-20 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">Class of 2025</span>
              </div>
              <h2 className="text-4xl font-bold text-navy">This Year's Recipients</h2>
            </div>
            <Link to="/recipients" className="text-sm font-semibold text-navy border-b border-navy/30 hover:border-navy transition-colors pb-0.5 shrink-0">
              View all →
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {recentRecipients.map((recipient, index) => (
              <div key={index} className="bg-light-gray rounded-2xl overflow-hidden w-full md:w-72 group hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden bg-gray-200 relative">
                  {recipient.photo && recipient.photo !== '/placeholder.jpg' ? (
                    <img src={recipient.photo} alt={recipient.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">Photo</div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="w-8 h-0.5 bg-gold mb-3 rounded-full" />
                  <h3 className="text-lg font-bold text-navy">{recipient.name}</h3>
                  <p className="text-sm text-gold font-semibold mt-0.5">{recipient.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-20 px-4 bg-light-gray">
        <div className="container mx-auto max-w-xl text-center">
          <div className="w-10 h-1 bg-gold rounded-full mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-navy mb-4">Make a Difference</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Every contribution helps us recognize and support the outstanding students who carry Melissa and Jason's legacy forward.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-md mb-8 inline-block">
            <img src="/qr-code.png" alt="Donation QR Code" className="w-44 h-44 object-contain mx-auto" />
            <p className="text-sm text-gray-400 mt-3">Scan to donate</p>
          </div>
          <div>
            <Link to="/donate" className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-lg font-bold hover:bg-navy/90 transition-colors shadow-lg shadow-navy/20">
              Donate Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
