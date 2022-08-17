import type { NextPage } from "next";
import Projects from "src/components/projects";
import Banner from "../src/components/banner";
import UsageTechnology from "../src/components/usage-tech";
import Layout from "../src/container";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Banner />
        <UsageTechnology />
        <Projects />
      </>
    </Layout>
  );
};

export default Home;
