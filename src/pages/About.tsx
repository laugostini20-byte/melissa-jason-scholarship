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
              On June 21, 1997, the Brighton community lost two promising young people, Melissa Klotz and Jason Pollack. They were spending time with friends along the train tracks near the Canal Path in Pittsford when they attempted to escape an oncoming train. Jason was able to get away, but Melissa's foot became stuck. Jason went back to try to save her, but tragically, he was unable to free her, and they both lost their lives that day.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              It has been over 25 years, and although their lives were short, their impact has been profound. Our community will never forget them. In their honor, the Melissa Klotz and Jason Pollack Memorial Scholarship was established, with the first scholarships awarded during the 2024–2025 school year.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              This scholarship serves to keep their memories alive while also supporting Brighton students and carrying their spirits forward.
            </p>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-navy">Remembering Melissa & Jason</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <div className="flex items-center justify-center h-[400px]">
                <img 
                  src="/image2.png" 
                  alt="Melissa and Jason" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-[400px]">
                <img 
                  src="/image4.png" 
                  alt="Melissa and Jason" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center justify-center h-[400px]">
                <img 
                  src="/image5.png" 
                  alt="Melissa and Jason" 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Melissa and Jason are remembered as kind, caring, and particularly funny. They loved nothing more than laughing with friends and family. Melissa excelled in the arts and music, while Jason was a dedicated athlete who played multiple sports.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Their legacy of friendship and family, love of the arts, music, and athletics, personal perseverance, and defining characteristics have made them memorable long after they walked the halls of Brighton High School.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-navy">Scholarship Purpose</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              This scholarship is open to all current Brighton High School students, regardless of grade level or academic achievement. Rather than focusing on academics alone, the scholarship is awarded to an individual who embodies the qualities so fondly remembered in Melissa and Jason—kindness, friendship, family values, a love of the arts, music, or athletics, and personal perseverance.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Students who demonstrate these characteristics are those who will remain memorable long after they leave the halls of Brighton High School.
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

