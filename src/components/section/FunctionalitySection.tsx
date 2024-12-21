import Image from "next/image";
import React from "react";
import data from "@/data/landingPage/data.json"; // Update the path to your JSON file

const FunctionalitySection = () => {
  const { sectionTitle, subPara, cards, bottomText } = data.functionalityData;

  return (
    <section className="bg-quaternary box-shadow py-32 gap-8 flex-col flex items-center relative h-[1151px]">
      {/* TOP COMPONENT */}
      <div className="h-[200px] w-[200px] absolute top-[-100px] bg-accent-brown flex items-center justify-center rounded-[10px]">
        <Image
          src={"/accets/functionalitySection/ainstien.svg"}
          alt="ask Ainstein"
          width={130}
          height={130}
        />
      </div>

      {/* MAIN HEADING */}
      <h2 className="text-[32px] text-center tracking-tight max-w-[933px] font-semibold">
        "{sectionTitle.mainHeading}"
        <br />
        "{sectionTitle.subHeading}"
      </h2>

      {/* SUB PARA */}
      <h4 className="font-semibold text-text-smallLight text-xl">
        With <span className="text-text-green font-bold">Ask Ainstein</span>, you
        can unlock access to
      </h4>

      {/* ALL CARDS */}
      <div className="flex items-center justify-center gap-[30px]">
        {cards.map((item) => {
          return (
            <div
              key={item.text}
              className="flex justify-center border-dashed border-[#EDEDED] border-[2px] flex-col gap-6 rounded-[20px] shadow-custom items-center text-center h-[225px] w-[535px] bg-card"
            >
              <Image
                alt={item.text}
                height={48}
                width={48}
                src={`/accets/functionalitySection/${item.image}.svg`}
              />
              <p className="text-[32px] font-semibold">{item.text}</p>
            </div>
          );
        })}
      </div>

      {/* BOTTOM PARA */}
      <h4 className="text-[28px] mt-8 font-bold bg-text-bg px-2 rounded">
        {bottomText}
      </h4>
    </section>
  );
};

export default FunctionalitySection;
