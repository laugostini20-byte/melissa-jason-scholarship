import PageHeader from '../components/PageHeader';

const Donate = () => {
  const handleDonateClick = () => {
    // Placeholder: Link to external donation page
    window.open('https://example.com/donate', '_blank');
  };

  return (
    <div>
      <PageHeader 
        title="Donate" 
        subtitle="Support students and make a difference"
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Your generous donation helps us provide scholarships to deserving students. 
              Every contribution, no matter the size, makes a meaningful impact on a student's 
              educational journey.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-navy">Donate via QR Code</h2>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-gray-400 text-sm sm:text-lg">QR Code Placeholder</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">Scan this QR code with your mobile device to donate</p>
            </div>
          </div>

          <div className="bg-light-gray p-6 sm:p-8 rounded-lg text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-navy">Donate Online</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Click the button below to be redirected to our secure donation page.
            </p>
            <button
              onClick={handleDonateClick}
              className="bg-gold text-navy px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-base sm:text-lg w-full sm:w-auto"
            >
              Donate Now
            </button>
          </div>

          <div className="mt-8 sm:mt-12 bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-navy">Other Ways to Give</h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <li>• Mail a check payable to: <strong>Melissa & Jason Scholarship Fund</strong></li>
              <li>• Contact us for information about corporate sponsorships</li>
              <li>• Inquire about setting up a recurring donation</li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="text-gold hover:text-gold/80 font-semibold"
              >
                Contact us for more information →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;

