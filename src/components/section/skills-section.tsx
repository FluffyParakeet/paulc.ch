import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

type Skill = (typeof DATA.skills)[number];

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2 shrink-0">
      {Icon && (
        <Icon className="size-4 rounded overflow-hidden object-contain" />
      )}
      <span className="text-foreground text-sm font-medium">{skill.name}</span>
    </div>
  );
}

function MarqueeRow({
  skills,
  direction,
}: {
  skills: readonly Skill[];
  direction: "left" | "right";
}) {
  const items = [...skills, ...skills];

  return (
    <div
      className={cn(
        "overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      )}
    >
      <div
        className={cn(
          "flex w-max gap-2",
          direction === "left"
            ? "animate-skills-marquee-left"
            : "animate-skills-marquee-right"
        )}
      >
        {items.map((skill, index) => (
          <SkillChip key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const midpoint = Math.ceil(DATA.skills.length / 2);
  const firstRow = DATA.skills.slice(0, midpoint);
  const secondRow = DATA.skills.slice(midpoint);

  return (
    <div className="flex flex-col gap-3">
      <MarqueeRow skills={firstRow} direction="left" />
      <MarqueeRow skills={secondRow} direction="right" />
    </div>
  );
}
