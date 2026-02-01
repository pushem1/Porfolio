"use client";

import React from "react";
import NeuralBackground from "@/components/ui/flow-field-background";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NeuralHeroDemo() {
  return (
    <div className="relative w-full h-screen">
      <NeuralBackground
        color="#818cf8"
        trailOpacity={0.1}
        speed={0.8}
        particleCount={600}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4">
        <div className="flex items-center gap-2 text-white/90">
          <Sparkles className="h-6 w-6 text-indigo-300" />
          <span className="text-lg font-medium">Neural Background Demo</span>
        </div>
        <p className="text-white/70 text-center max-w-md">
          Move your cursor to interact with the flow field. Particles react to
          mouse movement.
        </p>
        <Button asChild variant="secondary" className="gap-2">
          <Link href="/">
            Back to Portfolio
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
