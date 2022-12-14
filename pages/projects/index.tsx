import { GetStaticProps } from "next";
import { Grid } from "@mui/material";
import { GET_ALL_PROJECTS } from "src/graphQl/queries";
import { client } from "pages/_app";
import type { Project } from "src/interfaces/interface";
//components
import Canvas from "src/components/Canvas";
import ProjectsNavbar from "src/components/ProjectsNavbar";
import { ApolloQueryResult } from "@apollo/client";
import { useState } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
export interface Projects {
  projects: Project[];
}
const Projects = ({ projects }: Projects) => {
  const [isNavbarResponsive, setIsNavbarResponsive] = useState<Boolean>(false);

  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={isNavbarResponsive ? 1 : 3}
          className="relative z-50 min-h-screen   "
        >
          <ProjectsNavbar
            projects={projects}
            setIsNavbarResponsive={setIsNavbarResponsive}
            isNavbarResponsive={isNavbarResponsive}
          />
        </Grid>
        <Grid item xs={isNavbarResponsive ? 11 : 9} className="relative z-50">
          <h1>this is content</h1>
          <button
            className={`absolute  top-3/4  z-50 rounded-tr-full rounded-br-full bg-gray-800 p-5 text-white shadow-sm  shadow-gray-700 transition-all duration-500 ${
              isNavbarResponsive ? "-left-12 md:-left-28" : " left-0"
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
      {/* <Canvas /> */}
    </div>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps = async () => {
  const result = await client.query<Projects>({
    query: GET_ALL_PROJECTS,
  });

  return {
    props: {
      projects: result.data.projects,
    },
  };
};
