import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/msud logo.png";
import type { Projects } from "../../pages/projects";

const ProjectsNavbar = ({ projects }: Projects) => {
  return (
    <div className=" z-50 flex min-h-screen w-full flex-col items-center bg-[#171C22]/90">
      <Image src={logo} alt={"masoud motahari"} width={200} height={200} />
      <div className="flex w-11/12 flex-col gap-2">
        {projects.map((project) => (
          <Link href="#" key={project.slug}>
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
