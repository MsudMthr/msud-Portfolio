import { Grid } from "@mui/material";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "pages/_app";
import React, { useState } from "react";
import Canvas from "src/components/Canvas";
import ProjectDetail from "src/components/ProjectDetail";
import ProjectsNavbar from "src/components/ProjectsNavbar";
import { GET_ALL_PROJECTS, GET_PROJECT_INFO } from "src/graphQl/queries";
import type { Project } from "src/interfaces/interface";
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
      <Canvas />
      <Grid
        item
        //todo responsive navbar
        xs={3}
        className="relative z-50 min-h-screen transition-all duration-500 "
      >
        <ProjectsNavbar
          projects={projects}
          setIsNavbarResponsive={setIsNavbarResponsive}
          isNavbarResponsive={isNavbarResponsive}
        />
      </Grid>
      <Grid item xs={9} className="relative z-50 min-h-screen  ">
        <ProjectDetail project={project} />
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
