import { HudLayout } from "@/components/game-ui/HudLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection"; // Import added

export default function Home() {
  return (
    <HudLayout>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection /> {/* Component added */}
    </HudLayout>
  );
}
