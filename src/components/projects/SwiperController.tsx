import React from "react";
import { useSwiper } from "swiper/react";

const NextSlide = ({ children }: any) => {
  const swiper = useSwiper();

  return (
    <button
      className="flex z-50 h-12 w-12 items-center justify-center rounded-full bg-emerald-800 p-3 text-emerald-100 shadow shadow-emerald-700 "
      onClick={() => swiper.slideNext(1000)}
    >
      {children}
    </button>
  );
};

const PrevSlide = ({ children }: any) => {
  const swiper = useSwiper();

  return (
    <button
      className="flex z-50 h-12 w-12 items-center justify-center rounded-full bg-emerald-800 p-3 text-emerald-100 shadow shadow-emerald-700  "
      onClick={() => swiper.slidePrev(1000)}
    >
      {children}
    </button>
  );
};

export { PrevSlide, NextSlide };
