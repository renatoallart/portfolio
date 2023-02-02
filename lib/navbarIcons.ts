import home from "@/public/icons/home.png"
import projects from "@/public/icons/projects.png"
import hoverHome from "@/public/hovers/home.png"
import hoverProjects from "@/public/hovers/projects.png"
import hoverLinkedin from "@/public/hovers/linkedin.png"
import linkedin_black from "@/public/icons/linkedin_black.png"
import github from "@/public/icons/github.png"
import hoverGithub from "@/public/hovers/github.png"

export const navLink = [
  { icon: home, url: "/", hoverIcon: hoverHome },
  {
    icon: linkedin_black,
    url: "https://www.linkedin.com/in/jrenato4434566",
    hoverIcon: hoverLinkedin,
  },
  { icon: projects, url: "/projects", hoverIcon: hoverProjects },
  {
    icon: github,
    url: "https://github.com/renatoallart",
    hoverIcon: hoverGithub,
  },
]
