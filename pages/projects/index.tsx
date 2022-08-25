import { GetStaticProps } from "next";
import { Grid } from "@mui/material";
import { GET_ALL_PROJECTS } from "src/graphQl/queries";
import { client } from "pages/_app";
import type { Project } from "src/interfaces/interface";
//components
import Canvas from "src/components/Canvas";
import ProjectsNavbar from "src/components/ProjectsNavbar";
import { ApolloQueryResult } from "@apollo/client";
interface Projects {
  projects: Project[];
}
const Projects = ({ projects }: Projects) => {
  console.log(projects);

  return (
    <div>
      <Grid container>
        <Grid item xs={3} className="relative z-50 min-h-screen  ">
          <ProjectsNavbar />
        </Grid>
        <Grid item xs={9} className="z-50 bg-orange-300/50">
          <h1>this is content</h1>
        </Grid>
      </Grid>
      <Canvas />
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
