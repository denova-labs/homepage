import { infos } from "@/config/landing";
import BentoGrid from "@/components/sections/bentogrid";
import Features from "@/components/sections/features";
import HeroLanding from "@/components/sections/hero-landing";
import InfoLanding from "@/components/sections/info-landing";
import Powered from "@/components/sections/powered";
import WorkedAt from "@/components/sections/workedat";
import PreviewLanding from "@/components/sections/preview-landing";
import Testimonials from "@/components/sections/testimonials";

export default function IndexPage() {
  return (
    <>
      <HeroLanding />
      <InfoLanding data={infos} reverse={true} />
      <WorkedAt />
      <BentoGrid />
      <Powered />
      {/* <InfoLanding data={infos[1]} /> */}
      {/* <Features /> */}
      {/* <Testimonials /> */}
    </>
  );
}
