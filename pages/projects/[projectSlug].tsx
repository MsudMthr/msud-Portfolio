import { CloseRounded, OpenWith } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "pages/_app";
import React, { useState } from "react";
import Canvas from "src/components/Canvas";
import ProjectDetail from "src/components/ProjectDetail";
import ProjectsNavbar from "src/components/ProjectsNavbar";
import { GET_ALL_PROJECTS, GET_PROJECT_INFO } from "src/graphQl/queries";
import type { Project } from "src/interfaces/interface";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export interface Projects {
  projects: Project[];
}
export interface ProjectType {
  project: Project;
}

interface ProjectProps {
  projects: Project[];
  project: Project;
}

const Project = ({ projects, project }: ProjectProps) => {
  console.log({ projects, project });

  const [isNavbarResponsive, setIsNavbarResponsive] = useState<Boolean>(false);
  return (
    <Grid container>
      {/* <Canvas /> */}
      <Grid
        item
        //todo responsive navbar
        xs={isNavbarResponsive ? 1 : 3}
        className="relative z-50 min-h-screen transition-all duration-500 "
      >
        <ProjectsNavbar
          projects={projects}
          setIsNavbarResponsive={setIsNavbarResponsive}
          isNavbarResponsive={isNavbarResponsive}
        />
      </Grid>
      <Grid
        item
        xs={isNavbarResponsive ? 11 : 9}
        className="relative z-50 min-h-screen  "
      >
        <ProjectDetail project={project} />
        <button
          className={`absolute  top-3/4  z-50 rounded-tr-full rounded-br-full bg-gray-800 p-5 text-white shadow-sm  shadow-gray-700 transition-all duration-500 ${
            isNavbarResponsive ? "md:-left-28 -left-12" : " left-0"
          }`}
          onClick={() => setIsNavbarResponsive(!isNavbarResponsive)}
        >
          <ArrowBackIosNewIcon
            className={`${
              isNavbarResponsive && "rotate-180"
            } transition-all duration-500`}
          />
        </button>
      </Grid>
    </Grid>
  );
};

export default Project;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<Projects>({
    query: GET_ALL_PROJECTS,
  });

  const paths = data.projects.map((project) => {
    return { params: { projectSlug: project.slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { projectSlug } = context.params!;
  const allProjects = await client.query<Projects>({
    query: GET_ALL_PROJECTS,
  });

  const project = await client.query<ProjectType>({
    query: GET_PROJECT_INFO,
    variables: { slug: projectSlug },
  });

  console.log(allProjects.data.projects);
  console.log(project.data.project);

  return {
    props: {
      projects: allProjects.data.projects,
      project: project.data.project,
    },
  };
};
