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
          <h1 className="text-gray-100 font-bold text-lg">Msud Portfolio</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-5 md:gap-20 text-gray-200">
            <li>
              <Link href="#">
                <a className="font-medium text-emerald-400">Home</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="font-medium">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="font-medium">Resume</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
