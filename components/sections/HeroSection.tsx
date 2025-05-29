"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/motion";
import { ArrowDownCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Hello, I'm</span>
              <span className="block mt-2 text-primary">John Doe</span>
            </h1>
            
            <h2 className="mt-6 text-xl md:text-2xl font-medium text-muted-foreground">
              Full-Stack Developer & UX Designer
            </h2>
            
            <p className="mt-4 text-lg max-w-xl text-muted-foreground">
              I craft beautiful, functional digital experiences that solve real-world problems and delight users.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] w-full hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-[2px] flex items-center justify-center">
                <div className="w-3/4 aspect-square rounded-full bg-gradient-to-tr from-primary/40 to-secondary/40 absolute blur-3xl"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {/* Hero image can be placed here */}
                  <div className="w-full h-full bg-[url('https://images.pexels.com/photos/4064835/pexels-photo-4064835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center rounded-2xl"></div>
                </div>
              </div>
            </div>
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