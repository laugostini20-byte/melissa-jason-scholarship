import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import faqsData from '../data/faqs.json';
import type { FAQItem } from '../types';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = faqsData;
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions"
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 sm:p-6 flex justify-between items-center hover:bg-light-gray transition-colors gap-4"
                >
                  <span className="text-base sm:text-xl font-semibold text-navy pr-2">{faq.question}</span>
                  <span className="text-gold text-xl sm:text-2xl font-bold flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 bg-light-gray p-6 sm:p-8 rounded-lg text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-navy">Still have questions?</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              If you can't find the answer you're looking for, please don't hesitate to reach out to us.
            </p>
            <a
              href="/contact"
              className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors text-sm sm:text-base"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

