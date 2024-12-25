import Image from "next/image";
import React from "react";

import TextHighlight from "@/components/TextHighlight";
import data from "@/data/landingPage/data.json";

const ComparisionTable = () => {
  const tableData = data.comparisionSection.comparisonTable;

  return (
    <div className="mx-auto grid w-full max-w-9xl grid-cols-1 gap-5 overflow-hidden rounded-xl md:grid-cols-2 md:gap-0">
      {tableData.map((item) => {
        return (
          <div
            className="rounded-xl border-[1.2px] border-secondary-50 bg-secondary-light md:rounded-none"
            key={item.title}
          >
            <div className="flex h-16 items-center gap-2 bg-purple-dark px-4 sm:gap-3 sm:px-9 md:h-[5.625rem] md:px-8">
              <Image
                alt="Einstein Logo"
                src={item.image.src}
                width={item.image.w}
                height={item.image.h}
                className="h-6 w-auto md:h-auto"
              />
            </div>
            {item.points.map((point, index) => (
              <div
                key={index}
                className={`flex items-start ${
                  index === 0 ? "min-h-32" : "min-h-[5.65rem]"
                } gap-4 p-4 sm:p-6 md:p-8 ${
                  item.points.length - 1 !== index && "border-b-[1.2px]"
                } border-secondary-50 `}
              >
                <div className="shrink-0">
                  <Image
                    alt={point.text}
                    src={point.icon}
                    width={32}
                    height={32}
                  />
                </div>
                <p className="text-base font-semibold text-secondary-800 sm:text-xl md:text-2xl">
                  <TextHighlight
                    text={point.text}
                    highlightText={point.highlight}
                    className="text-secondary-dark"
                    variant="secondary"
                  />
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ComparisionTable;
