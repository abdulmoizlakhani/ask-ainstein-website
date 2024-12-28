import Image from "next/image";
import React from "react";

const GearingUpCard = ({
  item,
}: {
  item: { text: string; image: { alt: string; src: string } };
}) => {
  return (
    <div className="flex-center min-h-[7.625rem] w-full max-w-[18.5rem] flex-col rounded-xl border-[0.125rem] border-dashed border-silver-light bg-yellow-light p-4 text-center shadow-dark md:max-w-[28.5rem] md:rounded-[1.25rem] md:p-8 lg:min-h-56 lg:max-w-[33.5rem]">
      <Image
        alt={item.image.alt}
        height={3}
        width={3}
        src={item.image.src}
        className="size-8 md:size-12"
      />
      <p className="mt-6 text-xl font-semibold leading-normal md:text-[2rem]">
        {item.text}
      </p>
    </div>
  );
};

export default GearingUpCard;
