import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <div>
      <PageHeader 
        title="About the Scholarship" 
        subtitle="Honoring the legacy of Melissa & Jason"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Melissa & Jason Scholarship Fund was established to honor the memory and values 
              of two remarkable individuals who deeply believed in the transformative power of 
              education. Our mission is to provide financial support and recognition to outstanding 
              students at Brighton High School who demonstrate academic excellence, leadership, and a commitment to 
              community service.
            </p>
            <p className="text-lg text-gray-700">
              Through annual scholarships, we aim to help deserving students achieve their 
              educational goals and inspire them to make a positive impact in their communities 
              and beyond.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">History</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded in [Year], the Melissa & Jason Scholarship Fund was created by family and 
              friends who wanted to honor the legacy of two individuals who dedicated their lives 
              to education and community service. Melissa and Jason were passionate advocates for 
              student success and believed that financial barriers should never prevent talented 
              students from pursuing their dreams.
            </p>
            <p className="text-lg text-gray-700">
              Since our inception, we have awarded scholarships to numerous outstanding students, 
              helping them take the next step in their educational journey while continuing the 
              values that Melissa and Jason held dear.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Our Founders</h2>
            <p className="text-lg text-gray-700 mb-4">
              [Placeholder text for information about the founders and the individuals being 
              honored - Melissa and Jason. This section would include biographical information, 
              their contributions to education, and why the scholarship was established in their 
              name.]
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-navy">Purpose</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our scholarship program serves multiple purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>To recognize and reward academic achievement</li>
              <li>To support students who demonstrate leadership qualities</li>
              <li>To encourage community service and civic engagement</li>
              <li>To honor the memory and values of Melissa and Jason</li>
              <li>To invest in the future of our community through education</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

