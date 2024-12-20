import React from "react";
import Cut from "../icons/Cut";
import Tick from "../icons/Tick";
import Image from "next/image";
import ComparisionEinstien from "../icons/ComparisionEinstien";
import comparisionData from "@/data/Comparision.json"

// type of Comparision
interface ComparisonItem {
  chatgpt: string;
  einstein: string;
}



const ComparisonContainers = () => {
  

  return (
    <div className="comparison-container max-w-6xl mx-auto border border-gray-300 rounded-lg">
  {/* ChatGPT Section */}
  <div className="section">
    <div className="bg-accent-blue text-white h-[88px] px-6 rounded flex items-center gap-3">
      <div className="bg-white p-1 rounded-lg">
        <Image
          alt="ChatGPT Logo"
          src="/accets/icons/chatgpt.png"
          width={33}
          height={33}
          className="h-[33px] w-[33px]"
        />
      </div>
      <span className="text-lg font-medium">ChatGPT</span>
    </div>

    <div>
      {comparisionData.comparision.map((item, index) => (
        <div key={index} className="flex items-center px-4 gap-3 border-[1px] border-gray-300 h-[80px] bg-purple-50">
          <div className="w-4 h-4">
          <Cut />
          </div>
          <span className="text-sm sm:text-base">{item.chatgpt}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Einstein Section */}
  <div className="section">
    <div className="bg-accent-blue text-white h-[88px] px-6 rounded flex items-center gap-3">
      <ComparisionEinstien />
    </div>

    <div>
      {comparisionData.comparision.map((item, index) => (
        <div key={index} className="flex items-center px-4 gap-3 border-b-[1px] border-gray-300 h-[80px] bg-purple-50">
          <div className="w-4 h-4">
          <Tick />
          </div>
          <p className="text-sm sm:text-base">{item.einstein}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default ComparisonContainers;
