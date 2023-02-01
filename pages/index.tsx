import { Contact } from "@/components/Contact"
import { Profile } from "@/components/Profile"
import { Projects } from "@/components/Projects"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Renato’s Portfolio</title>
        <meta name="description" content="A personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Profile />
      <Projects start={0} end={2} />
      <Contact />
    </>
  )
}
