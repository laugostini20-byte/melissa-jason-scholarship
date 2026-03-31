interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="bg-navy text-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 py-12 md:py-16 relative">
        <div className="flex items-start gap-4">
          <div className="w-1 rounded-full bg-gold self-stretch mt-1 hidden sm:block" />
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2">{title}</h1>
            {subtitle && (
              <p className="text-gray-300 text-base sm:text-lg mt-2">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Angled bottom edge */}
      <div className="h-10 bg-light-gray" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </div>
  );
};

export default PageHeader;
