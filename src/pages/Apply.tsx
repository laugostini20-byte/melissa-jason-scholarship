import PageHeader from '../components/PageHeader';

const Apply = () => {
  return (
    <div>
      <PageHeader 
        title="Apply for the Scholarship" 
        subtitle="Take the first step toward your educational goals"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-6 text-navy">Application Information</h2>
            <p className="text-lg text-gray-700 mb-8">
              Application requirements and forms will be available soon. Please check back 
              regularly for updates, or contact us if you have any questions about the 
              application process.
            </p>
            <div className="space-y-4">
              <button
                disabled
                className="bg-gray-300 text-gray-500 px-8 py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Download Application PDF (Coming Soon)
              </button>
              <div className="pt-4">
                <p className="text-gray-600 mb-4">Or complete the application online:</p>
                <button
                  disabled
                  className="bg-gray-300 text-gray-500 px-8 py-3 rounded-lg font-semibold cursor-not-allowed"
                >
                  Online Application Form (Coming Soon)
                </button>
              </div>
            </div>
            <div className="mt-8 p-6 bg-light-gray rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-navy">Need Help?</h3>
              <p className="text-gray-700 mb-4">
                If you have questions about eligibility or the application process, please 
                don't hesitate to reach out.
              </p>
              <a
                href="/contact"
                className="inline-block bg-navy text-white px-6 py-2 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
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

