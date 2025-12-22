import PageHeader from '../components/PageHeader';

const Eligibility = () => {
  return (
    <div>
      <PageHeader 
        title="Eligibility Requirements" 
        subtitle="Who can apply for the scholarship"
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-navy">Who Can Apply</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              The Melissa Klotz and Jason Pollack Memorial Scholarship is open to every current Brighton High School student, regardless of grade or academic accomplishment.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              This scholarship is unique in that it focuses on character and personal qualities rather than traditional academic metrics. We are looking for students who embody the kindness, strength, and spark that defined Melissa and Jason.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-navy">Requirements</h2>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <p className="text-base sm:text-lg text-gray-700 mb-4">All applicants must submit:</p>
              <ul className="list-disc pl-6 space-y-3 text-base sm:text-lg text-gray-700">
                <li>Completed application form</li>
                <li>Official high school transcript</li>
                <li>Letter of recommendation from a teacher, counselor, or community leader</li>
                <li>Personal essay (500-750 words) describing your educational goals and community involvement</li>
                <li>List of extracurricular activities and community service</li>
                <li>Proof of acceptance to a college, university, or trade school (by award date)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-navy">Timeline</h2>
            <div className="space-y-4">
              <div className="bg-light-gray p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-navy">Application Opens</h3>
                <p className="text-gray-700">January 1st</p>
              </div>
              <div className="bg-light-gray p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-navy">Application Deadline</h3>
                <p className="text-sm sm:text-base text-gray-700">March 31st</p>
              </div>
              <div className="bg-light-gray p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-navy">Award Notification</h3>
                <p className="text-sm sm:text-base text-gray-700">May 15th</p>
              </div>
              <div className="bg-light-gray p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-navy">Awards Ceremony</h3>
                <p className="text-gray-700">June (Date TBD)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-navy">Selection Considerations</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Recipients are selected based on characteristics that embody what we remember about Melissa and Jason:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-navy">Kindness & Caring</h3>
                <p className="text-sm sm:text-base text-gray-700">Demonstrating the kindness and caring nature that defined Melissa and Jason</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-navy">Friendship & Family</h3>
                <p className="text-sm sm:text-base text-gray-700">Valuing friendship and family connections</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-navy">Arts, Music & Athletics</h3>
                <p className="text-sm sm:text-base text-gray-700">Passion for arts, music, or athletics like Melissa and Jason</p>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-navy">Personal Perseverance</h3>
                <p className="text-sm sm:text-base text-gray-700">Demonstrating personal perseverance and characteristics that make them memorable</p>
              </div>
            </div>
            <div className="mt-6 bg-light-gray p-6 sm:p-8 rounded-lg">
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                <strong>Nominations:</strong> If you would like to nominate yourself or someone else, please contact Matt Comeau at <a href="mailto:Matt_Comeau@bcsd.org" className="text-gold hover:text-gold/80 font-semibold">Matt_Comeau@bcsd.org</a>.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;

