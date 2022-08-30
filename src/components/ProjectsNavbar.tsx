import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import logo from "../assets/msud logo.png";
import { Project } from "src/interfaces/interface";

//type for projects data and state and useState
interface ProjectsNavbarProps {
  projects: Project[];
  setIsNavbarResponsive: Dispatch<SetStateAction<Boolean>>;
  isNavbarResponsive: Boolean;
}

const ProjectsNavbar = ({
  projects,
  setIsNavbarResponsive,
  isNavbarResponsive,
}: ProjectsNavbarProps) => {
  return (
    <div
      className={`absolute top-0 transition-all duration-300  z-50 flex min-h-screen w-full flex-col items-center bg-[#171C22]/90 ${
        isNavbarResponsive ? " -left-[300%]" : "left-0"
      }`}
    >
      <Image src={logo} alt={"masoud motahari"} width={200} height={200} />
      <div className="flex w-11/12 flex-col gap-2">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <a className="w-full rounded-md  bg-[#171f28] py-3 text-center  font-medium text-white shadow-md transition-all duration-300 focus:shadow-none   ">
              {project.name}
            </a>
          </Link>
        ))}
       
      </div>
    </div>
  );
};

export default ProjectsNavbar;
