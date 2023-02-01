import { pokedexImg } from "./lib/imports/img"
import { ecommerceImg } from "./lib/imports/img"

// Icons Import
import pinkGithub from "/public/icons/github_pink.png"
import hoverGithub from "/public/hovers/github.png"
import pinkLinkedin from "/public/icons/linkedin.png"
import hoverLinkedin from "/public/hovers/linkedin.png"
import pinkWeb from "/public/icons/web_pink.png"
import hoverWeb from "/public/hovers/web.png"

// Thumbs
import pokedexThumbnail from "/public/img/pokedex_home.png"
import ecommerceThumb from "/public/img/ecommerce_home.png"

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
      thumbnail: pokedexThumbnail,
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
      img: pokedexImg,
      summary:
        "A responsive application in Vitejs, where the User can search a Pokemon by name, and generate a random list with 3 Pokemons. Clicked on Pokemon can see all Pokemon's stats displayed in the chart.",
      stack: [
        { name: "Vitejs", icon: "/../public/icons/vite.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Javascript", icon: "/../public/icons/javascript.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
      ],

      technologies: [
        { name: "Vitejs", link: "https://vitejs.dev/" },
        { name: "Reactjs", link: "https://reactjs.org/" },
        { name: "Tailwindcss", link: "https://tailwindcss.com/" },
        { name: "Axios", link: "https://axios-http.com/" },
        { name: "ApexChart", link: "https://apexcharts.com/" },
      ],
    },
    {
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
      name: "E-commerce",
      summary:
        "A responsive application in Nextjs, where the user can login with Facebook, Google Account, Github. Add products to a shopping cart. ",
      thumbnail: ecommerceThumb,
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
      img: ecommerceImg,
      stack: [
        { name: "Nextjs", icon: "/../public/icons/next-js.png" },
        { name: "Typescript", icon: "/../public/icons/typescript.png" },
        { name: "React", icon: "/../public/icons/React.png" },
        { name: "Html", icon: "/../public/icons/html.png" },
        { name: "Css", icon: "/../public/icons/css.png" },
        { name: "Tailwind", icon: "/../public/icons/tailwind.png" },
        { name: "Vercel", icon: "/../public/icons/vercel.png" },
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
  ],
}
