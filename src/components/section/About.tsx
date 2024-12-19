import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flex  translate-y-[-400px] flex-col justify-center items-center">
      {/* youtube container */}
      <div className="w-[1064px]  flex relative justify-center items-center rounded-[20px] h-[699px] bg-[#D9D9D9]">
        <Image
          src="/accets/hero/action.png"
          alt="See its Action"
          height={226}
          width={318}
          className="absolute left-[-235px] top-[-231px]"
        />
        <div className="flex justify-center items-center relative">
          <Image
            src="/accets/icons/youtubeShape.svg"
            alt="youtubeButton"
            width={107}
            height={75}
          />
          <Image
            className="absolute"
            src="/accets/icons/youtubeCenter.svg"
            alt="click"
            width={28}
            height={32}
          />
        </div>
      </div>
      {/* about */}

      <div className="flex mx-auto py-20 max-w-[874px] justify-center items-center flex-col gap-6">
        {/* first para */}
        <div className="flex justify-center items-center gap-1 tracking-tight">
          <p className="text-[20px] text-text-secondary font-semibold">
            👋 Hi,{" "}
            <span className="text-text-blue underline decoration-text-blue underline-offset-4">
              I&apos;m Aamir
            </span>
            , the founder of{" "}
            <span className="text-text-green">Ask Ainstein</span>. As a CFA
            Charterholder with over 10 years of experience tutoring thousands of
            students at various levels, I’ve had the privilege of witnessing
            remarkable transformations. I’ve seen students who once struggled in
            class go on to achieve extraordinary success, often surprising their
            parents and teachers alike.
          </p>
          <div className="flex flex-col w-full justify-center items-center gap-4">
            <div className="rounded-full overflow-hidden h-[110px] w-[110px] bg-white">
              <Image
                src="/accets/about/profile.png"
                alt="profile"
                objectFit="contain"
                width={100}
                height={100}
              />
            </div>
            <h2 className="font-bold">Founder & Educator</h2>
          </div>
        </div>
        {/* second para */}
        <div className="text-[20px] font-bold">
          <h3>🌟 Why I Created Ask Ainstein</h3>
          <p>
            Drawing from my own challenges as a student with ADHD,{" "}
            <span className="text-text-secondary">
              I deeply understand what it’s like to have a short attention span
              and struggle with distractions. These experiences shaped my
              teaching style, allowing me to cater to students who learn
              differently. This personalized approach has been my winning
              formula, helping students not only succeed but thrive.
            </span>
          </p>
        </div>
        {/* third para */}
        <p className="text-[20px] font-bold text-text-secondary">
          {" "}
          ​Now, I’ve taken this vision further by creating{" "}
          <span className="text-text-green">Ask Ainstein</span>-{" "}
          <span className="bg-[#BADAFD] p-1 rounded">
            a platform designed to make learning accessible, engaging, and
            effective for everyone.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
