import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import eventsData from '../data/events.json';
import type { Event } from '../types';

const Events = () => {
  const [events] = useState<Event[]>(eventsData);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <PageHeader 
        title="Events & News" 
        subtitle="Stay updated with our latest news and events"
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {events.length === 0 ? (
            <div className="text-center py-8 sm:py-12">
              <p className="text-base sm:text-lg text-gray-600">No events scheduled at this time. Check back soon!</p>
            </div>
          ) : (
            events.map((event, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy mb-2 md:mb-0">{event.title}</h2>
                  <span className="text-gold font-semibold whitespace-nowrap text-sm sm:text-base">
                    {formatDate(event.date)}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-gray-700">{event.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;

