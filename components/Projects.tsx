import { portfolio } from "@/portfolio"
import { Card } from "./Card"

interface IProjectsProps {
  start: number
  end?: number
}

export function Projects({ start, end }: IProjectsProps) {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-white ">
        <h2 className="mb-4 text-xl text-center text-white md:text-4xl text-bold">
          Projects
        </h2>
        <div className="flex flex-col justify-center items-center flex-wrap gap-4 md:flex md:flex-row md:gap-[73px] md:mt-[50px] ">
          {portfolio.projects.slice(start, end).map((project) => (
            <Card isLinkActive={true} key={project.name} {...project} />
          ))}
        </div>
        <div className=" mt-[32px] md:m-[73px] self-center rounded-full shadow-sm w-[300px] md:w-[675px] shadow-brand bg-brand h-[5px]"></div>
      </section>
    </>
  )
}
