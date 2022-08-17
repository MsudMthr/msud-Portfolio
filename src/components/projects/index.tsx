import React from "react";
import ProjectSlider from "./ProjectSlider";

const Projects = () => {

  return (
    <section className="py-10">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center px-3">
        <h1 className="text-4xl font-medium text-gray-100">
          Recently <span className="text-emerald-600">Projects</span>
        </h1>
        <p className="mt-3 w-11/12 text-center text-gray-400 sm:w-6/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vitae
          fugit dolorem qui, nobis voluptas maiores fugiat ducimus ea sed in
          repellat. Eligendi, eaque quod. Placeat soluta fugit ea quos!
        </p>
        <ProjectSlider />
      
      </div>
    </section>
  );
};

export default Projects;
