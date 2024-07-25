import Link from "next/link";

import { env } from "@/env.mjs";
import { siteConfig } from "@/config/site";
import { cn, nFormatter } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";
import LampDemo from "../ui/lamp";
import { IconsDish } from "../ui/iconsdish";

export default async function HeroLanding() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/denova-labs/homepage",
    {
      ...(env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every hour
      next: { revalidate: 3600 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex flex-col items-center text-center">
        {/* tag label announcement */}
        {/* <Link
          href="https://twitter.com/miickasmt/status/1810465801649938857"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm", rounded: "full" }),
            "px-4",
          )}
          target="_blank"
        >
          <span className="mr-3">🎉</span>
          <span className="hidden md:flex">Introducing&nbsp;</span> Next Auth
          Roles Template on <Icons.twitter className="ml-2 size-3.5" />
        </Link> */}
        <LampDemo/>

        <p
          className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl z-50"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Multi-domain projects ready to tackle current and future challenges.
        </p>

        <div
          className="flex justify-center space-x-2 md:space-x-4 mt-8 z-50"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/pricing"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "gap-2",
            )}
          >
            <span>Check them out</span>
            <Icons.arrowRight className="size-4" />
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "lg",
                rounded: "full",
              }),
              "px-5",
            )}
          >
            <Icons.gitHub className="mr-2 size-4" />
            <p>
              <span className="hidden sm:inline-block"></span> GitHub{" "}
              {/* <span className="font-semibold">{nFormatter(stars)}</span> */}
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
