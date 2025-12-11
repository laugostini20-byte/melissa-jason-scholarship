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
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-light-gray transition-colors"
                >
                  <span className="text-xl font-semibold text-navy">{faq.question}</span>
                  <span className="text-gold text-2xl font-bold">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-light-gray p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-4 text-navy">Still have questions?</h3>
            <p className="text-gray-700 mb-6">
              If you can't find the answer you're looking for, please don't hesitate to reach out to us.
            </p>
            <a
              href="/contact"
              className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
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

