import AuroraBackgroundDemo from "@/components/AuroraBackgroundDemo";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-5 left-5 md:top-8 md:left-8 w-8 md:w-12 z-50">
        <img src="../../logo.svg" alt="" />
      </div>
      <AuroraBackgroundDemo />
    </div>
  );
};
export default Hero;
