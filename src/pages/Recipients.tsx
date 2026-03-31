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
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {recipientsByYear[year].map((recipient, index) => (
                <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full md:w-72">
                  <div className="h-48 sm:h-64 rounded mb-4 overflow-hidden bg-gray-200">
                    {recipient.photo && recipient.photo !== '/placeholder.jpg' ? (
                      <img
                        src={recipient.photo}
                        alt={recipient.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-400 text-sm sm:text-base">Photo</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-navy">{recipient.name}</h3>
                  <p className="text-sm sm:text-base text-gray-700">{recipient.description}</p>
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

