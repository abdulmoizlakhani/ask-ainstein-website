import React from "react";

import Image from "next/image";
import ComparisionEinstien from "../icons/ComparisionEinstien";
import comparisionData from "@/data/Comparision.json";
import ComparistionChatGpt from "../icons/ComparistionChatGpt";

const ComparisonContainers = () => {
  return (
    <div className="max-w-9xl grid grid-cols-2 gap-[1.2px] rounded-[10px] overflow-hidden mx-auto border border-gray-300">
      {/* ChatGPT Section */}

      <div>
        <div>
          <div className="bg-accent-blue text-white h-[90px] px-[2rem]  flex items-center gap-3">
            <ComparistionChatGpt />
          </div>

          <div>
            {comparisionData.comparision.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index === 0 ? "h-[8rem]" : "h-[5.65rem]"
                } p-[2rem] gap-[2rem] border-b-[1.2px] border-gray-300 bg-purple-50`}
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
                <span className="text-2xl font-semibold">{item.chatgpt}</span>
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
            {comparisionData.comparision.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index === 0 ? "h-[8rem]" : "h-[5.65rem]"
                } p-[2rem] gap-[2rem] border-b-[1.2px] border-gray-300 bg-purple-50`}
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
                <p className="text-2xl font-semibold">{item.einstein}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonContainers;
