import Image from "next/image";
import React from "react";
import data from "@/data/landingPage/data.json"; // Update the path to your JSON file

const About = () => {
  const { heroAction, youtubeShape, youtubeCenter, profileImage, profileText } =
    data.about;

  return (
    <section className="flex relative pt-[350px] pb-[100px] flex-col justify-center items-center">
      {/* YouTube container */}
      <div className="absolute top-[-0%]">
        <iframe
          height={"100%"}
          width={"100%"}
          className="w-[1064px] translate-y-[-50%] flex relative justify-center items-center rounded-[20px] h-[699px] bg-[#D9D9D9]"
          src="https://www.youtube.com/embed/19g66ezsKAg"
          allowFullScreen
        />

        {/* <Image
            src={heroAction}
            alt="See its Action"
            height={226}
            width={318}
            className="absolute left-[-235px] top-[-231px]"
          />
          <div className="flex justify-center items-center relative">
            <Image
              src={youtubeShape}
              alt="YouTube Button"
              width={107}
              height={75}
            />
            <Image
              className="absolute"
              src={youtubeCenter}
              alt="Click"
              width={28}
              height={32}
            />
          </div> */}
      </div>

      {/* About section */}
      <div className="flex mx-auto py-20 max-w-[874px] justify-center items-center flex-col gap-6">
        {/* First paragraph */}
        <div className="flex justify-center items-center gap-1 tracking-tight">
          <p className="text-[20px] text-text-secondary font-semibold">
            👋 Hi,{" "}
            <span className="text-text-blue underline decoration-text-blue underline-offset-4">
              I&apos;m {profileText.name}
            </span>
            , the founder of{" "}
            <span className="text-text-green">Ask Ainstein</span>.{" "}
            {profileText.description}
          </p>
          <div className="flex flex-col w-full justify-center items-center gap-4">
            <div className="rounded overflow-hidden h-[110px] w-[110px] bg-white">
              <Image
                src={profileImage}
                alt="Profile"
                objectFit="contain"
                width={110}
                height={110}
                className="object-contain"
              />
            </div>
            <h2 className="font-bold">{profileText.role}</h2>
          </div>
        </div>

        {/* Second paragraph */}
        <div className="text-[20px] font-bold">
          <h3>🌟 Why I Created Ask Ainstein</h3>
          <p className="text-text-secondary">
            <span className="bg-card p-1 rounded text-black">
              Drawing from my own challenges as a student with ADHD,{" "}
            </span>
            I deeply understand what it’s like to have a short attention span
            and struggle with distractions. These experiences shaped my teaching
            style, allowing me to cater to students who learn differently. This
            personalized approach has been my winning formula, helping students
            not only succeed but thrive.
          </p>
        </div>

        {/* Third paragraph */}
        <p className="text-[20px] font-bold text-text-secondary">
          ​Now, I’ve taken this vision further by creating{" "}
          <span className="text-text-green">Ask Ainstein</span>-{" "}
          <span className="bg-text-bgBlue p-1 rounded text-black">
            a platform designed to make learning accessible, engaging, and
            effective for everyone.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
