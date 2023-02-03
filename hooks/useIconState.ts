import { useState } from "react"

export function useIconState() {
  const [isHoverIcon, setIsHoverIcon] = useState(false)
  function handleHoverIcon(hover: boolean) {
    setIsHoverIcon(hover)
  }

  return { isHoverIcon, handleHoverIcon }
}
