const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Melissa & Jason Scholarship Fund</h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Supporting outstanding students at Brighton High School through annual scholarships
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row gap-3 sm:gap-4 text-xs sm:text-sm">
            <a href="#" className="hover:text-gold transition-colors py-1">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors py-1">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors py-1">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 sm:mt-6 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-300">
          <p>&copy; {currentYear} Melissa & Jason Scholarship Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

