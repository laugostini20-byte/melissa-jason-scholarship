interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="bg-navy text-white relative overflow-hidden">
      {/* Decorative gold circle */}
      <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-gold/10" />
      <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border border-gold/10" />

      <div className="container mx-auto px-4 py-14 md:py-18 relative">
        <div className="flex items-start gap-5 max-w-3xl">
          <div className="w-1 rounded-full bg-gold self-stretch mt-2 hidden sm:block shrink-0" />
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-3">{title}</h1>
            {subtitle && (
              <p className="text-gray-400 text-base sm:text-lg">{subtitle}</p>
            )}
          </div>
        </div>
      </div>

      {/* Angled bottom */}
      <div className="h-10 bg-light-gray" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </div>
  );
};

export default PageHeader;
