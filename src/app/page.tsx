import { HudLayout } from "@/components/items/HudLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <HudLayout>
      <HeroSection />
      <ProjectsSection />
    </HudLayout>
  );
}
