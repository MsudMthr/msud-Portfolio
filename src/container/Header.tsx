import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/msud logo.png";
const Header = () => {
  return (
    <header className="mx-auto max-w-screen-lg py-6">
      <div className="flex justify-between px-2">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="masoud" width={30} height={30} />
          <h1 className="text-lg font-bold text-gray-100">
            Msud <span className="hidden sm:inline-block">Portfolio</span>
          </h1>
        </div>
        <nav>
          <ul className="flex items-center gap-5 text-gray-200 md:gap-20">
            <li>
              <Link href="#">
                <a className="font-medium text-emerald-400 hover:text-emerald-700">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className="font-medium hover:text-emerald-700">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="font-medium hover:text-emerald-700">Resume</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
