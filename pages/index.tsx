import type { NextPage } from "next";
import Banner from "../src/components/banner";
import Layout from "../src/container";

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
    </Layout>
  );
};

export default Home;
