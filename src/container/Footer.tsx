import React from "react";

import Image from "next/image";
import logo from "../assets/msud logo.png";
import ContactMe from "./FooterComponents/ContactMe";
import Links from "./FooterComponents/Links";
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-lg py-6">
      <div className="mt-4 flex flex-col items-center justify-around sm:flex-row">
        <div className="flex flex-col items-center ">
          <Image src={logo} alt="masoud" width={200} height={200} />
          <h1 className="text-lg font-bold text-gray-100">Msud Portfolio</h1>
        </div>
        <Divider
          className="my-2 w-10/12 bg-slate-600 sm:hidden"
          variant="middle"
        />
        <ContactMe />
        <Divider
          className="my-2 w-10/12 bg-slate-600 sm:hidden"
          variant="middle"
        />
        <Links />
      </div>
    </footer>
  );
};

export default Footer;
