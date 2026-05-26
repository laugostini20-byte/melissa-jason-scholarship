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
            get involved or explore donation options? Reach out to us directly.
          </p>
          <a href="mailto:melissaandjasonaward@gmail.com" className="text-base sm:text-lg text-gold hover:text-gold/80 font-semibold block mb-6">
            melissaandjasonaward@gmail.com
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61583198870341"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base sm:text-lg text-gold hover:text-gold/80 font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Follow us on Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
