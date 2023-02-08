// Icons Import
import pinkGithub from "/public/icons/github_pink.png"
import hoverGithub from "/public/hovers/github.png"
import pinkLinkedin from "/public/icons/linkedin.png"
import hoverLinkedin from "/public/hovers/linkedin.png"
import pinkWeb from "/public/icons/web_pink.png"
import hoverWeb from "/public/hovers/web.png"

// Stack Icons

import Vitejs from "/public/icons/vite.png"
import React from "/public/icons/react.png"
import Html from "/public/icons/html.png"
import Javascript from "/public/icons/javascript.png"
import Css from "/public/icons/css.png"
import Tailwind from "/public/icons/tailwind.png"
import Vercel from "/public/icons/vercel.png"
import Nextjs from "/public/icons/nextjs.png"
import TypeScript from "/public/icons/typescript.png"

// Thumbs
import pokedexThumbnail from "/public/img/pokedex_home.png"
import ecommerceThumb from "/public/img/ecommerce_home.png"
import tradingking from "/public/img/tradingking.png"
import meals from "/public/img/meals.png"

// avatar
import avatar from "/public/img/profileImg.jpg"

export const portfolio = {
  author: "José Renato Santana Santos",
  avatar,
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/renatoallart",
      icon: pinkGithub,
      hover: hoverGithub,
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/jrenato4434566",
      icon: pinkLinkedin,
      hover: hoverLinkedin,
    },
  ],
  projects: [
    {
      name: "Pokedex",
      id: "1",
      thumbnail: pokedexThumbnail,
      summary:
        "A responsive application in Vitejs, where the User can search a Pokemon by name, and generate a random list with 3 Pokemons. Clicked on Pokemon can see all Pokemon's stats displayed in the chart.",
      nav: [
        {
          name: "GitHub",
          url: "https://github.com/renatoallart/pokedex",
          icon: pinkGithub,
          hoverIcon: hoverGithub,
        },
        {
          name: "Live Demo",
          url: "https://pokedex-renatoallart.vercel.app/",
          icon: pinkWeb,
          hoverIcon: hoverWeb,
        },
      ],
      stack: [
        { name: "Vitejs", icon: Vitejs },
        { name: "React", icon: React },
        { name: "Html", icon: Html },
        { name: "Javascript", icon: Javascript },
        { name: "Css", icon: Css },
        { name: "Tailwind", icon: Tailwind },
        { name: "Vercel", icon: Vercel },
      ],
      tec: [
        { name: "Vitejs", link: "https://vitejs.dev/" },
        { name: "Reactjs", link: "https://reactjs.org/" },
        { name: "Tailwindcss", link: "https://tailwindcss.com/" },
        { name: "Axios", link: "https://axios-http.com/" },
        { name: "ApexChart", link: "https://apexcharts.com/" },
      ],
    },
    {
      name: "E-commerce",
      id: "2",
      thumbnail: ecommerceThumb,
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",

      nav: [
        {
          name: "GitHub",
          url: "https://github.com/renatoallart/ecommerce",
          icon: pinkGithub,
          hoverIcon: hoverGithub,
        },
        {
          name: "Live Demo",
          url: "https://ecommerce-renatoallart.vercel.app/",
          icon: pinkWeb,
          hoverIcon: hoverWeb,
        },
      ],
      stack: [
        { name: "Nextjs", icon: Nextjs },
        { name: "Typescript", icon: TypeScript },
        { name: "React", icon: React },
        { name: "Html", icon: Html },
        { name: "Css", icon: Css },
        { name: "Tailwind", icon: Tailwind },
        { name: "Vercel", icon: Vercel },
      ],
      tec: [
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Reactjs", link: "https://reactjs.org/" },
        { name: "React Query", link: "https://tanstack.com/query/latest" },
        { name: "Tailwindcss", link: "https://tailwindcss.com/" },
        { name: "Axios", link: "https://axios-http.com/" },
        { name: "Zustand", link: "https://zustand-demo.pmnd.rs/" },
        { name: "Mantine", link: "https://mantine.dev/" },
        { name: "Typescript", link: "https://www.typescriptlang.org/" },
        { name: "ApexChart", link: "https://apexcharts.com/" },
      ],
    },
    {
      name: "Trading King",
      id: "3",
      thumbnail: tradingking,
      summary:
        "An application in Vitejs using Javascript to create a stock monitoring platform.",
      nav: [
        {
          name: "GitHub",
          url: "https://github.com/renatoallart/tradingKing",
          icon: pinkGithub,
          hoverIcon: hoverGithub,
        },
        {
          name: "Live Demo",
          url: "https://trading-king-renatoallart.vercel.app/",
          icon: pinkWeb,
          hoverIcon: hoverWeb,
        },
      ],
      stack: [
        { name: "React", icon: React },
        { name: "Vitejs", icon: Vitejs },
        { name: "Html", icon: Html },
        { name: "Css", icon: Css },
        { name: "Vercel", icon: Vercel },
        { name: "Javascript", icon: Javascript },
      ],
      tec: [
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Reactjs", link: "https://reactjs.org/" },
        { name: "Axios", link: "https://axios-http.com/" },
        { name: "ApexChart", link: "https://apexcharts.com/" },
      ],
    },
    {
      name: "Meals Application",
      id: "4",
      thumbnail: meals,
      summary:
        "An application in Vitejs using Javascript to learn how to cooking a few recipes.",
      nav: [
        {
          name: "GitHub",
          url: "https://github.com/renatoallart/mealsApplication",
          icon: pinkGithub,
          hoverIcon: hoverGithub,
        },
        {
          name: "Live Demo",
          url: "https://meals-application-renatoallart.vercel.app/",
          icon: pinkWeb,
          hoverIcon: hoverWeb,
        },
      ],
      stack: [
        { name: "React", icon: React },
        { name: "Vitejs", icon: Vitejs },
        { name: "Html", icon: Html },
        { name: "Css", icon: Css },
        { name: "Vercel", icon: Vercel },
        { name: "Javascript", icon: Javascript },
      ],
      tec: [
        { name: "Nextjs", link: "https://nextjs.org/" },
        { name: "Reactjs", link: "https://reactjs.org/" },
        { name: "Axios", link: "https://axios-http.com/" },
      ],
    },
  ],
}
