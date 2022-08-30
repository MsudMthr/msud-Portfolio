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

import { CloseRounded, OpenWith } from "@mui/icons-material";

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
          xs={isNavbarResponsive ? 0 : 3}
          className="relative z-50 min-h-screen   "
        >
          <ProjectsNavbar
            projects={projects}
            setIsNavbarResponsive={setIsNavbarResponsive}
            isNavbarResponsive={isNavbarResponsive}
          />
        </Grid>
        <Grid item xs={isNavbarResponsive ? 11 : 9} className="z-50">
          <h1>this is content</h1>
          <button
            className={`absolute top-1/2 z-50 ${
              isNavbarResponsive ? "-left-24" : " left-0"
            }`}
            onClick={() => setIsNavbarResponsive(!isNavbarResponsive)}
          >
            {isNavbarResponsive ? <OpenWith /> : <CloseRounded />}
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
