import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper";
import Image from "next/image";
import { NextSlide, PrevSlide } from "./SwiperController";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import { projectsData } from "data/projects";

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
          {projectsData.map((project) => (
            <SwiperSlide
              key={project.name}
              className="flex w-12 justify-center overflow-hidden rounded-md"
            >
              <Image
                alt={project.name}
                width={700}
                height={500}
                src={project.url}
              />
            </SwiperSlide>
          ))}
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
