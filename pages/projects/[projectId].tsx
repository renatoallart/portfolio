import Image from "next/image"
import Link from "next/link"
import { GetStaticPropsContext, PreviewData } from "next"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"
import { portfolio } from "@/portfolio"
import { Card } from "@/components/Card"

import { IProjectProps } from "@/interfaces/projectInterface"
import { getProjectById } from "@/lib/getProjectById"

export default function ProjectById({ project }: { project: IProjectProps }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <section className="flex flex-col items-center justify-center m-6 mb-24 text-white md:mt-8">
      <div className="flex flex-col items-center justify-center md:flex md:flex-row md:items-center md:justify-center md:gap-10 md:m-4 xl:gap-36">
        <Card
          id={project.id}
          name={project.name}
          thumbnail={project.thumbnail}
          nav={project.nav}
        />
        <div className=" m-4 md:hidden self-center rounded-full shadow-sm w-[300px] md:w-[675px] shadow-brand bg-brand h-[5px]"></div>
        <div>
          <div className="flex flex-col items-center justify-center md:gap-8">
            <h3 className="m-2 text-xl font-semibold text-center md:text-2xl">
              Stack
            </h3>
            <ul className=" w-[358px] h-[270px] justify-center items-center flex flex-wrap gap-2">
              {project.stack.map((item) => {
                const width = item.name === "Vercel" ? 77 : 54
                const height = item.name === "Vercel" ? 33 : 54
                return (
                  <li key={item.name}>
                    <Image
                      style={{ width, height }}
                      src={item.icon}
                      alt={`${item.name}`}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className=" m-4 md:hidden self-center rounded-full shadow-sm w-[300px] md:w-[675px] shadow-brand bg-brand h-[5px]"></div>
      <div>
        <h3 className="m-6 text-xl font-semibold text-center">Technologies</h3>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-2 ">
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
      <div className="m-4  self-center rounded-full shadow-sm w-[300px] md:w-[675px] shadow-brand bg-brand h-[5px]"></div>
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
  const project = getProjectById(String(projectId), portfolio.projects)

  if (!project?.id) return { notFound: true }
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
  console.log(paths)
  return {
    paths,
    fallback: true,
  }
}
