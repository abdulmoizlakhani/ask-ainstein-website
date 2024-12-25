import Image from "next/image";
import React from "react";

const TopAinsteinBox = ({ image }: { image: { src: string; alt: string } }) => {
  return (
    <div className="h-[200px] w-[200px] absolute top-[-100px] bg-primary-600 flex-center rounded-[0.625rem]">
      <Image src={image.src} alt={image.alt} width={130} height={130} />
    </div>
  );
};

export default TopAinsteinBox;
