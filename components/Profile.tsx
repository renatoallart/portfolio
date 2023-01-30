import Image from "next/image";
import { useState } from "react";
import config from "@/portfolioConfig.json";
import Link from "next/link";
import { NavIcons } from "@/components/NavIcons";
export function Profile() {
  // use state approach = https://stackoverflow.com/questions/48703510/change-image-on-hover-in-jsx

  return (
    <>
      <section
        id="projects"
        className="w-[352px] h-[587px] flex flex-col justify-center items-center text-white
        md:w-[1000px] md:h-[275px] md:flex md:flex-row-reverse md:gap-[73px] md:mt-20 
        xl:h-[366px] xl:w-[1044px] xl:gap-[73px]"
      >
        <Image
          className="rounded-full w-[288px] h-[288px] xl:w-[366px] xl:h-[366px]"
          src={config.profileImg}
          priority
          width={366}
          height={366}
          alt={config.author}
        />
        <div
          className="mt-[20px] 
        md:w-[593px] md:h-[271px] md:flex md:flex-col md:justify-center md:items-center
        xl:w-[593px] xl:h-[271px]"
        >
          <h1 className="text-xl text-center xl:text-2xl text-bold">
            Hi, I'm Renato 👋
          </h1>
          <p className="text-center ">
            A developer passionate about technology. I’ve fun creating and
            testing things, always looking for new ideas and technologies.
          </p>
          <ul
            className="flex flex-row-reverse gap-[70px] items-center justify-center mt-[40px]
          xl:w-[218px] xl:h-[75px]"
          >
            {config.socialLinks.map((link) => (
              <NavIcons
                key={link.name}
                url={link.url}
                icon={link.icon}
                hover={link.hover}
                width={54}
                height={49}
              />
            ))}
          </ul>
        </div>
      </section>
      <div className=" mt-[32px] md:m-[73px] rounded-full shadow-sm w-[300px] md:w-[675px] shadow-brand bg-brand h-[5px]"></div>
    </>
  );
}
