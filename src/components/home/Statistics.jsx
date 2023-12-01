import React from "react";
import { LocationIcon, ServerIcon, UserIcon } from "../../assets/icons/icons";

const Statistics = () => {
  return (
    <div className="mt-16">
      <div className="max-w-[1140px] mx-auto shadow-lg">
        <div className="py-28 flex justify-around items-center">
          <div className="flex gap-5 items-center ">
            <UserIcon />
            <div>
              <p className="font-bold text-textColor text-[25px]">90+</p>
              <p className="text-secTextColor font-light text-[20px]">Users</p>
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
