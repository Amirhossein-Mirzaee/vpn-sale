import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "../../assets/icons/icons";

const Slider = () => {
  return (
    <main className="max-w-[1300px] mx-auto my-[250px]">
      <div className="">
        <Swiper slidesPerView={3} spaceBetween={40} loop>
          {new Array(12).fill("").map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="rounded-[10px] border-2 border-red-500 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center justify-start gap-4">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <img className="w-full h-full absolute" src="/png/vec2.png" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Viezh Robert</p>
                        <p className="text-[#0B132A]">Warsaw, Poland</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-[#0B132A]">4.5</span>
                      <span>
                        <StarIcon />
                      </span>
                    </div>
                  </div>
                  <p className="leading-8 mt-4 text-[#0B132A]">
                    “Wow... I am very happy to use this VPN, it turned out to be more than
                    my expectations and so far there have been no problems. LaslesVPN
                    always the best”.
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </main>
  );
};

export default Slider;
