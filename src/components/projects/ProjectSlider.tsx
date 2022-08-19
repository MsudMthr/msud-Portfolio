import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//project image
import blogImage from "../../assets/blog.jpg";
import store from "../../assets/store.jpg";
import exchange from "../../assets/exchange.png";
import weather from "../../assets/weather.png";
import musicPlayer from "../../assets/music player.png";
import admin from "../../assets/admin.png";
import tailwindTrain from "../../assets/tailwind train.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";
import { NextSlide, PrevSlide } from "./SwiperController";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function ProjectSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        // pagination={true}
        modules={[EffectCoverflow]}
        className="my-5 flex w-full flex-col items-center"
      >
        <>
          <SwiperSlide className="flex w-12 justify-center overflow-hidden rounded-md">
            <Image alt="" width={700} height={500} src={blogImage} />
          </SwiperSlide>
          <SwiperSlide className="flex w-12 justify-center overflow-hidden rounded-md">
            <Image alt="" width={700} height={500} src={store} />
          </SwiperSlide>
          <SwiperSlide className="flex w-12 justify-center overflow-hidden rounded-md">
            <Image alt="" width={700} height={500} src={exchange} />
          </SwiperSlide>
          <SwiperSlide className="flex w-12 justify-center overflow-hidden rounded-md">
            <Image alt="" width={700} height={500} src={musicPlayer} />
          </SwiperSlide>
          <SwiperSlide className="flex w-12 justify-center overflow-hidden rounded-md">
            <Image alt="" width={700} height={500} src={admin} />
          </SwiperSlide>
          <SwiperSlide className="flex w-12 justify-center overflow-hidden rounded-md">
            <Image alt="" width={700} height={500} src={weather} />
          </SwiperSlide>
          <SwiperSlide className="flex w-12 justify-center overflow-hidden rounded-md">
            <Image alt="" width={700} height={500} src={tailwindTrain} />
          </SwiperSlide>
        </>
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
}
