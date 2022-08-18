import React from "react";
import TechSlider from "./TechSlider";

const Technologies = () => {
  return (
    <section className="bg-[#171C22] py-10">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center px-3 sm:items-start">
        <h1 className="font-medium text-[#DFE3EC]">
          My <span className="text-emerald-800">Technologies</span>
        </h1>
      </div>
      <TechSlider />
    </section>
  );
};

export default Technologies;
