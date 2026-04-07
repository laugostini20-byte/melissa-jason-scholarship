import PageHeader from '../components/PageHeader';
import recipientsData from '../data/recipients.json';
import type { Recipient } from '../types';

const Recipients = () => {
  // Group recipients by year
  const recipientsByYear = recipientsData.reduce((acc: Record<number, Recipient[]>, recipient) => {
    if (!acc[recipient.year]) {
      acc[recipient.year] = [];
    }
    acc[recipient.year].push(recipient);
    return acc;
  }, {});

  const years = Object.keys(recipientsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div>
      <PageHeader 
        title="Past Recipients" 
        subtitle="Celebrating our scholarship recipients"
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        {years.map((year) => (
          <section key={year} className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-navy border-b-2 border-gold pb-2 text-center">
              Class of {year}
            </h2>
            <div className="flex flex-col items-center gap-6 sm:gap-8 w-full">
              {recipientsByYear[year].map((recipient, index) => (
                <div key={index} className="w-full max-w-3xl rounded-lg shadow-md overflow-hidden">
                  {recipient.photo && recipient.photo !== '/placeholder.jpg' ? (
                    <img
                      src={recipient.photo}
                      alt={recipient.name}
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="bg-gray-200 flex items-center justify-center h-48">
                      <span className="text-gray-400">{recipient.name}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Recipients;

