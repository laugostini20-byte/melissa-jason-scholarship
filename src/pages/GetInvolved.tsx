import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const ways = [
  {
    title: 'Host a Local Event',
    description:
      'Organize a fundraiser, dinner, golf outing, or community gathering in honor of Melissa and Jason. Local events are one of the most impactful ways to raise awareness and funds for the scholarship.',
    icon: '🎉',
  },
  {
    title: 'Personal Connections',
    description:
      'Know someone who embodies the spirit of Melissa and Jason? Nominate them for the scholarship, or simply spread the word to families, students, and teachers in the Brighton community.',
    icon: '🤝',
  },
  {
    title: 'Business & Corporate Outreach',
    description:
      'Businesses and organizations can make a lasting impact through sponsorships, matching gift programs, or direct donations. We welcome partnerships of any size.',
    icon: '🏢',
  },
  {
    title: 'Make a Donation',
    description:
      'Every contribution — large or small — goes directly toward supporting a deserving Brighton High School student. Scan the QR code on our Donate page or reach out to learn more.',
    icon: '💛',
  },
];

const GetInvolved = () => {
  return (
    <div>
      <PageHeader
        title="Get Involved"
        subtitle="Help us carry Melissa & Jason's legacy forward"
      />

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">

        {/* Intro */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">How You Can Help</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            The Melissa & Jason Scholarship Fund is powered by the Brighton community. There are many ways to get involved — whether you have time, resources, or connections to offer, every bit of support makes a difference.
          </p>
        </div>

        {/* Ways to get involved */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ways.map(({ title, description, icon }) => (
            <div key={title} className="bg-white rounded-2xl p-7 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{icon}</div>
              <div className="w-8 h-0.5 bg-gold mb-4 rounded-full" />
              <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{description}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="bg-navy rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">Ready to make an impact?</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Reach out to us directly — we'd love to connect and find the right way for you to get involved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/contact"
              className="bg-gold text-navy px-6 py-3 rounded-lg font-bold hover:bg-gold/90 transition-colors text-center"
            >
              Contact Us
            </Link>
            <Link
              to="/donate"
              className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
            >
              Donate
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GetInvolved;
