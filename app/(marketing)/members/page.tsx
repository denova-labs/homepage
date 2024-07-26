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
import Globe2 from './globe2';
import MemberList from "./memberlist";

export default async function MembersPage() {
  return (
    <div className="py-32 md:py-32">
      <MemberList/>
      <Globe2 />
    </div>
  );
}
