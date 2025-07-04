const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 mt-1 text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
