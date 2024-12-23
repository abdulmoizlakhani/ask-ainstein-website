import React from "react";
import Image from "next/image";

import data from "@/data/landingPage/data.json";

const ComparisonContainers = () => {
  const { comparisionCardData, tickIcon, cutIcon } = data.comparision;

  const ComparisonSection = ({ isEinstein }: { isEinstein: boolean }) => (
    <div className="">
      <div className="bg-purple-dark  text-white h-[70px] sm:h-[80px] md:h-[90px] px-4 sm:px-6 md:px-[2rem] flex items-center gap-2 sm:gap-3">
        <Image
          alt="Einstein Logo"
          src={
            isEinstein ? "/assets/ask-ainstein-ai.png" : "/assets/chatgpt.svg"
          }
          width={isEinstein ? 204 : 148}
          height={isEinstein ? 48 : 44}
          className="object-contain"
        />
      </div>
      <div>
        {comparisionCardData.map((item, index) => (
          <div
            key={index}
            className={`flex items-start ${
              index === 0 ? "min-h-[8rem]" : "min-h-[5.65rem]"
            } p-4 sm:p-6 md:p-[2rem] ${
              comparisionCardData.length - 1 !== index && "border-b-[1.2px]"
            } border-secondary-50 bg-purple-50`}
          >
            <div className="w-8 sm:w-10 md:w-12 h-6 sm:h-7 md:h-8 flex-shrink-0">
              <Image
                alt={`${isEinstein ? "tick" : "cut"} Logo`}
                src={isEinstein ? tickIcon : cutIcon}
                width={32}
                height={32}
                className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px]"
              />
            </div>
            <p className="text-base sm:text-xl md:text-2xl font-semibold">
              {isEinstein ? (
                <>
                  {item.einstein.text}{" "}
                  {item.einstein.heighlight && (
                    <span className="text-black p-1 rounded bg-yellow-light">
                      {item.einstein.heighlight}
                    </span>
                  )}
                </>
              ) : (
                item.chatgpt.text
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-9xl grid grid-cols-1 md:grid-cols-2 border-[1.2px] border-secondary-50  text-secondary-800 rounded-[10px] overflow-hidden mx-auto">
      <ComparisonSection isEinstein={false} />
      <ComparisonSection isEinstein={true} />
    </div>
  );
};

export default ComparisonContainers;
