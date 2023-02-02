import { IProjectProps } from "@/interfaces/projectInterface"

export function getProjectById(id: string, projects: IProjectProps[]) {
  return projects.find((project) => project.id === id)
}
