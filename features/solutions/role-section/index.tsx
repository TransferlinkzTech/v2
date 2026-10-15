import { Reveal } from "@/components/reveal";
import type { SolutionRole } from "../roles";
import { RoleCard } from "./role-card";
import { RoleVisual } from "./role-visual";

type RoleSectionProps = {
  role: SolutionRole;
  // Position in the list: odd sections are grey and put the visual on the left
  index: number;
};

export function RoleSection({ role, index }: RoleSectionProps) {
  const alternate = index % 2 === 1;

  return (
    <section
      id={role.id}
      aria-labelledby={`${role.id}-heading`}
      className={`scroll-mt-16 overflow-hidden ${alternate ? "bg-[#f4f6fa]" : "bg-white"}`}
    >
      <div
        className={`mx-auto max-w-[1240px] border-x px-[29px] py-16 min-[1180px]:py-[100px] ${
          alternate ? "border-[#e2e6f1]" : "border-line-light"
        }`}
      >
        <div className="grid items-center gap-10 min-[1180px]:grid-cols-2 min-[1180px]:gap-x-[70px]">
          <Reveal
            className={`text-navy ${alternate ? "min-[1180px]:order-2" : ""}`}
          >
            <p className="flex items-center gap-2 text-xs leading-5 font-light uppercase">
              <span
                aria-hidden="true"
                className="size-2 rounded-full"
                style={{ backgroundColor: role.accent }}
              />
              {role.eyebrow}
            </p>
            <h2
              id={`${role.id}-heading`}
              className="mt-3.5 text-[28px] leading-10 font-semibold lg:text-[40px] lg:leading-[48px]"
            >
              {role.heading}
            </h2>
            <p className="mt-4 max-w-[520px] text-sm leading-6 font-light">
              {role.paragraph}
            </p>
          </Reveal>

          <RoleVisual
            visual={role.visual}
            tint={role.tint}
            className={alternate ? "min-[1180px]:order-1" : ""}
          />
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3 min-[1180px]:mt-[72px]">
          {role.cards.map((card, cardIndex) => (
            <RoleCard
              key={card.title}
              card={card}
              accent={role.accent}
              tint={role.tint}
              onGrey={alternate}
              delay={cardIndex * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
