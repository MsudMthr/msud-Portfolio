import type { NextPage } from "next";
import Head from "next/head";
import Projects from "src/components/projects";
import Technologies from "src/components/technologies";
import Banner from "../src/components/banner";
import Platforms from "../src/components/usage-tech";
import Layout from "../src/container";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Masoud motahari</title>
      </Head>
      <Layout>
        <>
          <Banner />
          <Platforms />
          <Projects />
          <Technologies />
        </>
      </Layout>
    </>
  );
};

export default Home;
