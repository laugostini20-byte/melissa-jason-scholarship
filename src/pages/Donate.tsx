import PageHeader from '../components/PageHeader';

const Donate = () => {
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

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-navy">Donate via QR Code</h2>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg mb-4 sm:mb-6 flex items-center justify-center">
                <img
                  src="/qr-code.png"
                  alt="Donation QR Code"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-600">Scan this QR code with your mobile device to donate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
