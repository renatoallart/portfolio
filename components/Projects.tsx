import { portfolio } from "@/portfolio"
import Image from "next/image"
import { NavIcons } from "./NavIcons"
import { v4 as uuidv4 } from "uuid"

export function Projects() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-white ">
        <h2 className="mb-4 text-xl text-center text-white md:text-4xl text-bold">
          Projects
        </h2>
        <div className="flex flex-col gap-4 md:flex md:flex-row md:gap-[73px] md:mt-[50px] ">
          {portfolio.projects.slice(0, 2).map((project) => {
            return (
              <div
                key={project.name}
                className="flex flex-col h-[370px] w-[344px] xl:w-[450px] xl:h-[400px] p-4 border-2 rounded-md border-md border-brand"
              >
                <Image
                  className="w-[296px] self-center h-[167px] xl:w-[387px] xl:h-[181px]"
                  src={project.thumbnail}
                  priority
                  width={296}
                  height={167}
                  alt={project.name}
                />
                <div className=" mt-[32px] self-center rounded-full shadow-sm w-[300px] shadow-brand bg-brand h-[5px]"></div>
                <h3 className="mt-4 text-lg font-semibold text-center text-white">
                  {project.name}
                </h3>
                <div className="flex items-center justify-center gap-16 mt-2">
                  {project.nav.map((item) => {
                    return (
                      <NavIcons
                        key={uuidv4()}
                        url={item.url}
                        width={
                          String(item.icon.src) ===
                          "/_next/static/media/web_pink.470aa13e.png"
                            ? 66
                            : 54
                        }
                        height={
                          String(item.icon.src) ===
                          "/_next/static/media/web_pink.470aa13e.png"
                            ? 66
                            : 54
                        }
                        hover={item.hoverIcon}
                        icon={item.icon}
                      />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <div className=" mt-[32px] md:m-[73px] rounded-full shadow-sm w-[300px] md:w-[675px] shadow-brand bg-brand h-[5px]"></div>
    </>
  )
}
