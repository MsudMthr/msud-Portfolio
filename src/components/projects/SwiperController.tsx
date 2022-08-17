import React from "react";
import { useSwiper } from "swiper/react";

const NextSlide = ({ children }: any) => {
  const swiper = useSwiper();

  return <button className="bg-emerald-800 p-3 rounded-full w-12 h-12 text-emerald-100 flex justify-center items-center shadow shadow-emerald-700 " onClick={() => swiper.slideNext()}>{children}</button>;
};

const PrevSlide = ({ children }: any) => {
  const swiper = useSwiper();

  return <button className="bg-emerald-800 p-3 rounded-full w-12 h-12 text-emerald-100 flex justify-center items-center shadow shadow-emerald-700  " onClick={() => swiper.slidePrev()}>{children}</button>;
};

export { PrevSlide, NextSlide };
