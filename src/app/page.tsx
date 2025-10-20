import Link from "next/link";
import { AuroraText } from "@/components/ui/aurora-text";
import { GridBeams } from "@/components/ui/grid-beams";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Particles } from "@/components/ui/particles";
import { Navbar } from "../../shared/components";
import { ProblemStatement } from "@/components/landing/problem-statement";
import { SolutionOverview } from "@/components/landing/solution-overview";
import { KeyFeatures } from "@/components/landing/key-features";
import { UseCases } from "@/components/landing/use-cases";
import { TechTrust } from "@/components/landing/tech-trust";
import { Pricing } from "@/components/landing/pricing";
import { CommunitySocialProof } from "@/components/landing/community-social-proof";
import { CTASections } from "@/components/landing/cta-sections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <GridBeams
        gridSize={0}
        gridColor="rgba(255, 255, 255, 0.2)"
        rayCount={20}
        rayOpacity={0.55}
        raySpeed={1.5}
        rayLength="40vh"
        gridFadeStart={5}
        gridFadeEnd={90}
        className="h-screen w-full"
      >
        <Navbar />

        {/* Hero Section */}
        <section className="flex justify-center items-center h-screen pt-20 relative">
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color="#ffffff"
            refresh
          />
          <div className="w-1/2 text-center mx-auto flex flex-col justify-center items-center gap-5 z-10">
            <div className="mb-4">
              <AnimatedShinyText className="text-lg text-muted-foreground">
                ✨ Democratizing AI Context Engineering
              </AnimatedShinyText>
            </div>
            <h1 className="text-7xl font-extrabold">
              AI That Thinks Like <SparklesText text="Your Team" />
            </h1>
            <p className="text-2xl w-2/3 animate-fade-up opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
              Connect with specialized AI roles, collaborate with professional
              assistants, and discover community-created expertise. RoleHub
              democratizes AI context engineering for everyone.
            </p>
            <div className="animate-fade-up opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
              <Link href="/login">
                <InteractiveHoverButton>Start Building</InteractiveHoverButton>
              </Link>
            </div>
          </div>
        </section>
      </GridBeams>

      {/* Landing Page Sections */}
      <ProblemStatement />
      <SolutionOverview />
      <KeyFeatures />
      <UseCases />
      <TechTrust />
      <CommunitySocialProof />
      <Pricing />
      <CTASections />
    </div>
  );
}
