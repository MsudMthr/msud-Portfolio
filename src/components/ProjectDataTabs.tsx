import React, { useState } from "react";
interface ProjectDataTabsProps {
  feature: string[];
  technologies: string[];
  description?: string;
}
const ProjectDataTabs = ({
  feature,
  technologies,
  description,
}: ProjectDataTabsProps) => {
  const [tab, setTab] = useState<string>(
    description ? "description" : "feature"
  );
  return (
    <div
      className={`mx-auto mt-8 flex  flex-col rounded-lg bg-[#171C22] ${
        description ? " max-w-xl" : "max-w-xs"
      }`}
    >
      <div className="flex justify-around px-6 py-3 text-gray-200">
        {description && (
          <button
            onClick={() => setTab("description")}
            className={`rounded-md px-5 py-3 text-lg font-medium transition-all duration-200 hover:bg-violet-900/30 hover:text-teal-200 ${
              tab === "description" && "bg-white/70 text-gray-900"
            }`}
          >
            Description
          </button>
        )}
        <button
          onClick={() => setTab("technologies")}
          className={`rounded-md px-5 py-3 text-lg font-medium transition-all duration-200 hover:bg-violet-900/30 hover:text-teal-200 ${
            tab === "technologies" && "bg-white/70 text-gray-900"
          }`}
        >
          Technologies
        </button>
        <button
          onClick={() => setTab("feature")}
          className={`rounded-md px-5 py-3 text-lg font-medium transition-all duration-200 hover:bg-violet-900/30 hover:text-teal-200 ${
            tab === "feature" && "bg-white/70 text-gray-900"
          }`}
        >
          Feature
        </button>
      </div>
      <div className="m-2 rounded-lg bg-gray-100 p-3">
        {tab === "description" && description && (
          <div
            className="html-text font-medium"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        )}
        {tab === "feature" && (
          <ul>
            {feature.map((item) => (
              <li className="font-medium" key={item}>
                {item}
              </li>
            ))}
          </ul>
        )}
        {tab === "technologies" && (
          <ul>
            {technologies.map((technology) => (
              <li className="font-medium" key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectDataTabs;
