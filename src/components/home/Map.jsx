import { companyIcons } from "../../assets/data/companyIcons";
import { GlobalIcon } from "../../assets/icons/icons";
import global from "/png/global.png";

const Map = () => {
  return (
    <div className=" pt-16">
      <div className="flex flex-col gap-3 justify-center items-center py-10">
        <p className="font-semibold text-[35px] text-textColor flex flex-col items-center text-center justify-center">
          Huge Global Network of <span>Fast VPN</span>
        </p>
        <p className="text-[16px] font-light text-secTextColor">
          See <span className="font-semibold">LaslesVPN</span> everywhere to make it
          easier for you when you move locations.
        </p>
      </div>
      <div className="max-w-[1060px] mx-auto py-28 bg-white/100">
        <GlobalIcon/>
      </div>
      <div id="icons" className="flex items-center justify-center gap-20">
        {companyIcons.map((item) => (
          <div key={item.id} className="max-w-[200px]">
            <img src={item.src} alt={item.alt} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
