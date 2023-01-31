import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useState } from "react"

interface INavIconsProps {
  url: string
  hover: string | StaticImageData
  icon: string | StaticImageData
  width: number
  height: number
}

export function NavIcons({ url, hover, icon, width, height }: INavIconsProps) {
  const [hoverIcon, setHoverIcon] = useState(false)

  return (
    <Link
      onMouseOver={() => setHoverIcon(true)}
      onMouseOut={() => setHoverIcon(false)}
      // get the first letter of the url
      target={url[0] === "h" ? "_blank" : ""}
      href={url}
    >
      <Image
        style={{ width, height }}
        src={hoverIcon ? hover : icon}
        width={width}
        height={height}
        alt={`${icon}`}
      />
    </Link>
  )
}
