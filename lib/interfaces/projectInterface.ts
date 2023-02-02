import { StaticImageData } from "next/image"

interface INav {
  name: string
  url: string
  icon: StaticImageData
  hoverIcon: StaticImageData
}

interface IStack {
  name: string
  icon: StaticImageData
}

interface ITechnologies {
  name: string
  link: string
}

export interface IProjectProps {
  name: string
  id: string
  thumbnail: StaticImageData
  img: StaticImageData[]
  summary: string
  nav: INav[]
  stack: IStack[]
  tec: ITechnologies[]
}
