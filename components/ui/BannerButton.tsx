import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const BannerButton = () => {
  return (
    <a href="#about">
      <button className="inline-flex gap-2 h-12 animate-shimmer items-center justify-center rounded-md border border-black-100 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-normal text-slate-300 transition-colors focus:outline-none hover:text-white text-xs sm:text-sm md:text-lg">
        See my work
        <MdKeyboardDoubleArrowDown className="sm:text-lg" />
      </button>
    </a>
  );
};
export default BannerButton;
