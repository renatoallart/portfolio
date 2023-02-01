import { Projects } from "@/components/Projects"
import React from "react"

export default function index() {
  return (
    <div className="mb-24 md:mb-0 md:mt-24">
      <Projects start={0} />
    </div>
  )
}
