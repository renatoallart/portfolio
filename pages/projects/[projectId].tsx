import { GetStaticPropsContext, PreviewData } from "next"
import { ParsedUrlQuery } from "querystring"
import { portfolio } from "@/portfolio"
import { StaticImageData } from "next/image"
import Image from "next/image"
import { Card } from "@/components/Card"
import Link from "next/link"

interface INav {
  name: string
  url: string
  icon: StaticImageData
  hoverIcon: StaticImageData
}

interface IStack {
  name: string
  icon: string
}

interface ITechnologies {
  name: string
  link: string
}

interface IProjectProps {
  name: string
  id: string
  thumbnail: StaticImageData
  img: StaticImageData[]
  summary: string
  nav: INav[]
  stack: IStack[]
  tec: ITechnologies[]
}

export default function ProjectById({ project }: { project: IProjectProps }) {
  console.log(project.id, "id")
  return (
    <section className="flex flex-col items-center justify-center m-6 text-white">
      <Card
        id={project.id}
        name={project.name}
        thumbnail={project.thumbnail}
        nav={project.nav}
      />
      <div className=" mt-16 md:m-16 self-center rounded-full shadow-sm w-[300px] md:w-[675px] shadow-brand bg-brand h-[5px]"></div>
      <div>
        <h3 className="m-4 text-xl text-center">Stack</h3>
        <div className=" w-[358px] h-[270px] justify-center items-center flex flex-wrap gap-6">
          {project.stack.map((item) => {
            const width = item.name === "Vercel" ? 99 : 77
            const height = item.name === "Vercel" ? 33 : 77
            return (
              <Image
                style={{ width, height }}
                key={item.name}
                src={item.icon}
                alt={`${item.name}`}
              />
            )
          })}
        </div>
      </div>
      <div className="mt-6 ">
        <h3 className="m-4 text-xl text-center">Technologies</h3>
        <ul className="flex flex-wrap items-center justify-center gap-2 ">
          {project.tec.map((item) => (
            <li
              key={item.name}
              className="text-white hover:underline hover:decoration-brand"
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="m-4 text-xl font-semibold text-center">Summary</h3>
        <p className="text-center">{project.summary}</p>
      </div>
    </section>
  )
}
export async function getStaticProps(
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) {
  const { params } = context
  if (!params) return
  const { projectId } = params
  const project = portfolio.projects.find((project) => project.id === projectId)

  console.log(project)
  return {
    props: {
      project,
    }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const paths = portfolio.projects.map((project) => ({
    params: {
      projectId: project.id,
    },
  }))
  return {
    paths,
    fallback: true,
  }
}