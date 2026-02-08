"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion";
import { useScroll, useTransform } from "framer-motion";
import { ArrowDownCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import NeuralBackground from "@/components/ui/flow-field-background";
import { Web3MediaHero } from "@/components/ui/web3media-hero";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const orbOneY = useTransform(scrollY, [0, 600], [0, -60]);
  const orbTwoY = useTransform(scrollY, [0, 600], [0, -40]);
  const orbThreeY = useTransform(scrollY, [0, 600], [0, -20]);
  const heroCardY = useTransform(scrollY, [0, 600], [0, -24]);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const customBackground = (
    <>
      <div className="absolute inset-0">
        <NeuralBackground
          className="opacity-40"
          color="#8B5CF6"
          trailOpacity={0.12}
          particleCount={400}
          speed={0.7}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background/90" />
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl float-slow"
          style={{ y: orbOneY }}
        />
        <motion.div
          className="absolute top-1/3 -left-16 h-60 w-60 rounded-full bg-secondary/20 blur-3xl float-medium"
          style={{ y: orbTwoY }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-accent/20 blur-3xl float-fast"
          style={{ y: orbThreeY }}
        />
      </div>
    </>
  );

  return (
    <Web3MediaHero
      id="home"
      showHeader={false}
      customBackground={customBackground}
      title="Hello, We're"
      highlightedText="ARTISTS"
      subtitle="We approach development as an art form, crafting digital experiences that blend technical excellence with creative vision to solve real-world problems beautifully."
      trustedByText="Trusted by"
      brands={[
        {
          name: "SultanLibrary",
          logo: (
            <span className="text-sm font-semibold text-muted-foreground/80">
              SultanLibrary
            </span>
          ),
        },
        {
          name: "ML Performance",
          logo: (
            <span className="text-sm font-semibold text-muted-foreground/80">
              ML Performance
            </span>
          ),
        },
        {
          name: "EcoTrack",
          logo: (
            <span className="text-sm font-semibold text-muted-foreground/80">
              EcoTrack
            </span>
          ),
        },
        {
          name: "HassalApp",
          logo: (
            <span className="text-sm font-semibold text-muted-foreground/80">
              HassalApp
            </span>
          ),
        },
      ]}
      className="pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <span className="block">Hello, We're</span>
              <span className="block mt-2 text-primary line-through opacity-50">
                Developers
              </span>
              <span className="block mt-2 text-primary text-5xl md:text-6xl lg:text-7xl">
                ARTISTS
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="mt-6 text-xl md:text-2xl font-medium text-muted-foreground"
            >
              in Code & Design
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg max-w-xl text-muted-foreground"
            >
              We approach development as an art form, crafting digital
              experiences that blend technical excellence with creative vision to
              solve real-world problems beautifully.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="group" asChild>
                <Link href="#projects">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>

          
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <Link href="#about">
          <Button variant="ghost" size="icon" aria-label="Scroll Down">
            <ArrowDownCircle className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </Web3MediaHero>
  );
}
