import vec from "/png/vec.png";
const Hero = () => {
  return (
    <div className="flex items-stretch justify-center flex-row-reverse ">
      <div className="max-w-[600px] ">
        <img src={vec} alt="escf" className="w-full" />
      </div>
      <div className="flex flex-col items-start ">
        <div className=" text-start">
          <p className="text-[50px] font-semibold max-w-[555px]">Want anything to be easy with
            <span className="font-bold">LaslesVPN.</span></p>
        </div>
        <p className="text-[16px] text-secTextColor text-start font-light max-w-[555px]">
          Provide a network for all your needs with ease and fun using
          <span className="font-semibold"> LaslesVPN</span> discover interesting features from us.
        </p>
        <div className="bg-btnColor px-24 py-6 my-24 text-white font-bold rounded-lg hover:bg-secTextColor transition-all duration-300 cursor-pointer">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
