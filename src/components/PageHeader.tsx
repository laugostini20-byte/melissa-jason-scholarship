interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="bg-navy text-white py-8 sm:py-10 md:py-12 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight px-2">{title}</h1>
        {subtitle && <p className="text-base sm:text-lg md:text-xl text-gray-200 px-2">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;

