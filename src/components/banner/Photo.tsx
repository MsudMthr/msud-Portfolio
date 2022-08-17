import Image from "next/image";
import React from "react";
import bannerPhoto from "../../assets/Component 1.png";
const Photo = () => {
  return (
    <div className="hidden sm:block">
      <Image src={bannerPhoto} alt="masoud motahari" width={500} height={500} />
    </div>
  );
};

export default Photo;
