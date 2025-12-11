import PageHeader from '../components/PageHeader';

const Apply = () => {
  return (
    <div>
      <PageHeader 
        title="Apply for the Scholarship" 
        subtitle="Take the first step toward your educational goals"
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-navy">Application Information</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              Application requirements and forms will be available soon. Please check back 
              regularly for updates, or contact us if you have any questions about the 
              application process.
            </p>
            <div className="space-y-4">
              <button
                disabled
                className="w-full sm:w-auto bg-gray-300 text-gray-500 px-6 sm:px-8 py-3 rounded-lg font-semibold cursor-not-allowed text-sm sm:text-base"
              >
                Download Application PDF (Coming Soon)
              </button>
              <div className="pt-4">
                <p className="text-sm sm:text-base text-gray-600 mb-4">Or complete the application online:</p>
                <button
                  disabled
                  className="w-full sm:w-auto bg-gray-300 text-gray-500 px-6 sm:px-8 py-3 rounded-lg font-semibold cursor-not-allowed text-sm sm:text-base"
                >
                  Online Application Form (Coming Soon)
                </button>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-light-gray rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-navy">Need Help?</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                If you have questions about eligibility or the application process, please 
                don't hesitate to reach out.
              </p>
              <a
                href="/contact"
                className="inline-block bg-navy text-white px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors text-sm sm:text-base"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;

