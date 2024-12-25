import Image from "next/image";
import React from "react";
import data from "@/data/landingPage/data.json"; // Update the path to your JSON file

const About = () => {
  const { heroAction, profileImage, profileText, video } = data.about;

  return (
    <section className="flex relative pt-[100px] lg:pt-[330px] lg:pb-[100px] flex-col justify-center items-center">
      {/* YouTube container */}
      <div className="absolute top-[-164px] lg:top-[-400px]">
        <div className="relative">
          <iframe
            height={"100%"}
            width={"100%"}
            className="lg:w-[1064px] w-[328px] h-[328px] flex justify-center items-center rounded-[20px] lg:h-[699px] bg-secondary-400"
            src={video}
            allowFullScreen
          />
          <Image
            src={heroAction}
            alt="See its Action"
            height={72}
            width={102}
            className="absolute h-[72px] w-[102px] lg:h-[226px] lg:w-[318px] top-[-100px] lg:top-[-230px] lg:left-[-230px]"
          />
        </div>
      </div>

      {/* About section */}
      <div className="flex  mx-auto py-20 max-w-[874px] px-4 justify-center items-center flex-col gap-6">
        {/* First paragraph */}
        <div className="flex justify-between lg:justify-center lg:flex-row flex-col-reverse  items-center gap-1 tracking-tight">
          <p className="text-sm lg:text-xl text-secondary-600 font-semibold">
            👋 Hi,{" "}
            <span className="text-blue-dark underline decoration-blue-dark underline-offset-4">
              I&apos;m {profileText.name}
            </span>
            , the founder of{" "}
            <span className="text-primary-300">Ask Ainstein</span>.{" "}
            {profileText.description}
          </p>
          <div className="flex lg:flex-col flex-row w-full justify-start lg:justify-center items-center gap-4">
            <div className="rounded overflow-hidden h-[110px] w-[110px] bg-secondary-light">
              <Image
                src={profileImage}
                alt="Profile"
                objectFit="contain"
                width={110}
                height={110}
                className="object-contain"
              />
            </div>
            <h2 className="font-bold text-secondary-900">{profileText.role}</h2>
          </div>
        </div>

        {/* Second paragraph */}
        <div className="lg:text-xl text-sm font-bold">
          <h3>🌟 Why I Created Ask Ainstein</h3>
          <p className="text-secondary-600">
            <span className="bg-primary-100 p-1 rounded text-secondary-900">
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
        <p className="lg:text-xl text-sm font-bold text-secondary-600">
          ​Now, I’ve taken this vision further by creating{" "}
          <span className="text-primary-300">Ask Ainstein</span>-{" "}
          <span className="bg-blue-light p-1 rounded text-secondary-900">
            a platform designed to make learning accessible, engaging, and
            effective for everyone.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
