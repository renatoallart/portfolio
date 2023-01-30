import Link from "next/link";

import { navLink } from "@/lib/navbar";
import { v4 as uuidv4 } from "uuid";
import { NavIcons } from "../NavIcons";

export function Navbar() {
  return (
    <header
      className=" 
      fixed bottom-2 bg-brand rounded-full w-[315px] h-[75px] self-center 
      md:top-0 md:w-[1024px]  md:rounded-none
     lg:w-full lg:top-0 lg:rounded-none "
    >
      <nav>
        <ul className="flex w-[315px] h-[73px] items-center justify-center gap-5 md:w-full md:h-[75px] md:justify-evenly">
          {navLink.map((link) => (
            <li key={uuidv4()}>
              <NavIcons
                url={link.url}
                hover={link.hoverIcon}
                icon={link.icon}
                width={54}
                height={48}
              />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
