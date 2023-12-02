import { companyIcons } from "../../assets/data/companyIcons";
import { GlobalIcon } from "../../assets/icons/icons";

const Map = () => {
  return (
    <div id="map" className=" pt-16 xs:px-4 lg:px-0">
      <div className="flex flex-col gap-3 justify-center items-center py-10 text-center">
        <p className="font-semibold text-[35px] text-textColor flex flex-col items-center text-center justify-center">
          Huge Global Network of <span>Fast VPN</span>
        </p>
        <p className="text-[16px] font-light text-secTextColor">
          See <span className="font-semibold">LaslesVPN</span> everywhere to make it
          easier for you when you move locations.
        </p>
      </div>
      <div className="flex flex-col ">
        <div className="lg:max-w-[1060px] xs:max-w-full  mx-auto py-28 ">
          <GlobalIcon />
        </div>
        <div id="icons" className=" grid grid-cols-5 md:grid-cols-3  xs:grid-cols-2 items-center justify-items-center gap-20">
          {companyIcons.map((item) => (
            <div key={item.id} className="max-w-[200px]">
              <img src={item.src} alt={item.alt} className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
