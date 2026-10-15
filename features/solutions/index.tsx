import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { SolutionsHero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { RoleNav } from "./role-nav";
import { RoleSection } from "./role-section";
import { SOLUTION_ROLES } from "./roles";
import { WorksAlongside } from "./works-alongside";

// Sections are added here one at a time as they are built, then composed in
// this file. The header and footer live in the root layout.
export function Solutions() {
  return (
    <>
      <SolutionsHero />
      {/* The sub-nav and the role sections share this parent so it can stay
          pinned to the top while you scroll through them */}
      <div id="roles">
        <RoleNav
          items={SOLUTION_ROLES.map(({ id, navLabel, accent }) => ({
            id,
            label: navLabel,
            accent,
          }))}
        />
        {SOLUTION_ROLES.map((role, index) => (
          <RoleSection key={role.id} role={role} index={index} />
        ))}
      </div>
      <HowItWorks />
      <WorksAlongside />
      <FaqSection />
      <CtaSection />
    </>
  );
}
