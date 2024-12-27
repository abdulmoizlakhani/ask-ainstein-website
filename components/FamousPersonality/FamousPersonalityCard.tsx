import { generateKey } from "@/utils/helpers";
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
      key={generateKey(person.name)}
      className="flex h-[350px] max-w-[480px] flex-col items-center gap-4 md:h-auto"
    >
      <Image
        src={person.image}
        alt={person.name}
        className=" size-[200px] object-contain md:size-[380px]"
        width={380}
        height={380}
      />
      <div className="space-y-2 text-center">
        <h3 className=" text-base font-bold  md:text-2xl">{person.name}</h3>
        <p className="text-sm font-semibold text-secondary-300 md:text-base">
          {person.title}
        </p>
        <p className="max-w-[420px] text-xs tracking-tight md:text-lg">
          {`"${person.quote}"`}
        </p>
      </div>
    </div>
  );
};

export default FamousPersonality;
