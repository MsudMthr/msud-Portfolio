import React from "react";
import Link from "next/link";
import { GitHub, LinkedIn, Instagram, WhatsApp } from "@mui/icons-material";
const ContactMe = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-2xl font-semibold text-gray-200 ">Contact Me</h1>
      <p className="text-gray-200">Iran - Mashhad</p>
      <p className="text-gray-200">+989039175747</p>

      <ul className="flex gap-3">
        <li>
          <Link href="#">
            <a>
              <GitHub />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <LinkedIn color="primary" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <Instagram color="secondary" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <WhatsApp color="success" />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContactMe;
