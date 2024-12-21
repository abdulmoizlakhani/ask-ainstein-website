import React from "react";
import ComparisonContainers from "../custom/cards/Comparision";
import Image from "next/image";
import data from "@/data/landingPage/data.json";

const ComparisionSection = () => {
  const { comparision } = data;
  return (
    <section className="bg-[#ECE6F5] shadow-dark relative flex min-h-[1125px] flex-col pt-[140px] items-center">
      {/* TOP COMPONENT */}
      <div className="h-[200px] w-[200px] absolute top-[-100px] bg-accent-brown flex items-center justify-center rounded-[10px]">
        <Image
          src={comparision.sectionTitle.images}
          alt="ask Ainstein"
          width={130}
          height={130}
        />
      </div>
      {/* Main Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
        {comparision.sectionTitle.mainHeading}
      </h1>

      {/* Comparison Table */}

      <ComparisonContainers />
    </section>
  );
};

export default ComparisionSection;
