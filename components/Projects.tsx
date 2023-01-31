import { portfolio } from "@/portfolio"
import Image from "next/image"
import { NavIcons } from "./NavIcons"
import { v4 as uuidv4 } from "uuid"
import { Card } from "./Card"

interface IProjectsProps {
  length: number
}

export function Projects({ length }: IProjectsProps) {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-white ">
        <h2 className="mb-4 text-xl text-center text-white md:text-4xl text-bold">
          Projects
        </h2>
        <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-[73px] md:mt-[50px] ">
          {portfolio.projects.slice(0, length).map((project) => (
            <Card key={project.name} {...project} />
          ))}
        </div>
      </section>
      <div className=" mt-[32px] md:m-[73px] rounded-full shadow-sm w-[300px] md:w-[675px] shadow-brand bg-brand h-[5px]"></div>
    </>
  )
}
