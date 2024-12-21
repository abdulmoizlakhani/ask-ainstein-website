import React from "react";

import Image from "next/image";
import ComparisionEinstien from "../icons/ComparisionEinstien";
import ComparistionChatGpt from "../icons/ComparistionChatGpt";
import data from "@/data/landingPage/data.json";
const ComparisonContainers = () => {
  const comparisionData= data.comparision.comparisionCardData;
  return (
    <div className="max-w-9xl grid grid-cols-2 gap-[1.2px] text-text-smallLight rounded-[10px] overflow-hidden mx-auto ">
      {/* ChatGPT Section */}

      <div>
        <div>
          <div className="bg-accent-blue text-white h-[90px] px-[2rem]  flex items-center gap-3">
            <ComparistionChatGpt />
          </div>

          <div>
            {comparisionData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index === 0 ? "h-[8rem]" : "h-[5.65rem]"
                } p-[2rem] gap-[2rem] ${
                  comparisionData.length - 1 !== index && "border-b-[1.2px]"
                } border-gray-300 bg-purple-50`}
              >
                <div className="w-12 h-8">
                  <Image
                    alt="cut Logo"
                    src={"/accets/icons/cut.svg"}
                    width={32}
                    height={32}
                    className="h-[32px] w-[32px]"
                  />
                </div>
                <p className="text-2xl font-semibold">
                  {item.chatgpt.text}
                  
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Einstein Section */}
      <div>
        <div>
          <div className="bg-accent-blue text-white h-[90px] px-6  flex items-center gap-3">
            <ComparisionEinstien />
          </div>

          <div>
            {comparisionData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index === 0 ? "h-[8rem]" : "h-[5.65rem]"
                } p-[2rem] gap-[2rem] ${
                  comparisionData.length - 1 !== index && "border-b-[1.2px]"
                }  border-gray-300 bg-purple-50`}
              >
                <div className="w-12 h-8">
                  <Image
                    alt="cut Logo"
                    src={"/accets/icons/tick.svg"}
                    width={32}
                    height={32}
                    className="h-[32px] w-[32px]"
                  />
                </div>
                <p className="text-2xl font-semibold">
                  {item.einstein.text}{" "}
                  {item.einstein.heighlight && (
                    <span className="font-semibold text-black p-1 rounded bg-card">
                      {item.einstein?.heighlight}
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonContainers;
