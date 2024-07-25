import Link from "next/link";
import Image from "next/image";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import googleSVG from "@/public/_static/workedat/google.svg";
import doordashSVG from "@/public/_static/workedat/doordash.svg";
import grailSVG from "@/public/_static/workedat/grail.svg";
import genentechSVG from "@/public/_static/workedat/genentech.svg";
import nateraSVG from "@/public/_static/workedat/natera.svg";
import robloxSVG from "@/public/_static/workedat/roblox.svg";
import amobeeSVG from "@/public/_static/workedat/amobee.svg";


const logos = [
  {
    title: "Google",
    href: "https://google.com/",
    icon: (
      <Image 
        src={googleSVG}
        alt="Google"
      />
    )
  },
  {
    title: "DoorDash",
    href: "https://doordash.com/",
    icon: (
      <Image 
        src={doordashSVG}
        alt="DoorDash"
      />
    ),
  },
  {
    title: "Grail",
    href: "https://www.grail.com/",
    icon: (
      <Image 
        src={grailSVG}
        alt="Grail"
      />
    ),
  },
  {
    title: "Genentech",
    href: "https://gene.com/",
    icon: (
      <Image 
        src={genentechSVG}
        alt="Genentech"
      />
    ),
  },
  {
    title: "Natera",
    href: "https://natera.com/",
    icon: (
      <Image 
        src={nateraSVG}
        alt="Grail"
      />
    )
  },
  {
    title: "Roblox",
    href: "https://roblox.com/",
    icon: (
      <Image 
        src={robloxSVG}
        alt="Roblox"
      />
    ),
  },
  {
    title: "Amobee",
    href: "https://amobee.com/",
    icon: (
      <Image 
        src={amobeeSVG}
        alt="Amobee"
      />
    ),
  },
];

export default function WorkedAt() {
  return (
    <section className="py-14 text-muted-foreground">
      <MaxWidthWrapper>
        <h2 className="text-center text-sm font-semibold uppercase">
          Featuring members who have worked at
        </h2>

        <div className="mt-10 grid grid-cols-2 place-items-center gap-8 md:grid-cols-4">
          {logos.slice(0, 4).map((logo) => (
            <Link
              target="_blank"
              key={logo.title}
              href={logo.href}
              aria-label={logo.title}
              className="duration-250 grayscale transition hover:text-foreground hover:grayscale-0 w-24"
            >
              {logo.icon}
            </Link>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 place-items-center gap-8 md:mt-10 md:grid-cols-4">
          {logos.slice(4, 7).map((logo) => (
            <Link
              target="_blank"
              key={logo.title}
              href={logo.href}
              aria-label={logo.title}
              className="duration-250 grayscale transition hover:text-foreground hover:grayscale-0 w-24"
            >
              {logo.icon}
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
