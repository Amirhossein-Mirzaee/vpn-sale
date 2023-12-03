import vec from "/png/vec.webp";
const Hero = () => {
  return (
    <div className="flex items-stretch justify-around xs:gap-9 lg:gap-0 lg:flex-row-reverse flex-col xs:mt-16 xs:items-center lg:items-start lg:px-4 ">
      <div className="lg:max-w-[600px] md:max-w-[600px] xs:max-w-[380px] sm:max-w-[560px] xs:mx-auto  lg:mx-0 ">
        <img src={vec} alt="escf" className="w-full" />
      </div>
      <div className="flex flex-col md:items-start xs:items-center xs:px-4 md:px-0 ">
        <div className=" md:text-start xs:text-center">
          <p className="md:text-[50px] xs:text-[26px] font-semibold max-w-[555px]">
            Want anything to be easy with
            <span className="font-bold">LaslesVPN.</span>
          </p>
        </div>
        <p className="text-[16px] text-secTextColor md:text-start xs:text-center font-light max-w-[555px]">
          Provide a network for all your needs with ease and fun using
          <span className="font-semibold"> LaslesVPN</span> discover interesting features
          from us.
        </p>
        <div className="bg-btnColor px-24 py-5 my-24 text-white font-bold rounded-lg hover:bg-[#f93232] transition-all duration-300 cursor-pointer shadow-[#F53838] shadow-2xl">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
