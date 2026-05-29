"use client";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

type Recommendation = (typeof DATA.recommendations)[number];

function RecommendationCard({ rec }: { rec: Recommendation }) {
  return (
    <div className="shrink-0 w-72 rounded-xl border border-border bg-card p-4 flex flex-col gap-3 shadow-sm">
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">
        &ldquo;{rec.body}&rdquo;
      </p>
      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border">
        {rec.avatar ? (
          <img src={rec.avatar} alt={rec.name} className="size-8 rounded-full object-cover border border-border shrink-0" />
        ) : (
          <div className="size-8 rounded-full bg-primary/10 border border-border flex items-center justify-center text-xs font-semibold text-primary shrink-0">
            {rec.name.split(" ").map((n) => n[0]).join("")}
          </div>
        )}
        <div className="min-w-0">
          <p className="text-xs font-semibold truncate">{rec.name}</p>
          <p className="text-xs text-muted-foreground truncate">{rec.title} · {rec.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function RecommendationsSection() {
  const items = [...DATA.recommendations, ...DATA.recommendations];

  return (
    <div
      className={cn(
        "overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      )}
    >
      <div className="flex w-max gap-4 animate-skills-marquee-left">
        {items.map((rec, i) => (
          <RecommendationCard key={i} rec={rec} />
        ))}
      </div>
    </div>
  );
}
