import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <div>
      <PageHeader 
        title="About the Scholarship" 
        subtitle="Honoring the legacy of Melissa & Jason"
      />
      
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-navy">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Our mission is to honor the lives of Melissa Klotz and Jason Pollack by supporting Brighton High School students who embody the kindness, strength, and spark that defined them. Through this scholarship, we carry their light forward and help the next generation thrive in the community they loved.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-navy">History</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              On June 21, 1997, the Brighton community lost two promising young people, Melissa Klotz and Jason Pollack. They were hanging out with friends along the train tracks near the Canal Path in Pittsford. They tried to escape an oncoming train. Jason was able to get away but Melissa's foot became stuck. Jason went back to try and save Melissa, but unfortunately could not free her, and they both tragically lost their lives that day.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              It has been over 25 years, and even though their lives were short, their impact has been profound, and our community will never forget them. In their honor, the Melissa Klotz and Jason Pollack Memorial Scholarship has been established with the first scholarships being awarded in the 2024-25 school year.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              This scholarship serves to keep their memories alive, also helping Brighton students while carrying their spirits forward.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-navy">Remembering Melissa & Jason</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Melissa and Jason are remembered as kind, caring and both particularly funny. They loved nothing more than laughing with friends and family. Melissa also excelled in arts and music, and Jason was a dedicated athlete, playing multiple sports.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Their legacy of friendship and family, love of arts, music, and athletics, and their personal perseverance and certain characteristics made them memorable long after they left the halls of Brighton High School.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-navy">Scholarship Purpose</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              This scholarship is open to every current Brighton High School student, regardless of grade, or academic accomplishment. Instead, this scholarship should be awarded to an individual who embodies the characteristics that we so fondly remember about Melissa and Jason, and their legacy of friendship and family, maybe a love of arts, or music, or athletics, and the students who show that personal perseverance and certain characteristics will make them memorable long after they leave the halls of the high school.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              If you would like to nominate yourself or someone else, please contact Matt Comeau at <a href="mailto:Matt_Comeau@bcsd.org" className="text-gold hover:text-gold/80 font-semibold">Matt_Comeau@bcsd.org</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

