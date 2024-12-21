import Image from "next/image";
import React from "react";

const FirstPrinciplesCard = () => {
  return (
      <div className="w-[91.12rem]  h-[57.31rem] rounded-[20px] flex pt-[7.375rem] justify-center bg-black">
    <div className="bg-bgLightYellow relative max-w-[76.125rem] h-[730px] rounded-[20px]  text-text-black  border-dashed border-[4px] border-[#DDDDDD] pb-[70px] px-[2.5rem] pt-[9.25rem]">
      <Image
        height={180}
        width={180}
        className="h-[180px] w-[180px] absolute left-1/2  -translate-x-1/2 top-[-90px] z-10"
        alt="lgiht icon"
        src={"/accets/icons/light.png"}

      />
      <div className="space-y-9 font-semibold text-2xl">
        {/* Title with separator line */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold mb-7 text-center">
            The Power of First Principles Thinking
          </h1>
          <hr className="border-[#DEE4EC] border-[2px]" />
        </div>

        <p className="text-text-smallLight leading-relaxed text-2xl">
          Several influential thinkers, entrepreneurs, and scientists have
          championed first principles thinking – a problem-solving framework
          that breaks down complex problems into their most basic, fundamental
          truths.
        </p>

        <div className="flex items-center  gap-2 text-text-red">
          <span>🚨</span>
          <p >
            Here's the <span className="font-bold">HARD truth - Most
            schools don't teach this!</span>
          </p>
        </div>
        <p className="pl-10 font-bold text-black">It's not about what you learn.</p>


          <div className="flex items-center gap-2">
            <Image 
              height={32}
              width={32}
              className="h-[32px] w-[32px]"
              alt="lgiht icon"
              src={"/accets/icons/tick.svg"}
            />
            <p>
              <span className="bg-text-bgBlue text-text-black font-bold px-2 py-1 rounded">
                It's about how you think
              </span>
              <span className="ml-2 text-text-smallLight">
                – and that's what truly sets you apart in the long run.
              </span>
            </p>
          </div>

        <p className="text-text-smallLight ">
          By mastering this approach, you gain the tools to{" "}
          <span className="bg-card text-text-black px-2 py-1 rounded">
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
