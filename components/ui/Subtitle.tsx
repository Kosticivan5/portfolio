type Subtitle = {
  title: string;
  highlight: string;
};

const Subtitle = ({ title, highlight }: Subtitle) => {
  return (
    <div className="pb-6">
      <h2 className="text-2xl md:text-4xl font-bold dark:text-white text-center pb-3 max-w-[1400px] ">
        {title} <span className="text-white-100">{highlight}</span>
      </h2>
      <div className="bg-white w-24 sm:w-40 h-[2px] mx-auto rounded-[100%]"></div>
    </div>
  );
};
export default Subtitle;
