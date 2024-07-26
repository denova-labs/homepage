import Image from "next/image";
import Link from "next/link";

import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { constructMetadata } from "@/lib/utils";
import { ComparePlans } from "@/components/pricing/compare-plans";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { HeroParallax } from "@/components/ui/hero-parallax";
import linguifyThumbnail from '@/public/_static/projects/linguify.png'
import platefullThumbnail from '@/public/_static/projects/platefull.png'
import onecardThumbnail from '@/public/_static/projects/onecard.png'
import sthreadsThumbnail from '@/public/_static/projects/sthreads.png'
import soughtThumbnail from '@/public/_static/projects/sought.png'
import dogwatchThumbnail from '@/public/_static/projects/dogwatch.png'

export default async function ProjectsPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <HeroParallax products={[
        {
          title: "OneCard",
          link: "https://onecard.denova.ai",
          thumbnail: onecardThumbnail
        },
        {
          title: "Platefull",
          link: "https://platefull.denova.ai",
          thumbnail: platefullThumbnail
        },
        {
          title: "Linguify",
          link: "https://chromewebstore.google.com/detail/linguify/geonaepbohggoefocbfgkifmlbafapfn",
          thumbnail: linguifyThumbnail
        },
        {
          title: "DogWatch",
          link: "https://dogwatch.denova.ai",
          thumbnail: dogwatchThumbnail
        },
        {
          title: "SThreads",
          link: "https://sthreads.denova.ai",
          thumbnail: sthreadsThumbnail
        },
        {
          title: "Sought",
          link: "https://sought.denova.ai",
          thumbnail: soughtThumbnail
        },
      ]}/>
    </div>
  );
}
