import React from "react";
import UsageCards from "./UsageCards";

const Platforms = () => {
  return (
    <section className="bg-[#171C22] py-10">
      <div className="mx-auto max-w-screen-lg flex flex-col items-center sm:items-start px-3">
        <h1 className="font-medium text-[#DFE3EC]">
          My <span className="text-emerald-800">Platforms</span>
        </h1>
        <h1 className="text-[#DFE3EC] text-4xl font-semibold mt-2">What I Use</h1>
        <UsageCards />
      </div>
    </section>
  );
};

export default Platforms;
