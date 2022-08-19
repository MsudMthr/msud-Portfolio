import React from "react";
import Link from "next/link";
const Links = () => {
  return (
    <div className="flex flex-col items-center justify-around gap-5 text-center text-gray-200">
      <h1 className="text-2xl font-semibold ">Links</h1>
      <ul className="flex flex-col gap-3">
        <li>
          <Link href="">
            <a className="hover:text-emerald-500 transition-all duration-200">Home</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className="hover:text-emerald-500 transition-all duration-200">Projects</a>
          </Link>
        </li>
        <li>
          <Link href="">
            <a className="hover:text-emerald-500 transition-all duration-200">Resume</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
