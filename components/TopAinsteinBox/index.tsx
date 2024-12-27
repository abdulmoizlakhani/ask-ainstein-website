import Image from "next/image";
import React from "react";

const TopAinsteinBox = ({ image }: { image: { src: string; alt: string } }) => {
  return (
    <div className="flex-center absolute top-[-50px] size-[100px] rounded-[0.625rem] bg-primary-600 md:top-[-100px] md:size-[200px]">
      <Image
        src={image.src}
        alt={image.alt}
        width={130}
        height={130}
        className="size-[68px] object-contain md:size-[130px]"
      />
    </div>
  );
};

export default TopAinsteinBox;
