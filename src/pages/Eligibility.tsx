import PageHeader from '../components/PageHeader';

const Eligibility = () => {
  return (
    <div>
      <PageHeader 
        title="Eligibility Requirements" 
        subtitle="Who can apply for the scholarship"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Who Can Apply</h2>
            <p className="text-lg text-gray-700 mb-4">
              The Melissa & Jason Scholarship is open to students who meet the following criteria:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 mb-6">
              <li>Current high school seniors graduating from Brighton High School</li>
              <li>Planning to enroll in an accredited college, university, or trade school</li>
              <li>Demonstrated financial need (preferred but not required)</li>
              <li>Legal residents of the United States</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Requirements</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-4">All applicants must submit:</p>
              <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
                <li>Completed application form</li>
                <li>Official high school transcript</li>
                <li>Letter of recommendation from a teacher, counselor, or community leader</li>
                <li>Personal essay (500-750 words) describing your educational goals and community involvement</li>
                <li>List of extracurricular activities and community service</li>
                <li>Proof of acceptance to a college, university, or trade school (by award date)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Timeline</h2>
            <div className="space-y-4">
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-navy">Application Opens</h3>
                <p className="text-gray-700">January 1st</p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-navy">Application Deadline</h3>
                <p className="text-gray-700">March 31st</p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-navy">Award Notification</h3>
                <p className="text-gray-700">May 15th</p>
              </div>
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-navy">Awards Ceremony</h3>
                <p className="text-gray-700">June (Date TBD)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-navy">Selection Considerations</h2>
            <p className="text-lg text-gray-700 mb-4">
              Recipients are selected based on a comprehensive review that considers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-navy">Academic Excellence</h3>
                <p className="text-gray-700">Strong GPA and academic achievements</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-navy">Leadership</h3>
                <p className="text-gray-700">Demonstrated leadership in school or community</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-navy">Community Service</h3>
                <p className="text-gray-700">Commitment to serving others</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-navy">Character</h3>
                <p className="text-gray-700">Personal integrity and moral character</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;

