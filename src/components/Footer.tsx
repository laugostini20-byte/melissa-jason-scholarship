const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Melissa & Jason Scholarship Fund</h3>
            <p className="text-sm text-gray-300">
              Supporting outstanding students at BHS through annual scholarships
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-300">
          <p>&copy; {currentYear} Melissa & Jason Scholarship Fund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

