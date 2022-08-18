import type { NextPage } from "next";
import Projects from "src/components/projects";
import Technologies from "src/components/technologies";
import Banner from "../src/components/banner";
import Platforms from "../src/components/usage-tech";
import Layout from "../src/container";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Banner />
        <Platforms />
        <Projects />
        <Technologies />
      </>
    </Layout>
  );
};

export default Home;
