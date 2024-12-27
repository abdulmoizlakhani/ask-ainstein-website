import Image from "next/image";
import React from "react";

import TextHighlight from "@/components/TextHighlight";
import { generateKey } from "@/utils/helpers";

interface ServiceComparisonTableComponentProps {
  title: string;
  image: {
    src: string;
    alt: string;
    w: number;
    h: number;
  };
  points: {
    icon: string;
    text: string;
    highlight?: string;
  }[];
}

const ServiceComparisonTableComponent = ({
  tableData,
}: {
  tableData: ServiceComparisonTableComponentProps[];
}) => {
  return (
    <div className="mx-auto grid w-full max-w-9xl grid-cols-1 gap-5 overflow-hidden rounded-xl md:grid-cols-2 md:gap-0">
      {tableData.map((item) => {
        return (
          <div
            className="min-h-[21.875rem] overflow-hidden rounded-xl border-[1.2px] border-secondary-50 bg-secondary-light md:rounded-none"
            key={generateKey(item.title)}
          >
            <div className="flex h-16 items-center gap-2 bg-purple-dark px-4 sm:gap-3 sm:px-9 md:h-[5.625rem] md:px-8">
              <Image
                alt="Einstein Logo"
                src={item.image.src}
                width={item.image.w}
                height={item.image.h}
              />
            </div>
            {item.points.map((point, index) => (
              <div
                key={generateKey(point.text)}
                className={`flex items-start ${
                  index === 0 ? "md:h-32" : "lg:h-[5.65rem]"
                } gap-2 px-2 py-6 md:gap-4 md:p-8 ${
                  item.points.length - 1 !== index && "border-b-[1.2px]"
                } border-secondary-50 `}
              >
                <div className="shrink-0">
                  <Image
                    alt={point.text}
                    src={point.icon}
                    width={32}
                    height={32}
                    className="size-4 md:size-8"
                  />
                </div>
                <p className="font-2xl lg:font-2xl font-semibold text-secondary-800 md:text-base">
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

export default ServiceComparisonTableComponent;
