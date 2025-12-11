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
      
      <div className="container mx-auto px-4 py-16">
        {years.map((year) => (
          <section key={year} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-navy border-b-2 border-gold pb-2">
              Class of {year}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipientsByYear[year].map((recipient, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 bg-gray-200 rounded mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Photo</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-navy">{recipient.name}</h3>
                  <p className="text-gray-700">{recipient.description}</p>
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

