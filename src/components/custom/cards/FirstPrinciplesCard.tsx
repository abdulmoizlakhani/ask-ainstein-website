import Image from "next/image";
import React from "react";
import Tick from "../icons/Tick";

const FirstPrinciplesCard = () => {
  return (
    <div className="relative  w-full max-w-6xl mx-auto">
      {/* Light bulb */}
      <div className="absolute left-1/2  -translate-x-1/2 top-[-100px] z-10">
        <Image
          height={180}
          width={180}
          className="h-[180px] w-[180px]"
          alt="lgiht icon"
          src={"/accets/icons/light.png"}
        />
      </div>

      {/* Main card */}
      <div className="bg-black  border-dashed border-[4px] border-[#DDDDDD] rounded-lg text-white p-8 pt-[100px]">
        <div className="space-y-10">
          {/* Title with separator line */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold mb-7 text-center">
              The Power of First Principles Thinking
            </h1>
            <hr className="border-[#DEE4EC] border-[2px]" />
          </div>

          <p className="text-text-secondaryLight leading-relaxed font-semibold text-2xl">
            Several influential thinkers, entrepreneurs, and scientists have
            championed first principles thinking – a problem-solving framework
            that breaks down complex problems into their most basic, fundamental
            truths.
          </p>

          <div className="flex items-center text-2xl  font-bold  gap-2 text-text-red">
            <span className="">🚨</span>
            <p >
              Here's the <span className="font-bold">HARD</span> truth - Most
              schools don't teach this!
            </p>
          </div>

          <div className="space-y-2 text-2xl  font-bold ">
            <p className="font-bold text-2xl">It's not about what you learn.</p>

            <div className="flex items-center gap-2">
              <span className="text-2xl">
                <Tick/>
              </span>
              <div className="">
                <span className="bg-text-bg text-text-black px-2 py-1 rounded">
                  It's about how you think
                </span>
                <span className="ml-2 text-text-secondaryLight">
                  – and that's what truly sets you apart in the long run.
                </span>
              </div>
            </div>
          </div>

          <p className="text-text-secondaryLight text-2xl  font-bold ">
            By mastering this approach, you gain the tools to{" "}
            <span className="bg-accent-lightYellow text-text-black px-2 py-1 rounded">
              tackle any challenge, innovate fearlessly, and achieve lasting
              success.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstPrinciplesCard;
