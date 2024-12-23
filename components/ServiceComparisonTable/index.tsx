import Image from "next/image";
import React from "react";

import data from "@/data/landingPage/data.json";

const ComparisonContainers = () => {
  const { comparisionCardData, tickIcon, cutIcon } = data.comparision;

  const ComparisonSection = ({ isEinstein }: { isEinstein: boolean }) => (
    <div className="">
      <div className="flex  h-[70px] items-center gap-2 bg-purple-dark px-4 text-white sm:h-[80px] sm:gap-3 sm:px-6 md:h-[90px] md:px-8">
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
              index === 0 ? "min-h-32" : "min-h-[5.65rem]"
            } p-4 sm:p-6 md:p-8 ${
              comparisionCardData.length - 1 !== index && "border-b-[1.2px]"
            } border-secondary-50 bg-purple-50`}
          >
            <div className="h-6 w-8 shrink-0 sm:h-7 sm:w-10 md:h-8 md:w-12">
              <Image
                alt={`${isEinstein ? "tick" : "cut"} Logo`}
                src={isEinstein ? tickIcon : cutIcon}
                width={32}
                height={32}
                className="size-[24px] sm:size-[28px] md:size-[32px]"
              />
            </div>
            <p className="text-base font-semibold sm:text-xl md:text-2xl">
              {isEinstein ? (
                <>
                  {item.einstein.text}{" "}
                  {item.einstein.heighlight && (
                    <span className="rounded bg-yellow-light p-1 text-black">
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
    <div className="mx-auto grid max-w-9xl grid-cols-1 overflow-hidden rounded-[10px]  border-[1.2px] border-secondary-50 text-secondary-800 md:grid-cols-2">
      <ComparisonSection isEinstein={false} />
      <ComparisonSection isEinstein={true} />
    </div>
  );
};

export default ComparisonContainers;
