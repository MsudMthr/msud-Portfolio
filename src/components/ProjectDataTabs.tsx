import React, { useState } from "react";
interface ProjectDataTabsProps {
  feature: string[];
  technologies: string[];
}
const ProjectDataTabs = ({ feature, technologies }: ProjectDataTabsProps) => {
  const [tab, setTab] = useState<string>("feature");
  return (
    <div
      className={`mx-auto mt-8 flex  max-w-xs flex-col rounded-lg bg-[#171C22]/30 backdrop-blur-sm md:max-w-md `}
    >
      <div className="flex justify-around px-3 py-3 text-gray-200">
        <button
          onClick={() => setTab("technologies")}
          className={`rounded-md px-2 py-1  md:px-4 md:py-2 text-lg font-medium  transition-all duration-200 hover:bg-black/30 hover:text-teal-200 ${
            tab === "technologies" ? "bg-white/70 text-gray-900" : "bg-neutral-900"
          }`}
        >
          Technologies
        </button>
        <button
          onClick={() => setTab("feature")}
          className={`rounded-md px-2 py-1  md:px-4 md:py-2 text-lg font-medium  transition-all duration-200 hover:bg-black/30 hover:text-teal-200 ${
            tab === "feature" ? "bg-white/70 text-gray-900" : "bg-neutral-900"
          }`}
        >
          Feature
        </button>
      </div>
      <div className="m-2 rounded-lg bg-gray-100 p-3">
        {tab === "feature" && (
          <ul className="flex flex-wrap gap-2">
            {feature.map((item) => (
              <li className="font-medium" key={item}>
                {item},
              </li>
            ))}
          </ul>
        )}
        {tab === "technologies" && (
          <ul className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li className="font-medium" key={technology}>
                {technology},
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectDataTabs;
