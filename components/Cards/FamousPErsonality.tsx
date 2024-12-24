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
    <div className="flex flex-col max-w-[480px] items-center space-y-4">
      <Image
        src={person.image}
        alt={person.name}
        className="h-[380px] object-contain w-[380px]"
        width={380}
        height={380}
      />
      <div className="text-center space-y-2">
        <h3 className="font-bold text-2xl">{person.name}</h3>
        <p className="font-semibold text-secondary-300">{person.title}</p>
        <p className="text-lg max-w-[420px] tracking-tight">
          {`"${person.quote}"`}
        </p>
      </div>
    </div>
  );
};

export default FamousPErsonality;
