import Image from "next/image";
import React from "react";

const GearingUpCard = ({
  item,
}: {
  item: { text: string; image: { alt: string; src: string } };
}) => {
  return (
    <div
      key={item.text}
      className="flex p-[1.25rem] md:py-[1.5rem] shadow-dark border-dashed border-[#EDEDED] border-[0.125rem] flex-col gap-[1.25rem] md:gap-[1.5rem] rounded-[0.75rem] md:rounded-[1.25rem] items-center text-center h-[9.5rem] w-full md:h-[14.0625rem] md:max-w-[33.4375rem] bg-yellow-light"
    >
      <Image
        alt={item.image.alt}
        height={3}
        width={3}
        src={item.image.src}
        className="md:size-[3rem] size-[2rem]"
      />
      <p className="text-xl md:text-[2rem] leading-normal font-semibold">
        {item.text}
      </p>
    </div>
  );
};

export default GearingUpCard;
