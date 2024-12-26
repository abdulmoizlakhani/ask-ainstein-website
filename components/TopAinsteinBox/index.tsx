import Image from "next/image";
import React from "react";

const TopAinsteinBox = ({ image }: { image: { src: string; alt: string } }) => {
  return (
    <div className="flex-center absolute top-[-100px] size-[200px] rounded-[0.625rem] bg-primary-600">
      <Image src={image.src} alt={image.alt} width={130} height={130} />
    </div>
  );
};

export default TopAinsteinBox;
