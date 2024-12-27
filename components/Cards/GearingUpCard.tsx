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
      className="flex p-5 md:py-6 shadow-dark border-dashed border-[#EDEDED] border-[2px] flex-col gap-5 md:gap-6 rounded-[12px] md:rounded-[20px] items-center text-center h-[152px] w-full md:h-[225px] md:max-w-[535px] bg-yellow-light"
    >
      <Image
        alt={item.image.alt}
        height={48}
        width={48}
        src={item.image.src}
        className="md:size-12 size-8"
      />
      <p className="text-xl md:text-[32px] font-semibold">{item.text}</p>
    </div>
  );
};

export default GearingUpCard;
