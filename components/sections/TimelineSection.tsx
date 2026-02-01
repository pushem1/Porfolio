"use client";

import {
  Lightbulb,
  Calendar,
  PenTool,
  Code,
  TestTube,
  Rocket,
} from "lucide-react";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/ui/radial-orbital-timeline";
import NeuralBackground from "@/components/ui/flow-field-background";
import { motion } from "@/components/motion";

const defaultTimelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Discovery",
    date: "Phase 1",
    content:
      "We dig into your goals, audience, and constraints. Understanding the problem deeply is how we craft solutions that truly fit.",
    category: "Discovery",
    icon: Lightbulb,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Strategy & Planning",
    date: "Phase 2",
    content:
      "Scope, roadmap, and milestones. We align on what we're building and when, so nothing gets lost in translation.",
    category: "Strategy",
    icon: Calendar,
    relatedIds: [1, 3],
    status: "completed",
    energy: 95,
  },
  {
    id: 3,
    title: "Design",
    date: "Phase 3",
    content:
      "UI/UX, wireframes, and visual design. We shape the experience and the look so it's intuitive, accessible, and on-brand.",
    category: "Design",
    icon: PenTool,
    relatedIds: [2, 4],
    status: "completed",
    energy: 90,
  },
  {
    id: 4,
    title: "Development",
    date: "Phase 4",
    content:
      "We build with modern stacks—React, Next.js, Node—focusing on performance, maintainability, and clean code.",
    category: "Development",
    icon: Code,
    relatedIds: [3, 5],
    status: "in-progress",
    energy: 85,
  },
  {
    id: 5,
    title: "Testing & QA",
    date: "Phase 5",
    content:
      "Quality, accessibility, and cross-browser checks. We make sure everything works beautifully before it goes live.",
    category: "QA",
    icon: TestTube,
    relatedIds: [4, 6],
    status: "pending",
    energy: 70,
  },
  {
    id: 6,
    title: "Launch & Iterate",
    date: "Phase 6",
    content:
      "Deploy, monitor, and improve. We don't stop at launch—we help you iterate based on real usage and feedback.",
    category: "Launch",
    icon: Rocket,
    relatedIds: [5],
    status: "pending",
    energy: 80,
  },
];

interface TimelineSectionProps {
  timelineData?: TimelineItem[];
}

export default function TimelineSection({
  timelineData = defaultTimelineData,
}: TimelineSectionProps) {
  return (
    <section id="process" className="relative scroll-mt-24 min-h-screen flex flex-col">
      {/* Same background stack as Hero: neural flow + radial gradient */}
      <div className="absolute inset-0 -z-20">
        <NeuralBackground
          className="opacity-40"
          color="#8B5CF6"
          trailOpacity={0.12}
          particleCount={400}
          speed={0.7}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background/90" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center pt-16 pb-4 shrink-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Our Process
        </h2>
        <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full" />
      </motion.div>
      <div className="flex-1 min-h-0">
        <RadialOrbitalTimeline
          timelineData={timelineData}
          className="bg-transparent"
        />
      </div>
    </section>
  );
}
