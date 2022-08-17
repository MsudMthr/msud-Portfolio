import React from "react";
import Content from "./Content";
import Photo from "./Photo";

const Banner = () => {
  return (
    <div className="px-2 mx-auto flex justify-center max-w-screen-lg flex-col items-center py-10 sm:flex-row ">
      <Content />
      <Photo />
    </div>
  );
};

export default Banner;
