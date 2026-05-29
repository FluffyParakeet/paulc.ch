"use client"

import { useRef } from "react"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { cn } from "@/lib/utils"

function Node({ ref, src, alt, size = "sm" }: { ref: React.RefObject<HTMLDivElement | null>; src: string; alt: string; size?: "sm" | "lg" }) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-full border border-border bg-background shadow flex items-center justify-center shrink-0 overflow-hidden",
        size === "lg" ? "size-12 p-1.5" : "size-8 p-1"
      )}
    >
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  )
}

export default function MindflowBeam() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mindflowRef = useRef<HTMLDivElement>(null)

  const splunkRef = useRef<HTMLDivElement>(null)
  const crowdstrikeRef = useRef<HTMLDivElement>(null)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const openctiRef = useRef<HTMLDivElement>(null)
  const datadogRef = useRef<HTMLDivElement>(null)

  const awsRef = useRef<HTMLDivElement>(null)
  const slackRef = useRef<HTMLDivElement>(null)
  const jiraRef = useRef<HTMLDivElement>(null)

  const beamProps = {
    gradientStartColor: "#00d4ff",
    gradientStopColor: "#8b5cf6",
    pathColor: "#334155",
    pathWidth: 1.5,
    duration: 4,
  }

  return (
    <div ref={containerRef} className="relative flex items-center justify-between w-full h-44 mt-3">
      {/* Left: inputs */}
      <div className="flex flex-col gap-2 z-10">
        <Node ref={splunkRef} src="/splunk.svg" alt="Splunk" />
        <Node ref={crowdstrikeRef} src="/crowdstrike.svg" alt="CrowdStrike" />
        <Node ref={sentinelRef} src="/sentinelone.svg" alt="SentinelOne" />
        <Node ref={openctiRef} src="/opencti.svg" alt="OpenCTI" />
        <Node ref={datadogRef} src="/datadog.svg" alt="Datadog" />
      </div>

      {/* Center: Mindflow */}
      <div className="z-10">
        <Node ref={mindflowRef} src="/mindflow.svg" alt="Mindflow" size="lg" />
      </div>

      {/* Right: outputs */}
      <div className="flex flex-col gap-4 z-10">
        <Node ref={awsRef} src="/aws.svg" alt="AWS" />
        <Node ref={slackRef} src="/slack.svg" alt="Slack" />
        <Node ref={jiraRef} src="/jira.svg" alt="Jira" />
      </div>

      {/* Beams: inputs → Mindflow */}
      <AnimatedBeam containerRef={containerRef} fromRef={splunkRef} toRef={mindflowRef} {...beamProps} delay={0} />
      <AnimatedBeam containerRef={containerRef} fromRef={crowdstrikeRef} toRef={mindflowRef} {...beamProps} delay={0.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={sentinelRef} toRef={mindflowRef} {...beamProps} delay={1} />
      <AnimatedBeam containerRef={containerRef} fromRef={openctiRef} toRef={mindflowRef} {...beamProps} delay={1.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={datadogRef} toRef={mindflowRef} {...beamProps} delay={2} />

      {/* Beams: Mindflow → outputs */}
      <AnimatedBeam containerRef={containerRef} fromRef={mindflowRef} toRef={awsRef} {...beamProps} delay={0} />
      <AnimatedBeam containerRef={containerRef} fromRef={mindflowRef} toRef={slackRef} {...beamProps} delay={0.8} />
      <AnimatedBeam containerRef={containerRef} fromRef={mindflowRef} toRef={jiraRef} {...beamProps} delay={1.6} />
    </div>
  )
}
