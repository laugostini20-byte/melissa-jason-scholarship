import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us"
      />

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-navy">Get in Touch</h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
            Have a question about the scholarship? Want to learn more about how you can
            get involved? We'd love to hear from you.
          </p>
          <div>
            <h3 className="text-sm sm:text-base font-semibold text-navy mb-2">For Nominations</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-2">
              To nominate yourself or someone else for the scholarship:
            </p>
            <a href="mailto:Matt_Comeau@bcsd.org" className="text-sm sm:text-base text-gold hover:text-gold/80 font-semibold">
              Matt_Comeau@bcsd.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
