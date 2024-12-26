import Image from "next/image";
import React from "react";

interface FamousPersonalityProps {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const FamousPersonality = ({ person }: { person: FamousPersonalityProps }) => {
  return (
    <div
      key={person.name}
      className="flex max-w-[480px] md:h-auto h-[350px] flex-col items-center gap-4"
    >
      <Image
        src={person.image}
        alt={person.name}
        className=" size-[200px] md:size-[380px] object-contain"
        width={380}
        height={380}
      />
      <div className="space-y-2 text-center">
        <h3 className=" text-base md:text-2xl  font-bold">{person.name}</h3>
        <p className="font-semibold text-sm md:text-base text-secondary-300">
          {person.title}
        </p>
        <p className="max-w-[420px] text-xs md:text-lg tracking-tight">
          {`"${person.quote}"`}
        </p>
      </div>
    </div>
  );
};

export default FamousPersonality;
