import Image from "next/image";
import React from "react";

const TopImageCard = ({ image }: { image: { src: string; alt: string } }) => {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={200}
      height={200}
      className="absolute top-[-50px] flex size-[100px] items-center justify-center rounded-[10px] md:top-[-100px] md:size-[200px]"
    />
  );
};

export default TopImageCard;
