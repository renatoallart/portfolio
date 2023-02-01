import React from "react"
import { NavIcons } from "./NavIcons"
import { v4 as uuidv4 } from "uuid"
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/router"

interface INav {
  name: string
  url: string
  icon: StaticImageData
  hoverIcon: StaticImageData
}
interface ICardProps {
  name: string
  id: string
  thumbnail: StaticImageData
  nav: INav[]
}

export function Card({ name, id, thumbnail, nav }: ICardProps) {
  const router = useRouter()
  function handleClick(id: string) {
    console.log(id, "id clicked")
    router.push(
      `/projects/${id}`
      // {
      //   pathname: "/project/[projectId]",
      //   query: { product: id },
      // },
      // `/project/${id}?projects=${name}`,
      // { shallow: true }
    )
  }

  return (
    <div
      key={name}
      className="flex flex-col  h-[370px] w-[344px] xl:w-[344px] xl:h-[375px] p-4 border-2 rounded-md border-md border-brand"
    >
      <Image
        onClick={() => handleClick(id)}
        className="cursor-pointer w-[296px] self-center h-[167px] xl:w-[387px] xl:h-[181px]"
        src={thumbnail}
        priority
        width={296}
        height={167}
        alt={name}
      />

      <div className="mt-6 self-center rounded-full shadow-sm w-[300px] shadow-brand bg-brand h-[5px]"></div>
      <h3 className="mt-3 text-lg font-semibold text-center text-white">
        {name}
      </h3>

      <div className="flex items-center justify-center gap-16 mt-2">
        {nav.map((item) => {
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
}
