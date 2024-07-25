import Image from "next/image";
import { InfoLdg } from "@/types";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

interface InfoLandingProps {
  data: InfoLdg[];
  reverse?: boolean;
}

export default function InfoLanding({
  data,
  reverse = false,
}: InfoLandingProps) {
  return (
    <>
      {data.map((infoLanding, index) => (
        <div className="py-5 sm:py-16" key={"infolanding" + index}>
          <MaxWidthWrapper className="grid gap-10 px-2.5 lg:grid-cols-2 lg:items-center lg:px-7">
            <div className={(index % 2) ? "order-1" : "order-2"}>
              <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[40px]">
                {infoLanding.title}
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                {infoLanding.description}
              </p>
              <dl className="mt-6 space-y-4 leading-7">
                {infoLanding.list.map((item, index) => {
                  const Icon = Icons[item.icon || "arrowRight"];
                  return (
                    <div className="relative pl-8" key={index}>
                      <dt className="font-semibold">
                        <Icon className="absolute left-0 top-1 size-5 stroke-purple-700" />
                        <span>{item.title}</span>
                      </dt>
                      <dd className="text-sm text-muted-foreground">
                        {item.description}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
            <div
              className={cn(
                "overflow-hidden rounded-xl border lg:-m-4",
                // "order-2",
                (index % 2) ? "order-2" : "order-1",
              )}
            >
              <div className="aspect-video">
                <Image
                  className="size-full object-cover object-center"
                  src={infoLanding.image}
                  alt={infoLanding.title}
                  width={1000}
                  height={500}
                  priority={true}
                />
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      ))}
    </>
  );
}
