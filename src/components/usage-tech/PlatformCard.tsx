import React from "react";
import Image from "next/image";

interface PlatformCardProps {
  src: any;
  title: string;
}

const PlatformCard = ({ src, title }: PlatformCardProps) => {
  return (
    <div className=" flex flex-col  items-center gap-2 bg-[#1F282F] py-2">
      <Image
        src={src}
        alt="nextJs"
        width={80}
        height={80}
        className=" "
      />
      <h5 className="text-xl font-medium text-[#DFE3EC] ">{title}</h5>
      <p className="w-80 text-center  text-[#878787]  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        magni doloremque enim quo magnam
      </p>
    </div>
  );
};

export default PlatformCard;
