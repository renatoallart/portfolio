import { useIconState } from "@/hooks/useIconState"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface INavIconsProps {
  url: string
  hover: string | StaticImageData
  icon: string | StaticImageData
  width: number
  height: number
}

export function NavIcons({ url, hover, icon, width, height }: INavIconsProps) {
  const { isHoverIcon, handleHoverIcon } = useIconState()

  return (
    <Link
      onMouseOver={() => handleHoverIcon(true)}
      onMouseOut={() => handleHoverIcon(false)}
      // get the first letter of the url
      target={url[0] === "h" ? "_blank" : ""}
      href={url}
    >
      <Image
        style={{ width, height }}
        src={isHoverIcon ? hover : icon}
        width={width}
        height={height}
        alt={`${icon}`}
      />
    </Link>
  )
}
