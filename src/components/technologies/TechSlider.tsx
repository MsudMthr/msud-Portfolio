import React from "react";
import { techImage } from "data/technologies";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { NextSlide, PrevSlide } from "../projects/SwiperController";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Autoplay } from "swiper";

const TechSlider = () => {
  console.log(techImage);

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
        className="mx-auto my-10 max-w-screen-lg"
      >
        {techImage.map((image) => (
          <SwiperSlide key={image.name}>
            <Image src={image.url} alt="ss" width={80} height={80} />
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
