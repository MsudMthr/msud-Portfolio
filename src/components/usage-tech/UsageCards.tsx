import Image from "next/image";
import React from "react";
import nextJsIcon from "../../assets/nextjs-svgrepo-com.svg";
import tailwindIcon from "../../assets/tailwind-svgrepo-com.svg";
import reduxIcon from "../../assets/redux-svgrepo-com.svg";
import PlatformCard from "./PlatformCard";
const UsageCards = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-around gap-2 ">
      <>
        <PlatformCard src={nextJsIcon} title="Next Js" />
        <PlatformCard src={tailwindIcon} title="Tailwind CSS" />
        <PlatformCard src={reduxIcon} title="Redux" />
      </>
    </div>
  );
};

export default UsageCards;
