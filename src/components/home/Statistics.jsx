import React from "react";
import { LocationIcon, ServerIcon, UserIcon } from "../../assets/icons/icons";

const Statistics = () => {
  return (
    <div className="mt-16 xs:hidden sm:block">
      <div className="lg:max-w-[1334px] md:max-w-[700px] mx-auto shadow-lg md:max-h-[200px] xs:max-h-[500px] h-full my-auto">
        <div className="py-28 flex xs:flex-col xs:gap-y-12 flex-wrap  justify-around items-center max-h-[200px] my-auto ">
          <div className="flex gap-5 items-center  ">
            <UserIcon />
            <div>
              <p className="font-bold text-textColor text-[25px] ">90+</p>
              <p className="text-secTextColor font-light text-[20px] ">Users</p>
            </div>
          </div>
          {/* <div className="border-2 max-h-[125px] rotate-90 "></div> */}
          <div className="flex gap-5 items-center ">
            <LocationIcon />
            <div>
              <p className="font-bold text-textColor text-[25px]">30+</p>
              <p className="text-secTextColor font-light text-[20px]">Locations</p>
            </div>
          </div>

          <div className="flex gap-5 items-center ">
            <ServerIcon />
            <div>
              <p className="font-bold text-textColor text-[25px]">50+</p>
              <p className="text-secTextColor font-light text-[20px]">Servers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
