"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion";
import { ArrowDownCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl float-slow" />
        <div className="absolute top-1/3 -left-16 h-60 w-60 rounded-full bg-secondary/20 blur-3xl float-medium" />
        <div className="absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-accent/20 blur-3xl float-fast" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Hello, We're</span>
              <span className="block mt-2 text-primary line-through opacity-50">Developers</span>
              <span className="block mt-2 text-primary text-5xl md:text-6xl lg:text-7xl">ARTISTS</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="mt-6 text-xl md:text-2xl font-medium text-muted-foreground">
              Artists in Code & Design
            </motion.h2>

            <motion.p variants={itemVariants} className="mt-4 text-lg max-w-xl text-muted-foreground">
              We approach development as an art form, crafting digital experiences that blend technical excellence with creative vision to solve real-world problems beautifully.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="#projects">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button variant="outline" size="lg">
                <Link href="#contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] w-full hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 backdrop-blur-[2px] flex items-center justify-center">
                <div className="w-3/4 aspect-square rounded-full bg-gradient-to-tr from-primary/40 to-secondary/40 absolute blur-3xl animate-pulse"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary/60 to-secondary/60 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Code & Creativity</h3>
                    <p className="text-sm text-white/80">Development as art</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about">
          <Button variant="ghost" size="icon" aria-label="Scroll Down">
            <ArrowDownCircle className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
}