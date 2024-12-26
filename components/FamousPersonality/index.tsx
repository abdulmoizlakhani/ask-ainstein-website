import Image from "next/image";
import React from "react";

interface FamousPersonalityProps {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const FamousPErsonality = ({ person }: { person: FamousPersonalityProps }) => {
  return (
    <div className="flex max-w-[480px] flex-col items-center space-y-4">
      <Image
        src={person.image}
        alt={person.name}
        className="size-[380px] object-contain"
        width={380}
        height={380}
      />
      <div className="space-y-2 text-center">
        <h3 className="text-2xl font-bold">{person.name}</h3>
        <p className="font-semibold text-secondary-300">{person.title}</p>
        <p className="max-w-[420px] text-lg tracking-tight">
          {`"${person.quote}"`}
        </p>
      </div>
    </div>
  );
};

export default FamousPErsonality;
