"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SkillData } from "@/constants";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-img1.jpg)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <div className="flex flex-col gap-20 max-w-[80%] text-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-white text-[50px]">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              & 
            </span>
            Technologies
          </h1>
          <p className="text-gray-400 text-[20px]">
            Transforming ideas into reality with advanced technology.
          </p>
        </div>

        <Swiper
          slidesPerView={5} // Number of slides visible at once
          spaceBetween={30} // Space between slides
          loop={true} // Infinite loop
          speed={3000} // Smooth speed for movement
          autoplay={{
            delay: 0, // No delay between transitions
            disableOnInteraction: false, // Keep autoplay after interaction
            pauseOnMouseEnter: false, // Don't pause on hover
          }}
          allowTouchMove={false} // Disable manual swiping
          modules={[Autoplay]}
          className="max-w-[80%]"
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Image
                src={skill.Image}
                alt={skill.name}
                width={skill.width}
                height={skill.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Page;
