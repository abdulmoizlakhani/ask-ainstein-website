import React from "react";
import ComparisonContainers from "../custom/cards/Comparision";
import Image from "next/image";

const ComparisionSection = () => {
  return (
    <section className="bg-[#ECE6F5] box-shadow relative flex min-h-[1000px] flex-col pt-[140px] items-center"> 
      {/* TOP COMPONENT */}
      <div className="h-[200px] w-[200px] absolute top-[-100px] bg-accent-brown flex items-center justify-center rounded-[10px]">
        <Image
          src={"/accets/why/ainstien.svg"}
          alt="ask Ainstein"
          width={130}
          height={130}
        />
      </div>
      {/* Main Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-12">
        What makes ‘Ainstein’ unique vs ChatGPT
      </h1>

      {/* Comparison Table */}

      <ComparisonContainers />
    </section>
  );
};

export default ComparisionSection;
