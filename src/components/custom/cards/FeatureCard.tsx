import Image from "next/image";
import React from "react";

interface FeatureType {
  title: string;
  description: string;
  icon: string;
  heighlight?: string;
}
const FeatureCard = ({
  data,
  first,
}: {
  data: FeatureType;
  first?: boolean;
}) => {
  return (
    // Feature Card
    <div className="bg-quaternary p-6 shadow-custom flex flex-col justify-center gap-6 relative h-[200px] max-w-[500px] w-full rounded-[28px] border-[1px] border-dashed">
      {/* bottom icon */}
      <Image
        src={data.icon}
        alt={data.title}
        width={35}
        height={35}
        className="h-[35px] w-[35px] absolute bottom-6 right-6"
      />
      {/* top section */}
      <div className="flex items-center gap-4">
        <Image
          src={"/accets/why/tick.svg"}
          alt={data.title}
          width={35}
          height={35}
          className="h-[35px] w-[35px]"
        />
        <h4
          className={`text-[26px] tracking-tight font-bold ${
            first
              ? "bg-card  text-text-black px-1 rounded"
              : "text-text-black"
          }`}
        >
          {data.title}
        </h4>
      </div>
      {/* Paragraph */}
      <p className="text-[#444444] text-[22px] italic font-medium">
        {data.description}
        <br />{" "}
        {data.heighlight && (
          <span className="text-black font-semibold bg-card p-1 rounded">
            {" "}
            {data.heighlight}
          </span>
        )}
      </p>
    </div>
  );
};

export default FeatureCard;
