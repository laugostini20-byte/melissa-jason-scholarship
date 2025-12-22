import { useState } from 'react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: Form submission handler
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with us"
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-navy">Get in Touch</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                Have a question about the scholarship? Want to learn more about how you can 
                get involved? We'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-navy mb-2">For Nominations</h3>
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    To nominate yourself or someone else for the scholarship:
                  </p>
                  <a href="mailto:Matt_Comeau@bcsd.org" className="text-sm sm:text-base text-gold hover:text-gold/80 break-all font-semibold">
                    Matt_Comeau@bcsd.org
                  </a>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-navy mb-2">General Inquiries</h3>
                  <a href="mailto:info@melissa-jason-scholarship.org" className="text-sm sm:text-base text-gold hover:text-gold/80 break-all">
                    info@melissa-jason-scholarship.org
                  </a>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-navy mb-2">Website</h3>
                  <a href="https://www.melissajasonscholarship.org" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-gold hover:text-gold/80 break-all">
                    www.melissajasonscholarship.org
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-navy">Send us a Message</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors text-base sm:text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

