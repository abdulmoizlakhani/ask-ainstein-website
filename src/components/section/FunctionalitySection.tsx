import Image from "next/image";
import React from "react";

const card = [
  {
    text: "Tons of adaptive practice questions ",
    image: "practice",
  },
  {
    text: "Instant AI-powered help",
    image: "ai",
  },
];
const FunctionalitySection = () => {
  return (
    <section className="bg-quaternary box-shadow py-28 gap-8   flex-col flex items-center relative h-[1151px]">
      <div className="h-[200px] w-[200px] absolute top-[-100px] bg-accent-brown flex items-center justify-center rounded-[10px]">
        <Image
          src={"/accets/functionalitySection/ainstien.svg"}
          alt="ask Ainstein"
          width={130}
          height={130}
        />
      </div>
      <h2 className="text-[32px] text-center tracking-tight max-w-[933px] font-semibold">
        "Are you gearing up for your school or board exams?"
        <br />
        ​"Need personalized attention that you are not finding outside?"
      </h2>
      <h4>
        With <span className="text-text-green text-xl">Ask Ainstein</span>, you
        can unlock access to
      </h4>
      <div className="flex items-center justify-center gap-4">
        {card.map((item) => {
          return (
            <div className="flex justify-center flex-col gap-6 rounded-[20px] shadow-xl  items-center text-center h-[225px] w-[535px] bg-[#EDEDED]">
              <Image
                alt="logo"
                height={48}
                width={48}
                src={`/accets/functionalitySection/${item.image}.svg`}
              />
              <p className="text-[32px] font-semibold">{item.text}</p>
            </div>
          );
        })}
      </div>
      <h4 className="text-[28px] mt-8 font-bold bg-text-bg px-2 rounded">
        Don’t just memorize! Get the guidance you need to excel in exams and
        beyond. ​
      </h4>
    </section>
  );
};

export default FunctionalitySection;
