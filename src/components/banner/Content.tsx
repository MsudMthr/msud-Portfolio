import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:items-start sm:justify-start">
      <p className="text-gray-100 ">
        Hello,<span className="text-emerald-700 ">I&apos;m</span>
      </p>
      <h1 className="text-3xl sm:text-5xl font-medium text-[#00BC96]">Masoud Motahari</h1>
      <p className="text-lg font-medium text-gray-100">Front End Developer </p>
      <p className="mt-4 w-6/12 text-justify text-gray-300 hidden sm:block ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eos
        suscipit quos doloremque atque sapiente ipsa, repellat at pariatur
        culpa, eum magnam
      </p>

      <button className="mt-3  rounded-md bg-emerald-500 px-2 py-1  font-medium text-white shadow-sm shadow-emerald-300">
        Let&apos;s Talk
      </button>

      {/* social icons */}
      <div className="mt-4 flex items-center gap-2">
        <p className="mr-3 font-medium text-gray-100 ">Check Out My </p>
        <div className="hexagonal mr-2  bg-green-800 p-2">
          <Instagram sx={{ color: "#dadada" }} />
        </div>
        <div className="hexagonal mr-2  bg-green-800 p-2">
          <LinkedIn sx={{ color: "#dadada" }} />
        </div>
        <div className="hexagonal mr-2  bg-green-800 p-2">
          <GitHub sx={{ color: "#dadada" }} />
        </div>
      </div>
    </div>
  );
};

export default Content;
