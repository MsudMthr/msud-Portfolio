import { NextPage } from "next";
import React, {
  ReactChild,
  ReactChildren,
  ReactElement,
  ReactNode,
} from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactChild | ReactChildren | ReactElement | ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
