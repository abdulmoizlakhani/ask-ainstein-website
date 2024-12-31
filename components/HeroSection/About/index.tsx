import Image from "next/image";
import React from "react";

import TextHighlight from "@/components/TextHighlight";
import data from "@/data/landingPage/data.json";

const About = () => {
  const {
    heroActionImage,
    profileImage,
    profileText,
    video,
    secondPara,
    thirdPara,
  } = data.about;

  return (
    <section className="relative flex flex-col items-center justify-center pt-[11.625rem]">
      <div className="absolute -top-44 mx-auto w-full px-6 lg:-top-40 xl:-top-96">
        <iframe
          height="100%"
          width="100%"
          className="mx-auto min-h-[20.5rem] w-full rounded-[1.25rem] bg-secondary-400 md:max-w-[54.625rem] lg:h-[43.75rem] xl:max-w-[66.5rem]"
          src={video}
          allowFullScreen
        />
        <Image
          src={heroActionImage}
          alt="See its Action"
          width={102}
          height={72}
          className="absolute -top-1/3 left-8 sm:-top-1/2 sm:w-40 lg:-top-60 lg:left-16 lg:w-[19.875rem]"
        />
      </div>

      <div className="mx-auto flex min-w-[20.25rem] max-w-[54.625rem] flex-col items-center justify-center gap-6 px-6 pb-24 lg:pt-[25rem] xl:pt-48">
        <div className="flex flex-col gap-8 lg:flex-row-reverse">
          <div className="flex w-full flex-row items-center justify-start gap-4 lg:flex-col lg:justify-center">
            <div className="flex items-center justify-center rounded">
              <Image
                src={profileImage}
                alt="Profile"
                width={110}
                height={110}
                className="object-contain"
              />
            </div>
            <h2 className="font-bold text-secondary-900">{profileText.role}</h2>
          </div>
          <p className="text-sm font-semibold text-secondary-200 lg:text-xl">
            👋 Hi,{" "}
            <span className="text-blue-dark underline decoration-blue-dark underline-offset-4">
              I&apos;m {profileText.name}
            </span>
            , the founder of{" "}
            <span className="text-primary-300">Ask Ainstein</span>.{" "}
            {profileText.description}
          </p>
        </div>

        <div className="text-sm font-bold lg:text-xl">
          <h3>{secondPara.title}</h3>
          <p className="mt-2 !leading-normal text-secondary-200">
            <TextHighlight
              variant="secondary"
              className="text-secondary-dark"
              text={secondPara.content}
              highlightText={secondPara.highlight}
            />
          </p>
        </div>

        <p className="text-sm font-bold !leading-normal text-secondary-200 lg:text-xl">
          <TextHighlight
            text={thirdPara.content.split(" - ")[0]}
            highlightText="Ask Ainstein"
            variant="primary"
          />
          {" - "}
          <TextHighlight
            className="!leading-normal text-secondary-dark"
            text={thirdPara.content.split(" - ")[1]}
            highlightText={thirdPara.highlight}
            variant="tertiary"
          />
        </p>
      </div>
    </section>
  );
};

export default About;
