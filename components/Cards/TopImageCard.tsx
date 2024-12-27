import Image from "next/image";
import React from "react";

const TopImageCard = ({ image }: { image: { src: string; alt: string } }) => {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={200}
      height={200}
      className="md:h-[200px] w-[100px] h-[100px] md:w-[200px] absolute top-[-50px] md:top-[-100px] bg-accent-brown flex items-center justify-center rounded-[10px]"
    />
  );
};

export default TopImageCard;
