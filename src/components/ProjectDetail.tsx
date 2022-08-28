import { Code, LiveTv } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "src/interfaces/interface";
import Canvas from "./Canvas";
import ProjectDataDisclosure from "./ProjectDataTabs";
interface ProjectDetailProps {
  project: Project;
}
const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <section>
      <div className="z-50  mx-2 flex flex-col items-center justify-around gap-4 pt-10 md:flex-row">
        <div className="flex flex-col items-center gap-5 md:items-start  ">
          <h1 className="text-4xl text-gray-200">{project.name}</h1>

          {project.description?.html && (
            <div
              className="html-text text-justify"
              dangerouslySetInnerHTML={{ __html: project.description.html }}
            ></div>
          )}
          <div className="flex gap-10">
            <Link href={project.link}>
              <a className=" flex items-center gap-1 rounded bg-blue-400  px-3 py-1 text-lg text-blue-800">
                live
                <LiveTv />
              </a>
            </Link>
            <button
              disabled={true}
              className=" rounded bg-slate-900 px-3 py-1 text-lg text-emerald-800 disabled:opacity-40"
            >
              Source Code
              <Code />
            </button>
          </div>
        </div>
        <div className="relative mt-3 h-72 w-full overflow-hidden rounded-lg sm:w-10/12 md:mt-0 md:w-5/12">
          <Image src={project.cover.url} alt={project.name} layout="fill" />
        </div>
      </div>
      <div>
        <ProjectDataDisclosure
          feature={project.feature}
          technologies={project.technologies}
        />
      </div>
    </section>
  );
};

export default ProjectDetail;
