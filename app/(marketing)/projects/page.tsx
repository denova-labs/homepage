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

export const metadata = constructMetadata({
  title: "Pricing – SaaS Starter",
  description: "Explore our subscription plans.",
});

export default async function ProjectsPage() {
  const user = await getCurrentUser();

  let subscriptionPlan;
  if (user && user.id) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id);
  }

  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <HeroParallax products={[
        {
          title: "Linguify",
          link: "https://chromewebstore.google.com/detail/linguify/geonaepbohggoefocbfgkifmlbafapfn",
          thumbnail: linguifyThumbnail
        },
        {
          title: "Platefull",
          link: "https://platefull.denova.ai",
          thumbnail: platefullThumbnail
        },
        {
          title: "OneCard",
          link: "https://onecard.denova.ai",
          thumbnail: onecardThumbnail
        },
      ]}/>
      <PricingCards userId={user?.id} subscriptionPlan={subscriptionPlan} />
      <hr className="container" />
      <ComparePlans />
      <PricingFaq />
    </div>
  );
}
