import React, { useState } from "react";
import { techImage } from "data/technologies";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { NextSlide, PrevSlide } from "../projects/SwiperController";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Autoplay } from "swiper";

const TechSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        loop={true}
        spaceBetween={50}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="mx-auto my-10 max-w-screen-lg"
      >
        {techImage.map((technology) => (
          <SwiperSlide
            key={technology.name}
            className="relative flex flex-col items-center"
          >
            <Image src={technology.url} alt="ss" width={80} height={80} />
          </SwiperSlide>
        ))}

        <div className="flex gap-3 py-5">
          <PrevSlide>
            <ArrowBack />
          </PrevSlide>
          <NextSlide>
            <ArrowForward />
          </NextSlide>
        </div>
      </Swiper>
    </>
  );
};
export default TechSlider;
