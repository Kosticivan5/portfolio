import AuroraBackgroundDemo from "./ui/AuroraBackgroundDemo";
const Hero = () => {
  return (
    <div className="relative h-screen max-h-section">
      <div className="absolute top-5 left-5 md:top-8 md:left-8 w-8 md:w-12 z-50">
        <img src="../../images/logo.svg" alt="logo" />
      </div>
      <AuroraBackgroundDemo />
    </div>
  );
};
export default Hero;
