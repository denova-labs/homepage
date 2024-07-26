import { WavyBackground } from "@/components/ui/wavy-background";

export default async function AboutUsPage() {

  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          About Us
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Welcome to DeNovA Labs, where innovation is our DNA. 
          Founded in San Diego and now thriving in the dynamic tech hub of San Francisco, 
          DeNovA Labs is a startup dedicated to pioneering groundbreaking ideas with the precision 
          and creativity of a laboratory. Our mission is to cultivate a fertile environment for novel concepts, 
          driven by a collaborative spirit and a diverse team of talented minds from across the nation.
          At DeNovA Labs, we're more than just a startup—we're a catalyst for transformative innovation.
          Join us as we redefine the boundaries of possibility and lead the charge into a future filled with limitless potential.
        </p>
      </WavyBackground>
    </div>
  );
}
