import React from "react";
import Image from "next/image";

import data from "@/data/landingPage/data.json";
import { TextHighlight } from "../ui/TextHighlisht";

const ComparisionTable = () => {
  const tableData = data.comparisionSection.comparisonTable;

  return (
    <div className="max-w-9xl grid grid-cols-1 w-full gap-5 md:gap-0 md:grid-cols-2   rounded-xl overflow-hidden mx-auto">
      {tableData.map((item) => {
        return (
          <div
            className="border-[1.2px] md:rounded-none rounded-xl border-secondary-50 "
            key={item.title}
          >
            <div
              className="bg-purple-dark  h-16 md:h-[5.625rem] px-4 sm:px-9  
            md:px-[2rem] flex items-center gap-2 sm:gap-3"
            >
              <Image
                alt="Einstein Logo"
                src={item.image.src}
                width={item.image.w}
                height={item.image.h}
                className={` w-auto h-6 md:h-auto `}
              />
            </div>
            <div className="">
              {item.points.map((point, index) => (
                <div
                  key={index}
                  className={`flex items-start ${
                    index === 0 ? "min-h-[8rem]" : "min-h-[5.65rem]"
                  } p-4 sm:p-6 md:p-[2rem] gap-4 ${
                    item.points.length - 1 !== index && "border-b-[1.2px]"
                  } border-secondary-50`}
                >
                  <div className="flex-shrink-0">
                    <Image
                      alt={point.text}
                      src={point.icon}
                      width={32}
                      height={32}
                      className=""
                    />
                  </div>
                  <p className="text-base sm:text-xl md:text-2xl font-semibold">
                    <TextHighlight
                      text={point.text}
                      highlightText={point.highlight}
                      variant="secondary"
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ComparisionTable;
