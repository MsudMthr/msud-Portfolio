import Image from "next/image";
import React from "react";
import { Project } from "src/interfaces/interface";
import ProjectDataDisclosure from "./ProjectDataTabs";
interface ProjectDetailProps {
  project: Project;
}
const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <section>
      <div className="flex items-center justify-around pt-20">
        <div className="flex flex-col gap-12 ">
          <h1 className="text-5xl text-gray-200">{project.name}</h1>
          <div className="flex gap-10">
            <button className="rounded-xl bg-emerald-100 px-3 py-1 text-lg text-emerald-800">
              Github
            </button>
            <button className="rounded-xl bg-emerald-100 px-3 py-1 text-lg text-emerald-800">
              live
            </button>
          </div>
        </div>
        <div className="relative h-72 w-5/12 overflow-hidden rounded-lg">
          <Image src={project.cover.url} alt={project.name} layout="fill" />
        </div>
      </div>
      <div>
        <ProjectDataDisclosure
          feature={project.feature}
          technologies={project.technologies}
          description={project.description?.html}
        />
      </div>
    </section>
  );
};

export default ProjectDetail;
