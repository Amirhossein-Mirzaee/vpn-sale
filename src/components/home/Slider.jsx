/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { StarIcon } from "../../assets/icons/icons";

const Slider = () => {
  return (
    <main
      id="slider"
      className="max-w-[1300px] mx-auto mt-16 bg-gradient-to-t from-white to-[#F8F8F8] "
    >
      <div className="xs:pb-0 md:pb-[220px] relative ">
        <div className="flex flex-col justify-center text-center items-center gap-5">
          <p className="font-semibold text-[35px] max-w-[447px]">
            Trusted by Thousands of Happy Customer
          </p>
          <p className="text-secTextColor text-[16px] font-light max-w-[550px]">
            These are the stories of our customers who have joined us with great pleasure
            when using this crazy feature.
          </p>
        </div>

        <div className="slide-left py-3 px-3 my-4 text-textColor text-[16px]  xs:animate-pulse border-btnColor border-2 rounded-lg w-fit">
          <p>
            <em>Slide the Slider to Left </em>
          </p>
        </div>
        <Swiper slidesPerView={2.9} spaceBetween={40} loop>
          {new Array(12).fill("").map((item, index) => {
            return (
              <SwiperSlide key={index} className="cursor-pointer xs:py-8">
                <div className="rounded-[10px] lg:border-2 xs:border border-secTextColor hover:border-btnColor transition-all duration-300 p-6 xs:max-h-[250px] md:max-h-full">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center justify-start gap-4">
                      <div className="relative h-12 w-12  rounded-full overflow-hidden">
                        <img className="w-full h-full absolute" src="/png/vec2.png" />
                      </div>
                      <div className="xs:hidden md:block">
                        <p className="font-semibold text-lg text-textColor">
                          Viezh Robert
                        </p>
                        <p className="text-secTextColor">Warsaw, Poland</p>
                      </div>
                    </div>
                    <div className=" xs:flex-col md:flex-wrap items-center justify-end gap-2 xs:hidden sm:flex">
                      <span className="text-textColor">4.5</span>
                      <span>
                        <StarIcon />
                      </span>
                    </div>
                  </div>
                  <p className="leading-9 mt-4 text-textColor xs:hidden md:block">
                    “Wow... I am very happy to use this VPN, it turned out to be more than
                    my expectations and so far there have been no problems. LaslesVPN
                    always the best”.
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="shadow-2xl w-full max-w-[1130px] md:bg-white absolute mt-16  left-1/2 transform -translate-x-1/2 xs:hidden md:block">
          <div className="flex lg:justify-between xs:justify-center items-center px-12">
            <div className="md:flex flex-col items-start justify-center gap-5 xs:hidden">
              <p className="text-[35px] max-w-[371px] font-semibold">
                Subscribe Now for Get Special Features!
              </p>
              <p className="text-[16px] text-secTextColor">
                Let's subscribe with us and find the fun.
              </p>
            </div>
            <div className="bg-btnColor px-24 py-6 my-24 text-white  font-semibold rounded-lg hover:bg-secTextColor transition-all duration-300 cursor-pointer">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="bg-btnColor px-24 py-6  text-white  font-semibold rounded-lg hover:bg-secTextColor transition-all duration-300 cursor-pointer max-w-sm mx-auto text-center xs:block md:hidden">
          <button>Subscribe</button>
        </div>
      </div>
    </main>
  );
};

export default Slider;
