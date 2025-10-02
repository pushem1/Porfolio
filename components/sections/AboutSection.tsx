"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Layers, 
  PenTool, 
  Database, 
  Download 
} from "lucide-react";
import { motion } from "@/components/motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Passionate developers with an eye for design
            </h3>

            <p className="text-muted-foreground">
              With combined experience in web and mobile development, we've had the pleasure of working with businesses ranging from startups to Fortune 500 companies. Our passion lies in creating intuitive, accessible, and performant digital experiences that solve real problems.
            </p>

            <p className="text-muted-foreground">
              We specialize in modern JavaScript frameworks like React, Next.js, and Node.js, with a strong foundation in UI/UX design principles. Our approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.
            </p>

            <p className="text-muted-foreground">
              When we're not coding, you'll find us exploring new technologies, contributing to open-source projects, or mentoring aspiring developers. We believe in continuous learning and staying at the forefront of industry trends.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#projects">
                  <Download className="mr-2 h-4 w-4" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Code className="h-10 w-10" />,
                title: "Web Development",
                description: "Building responsive and performant web applications with modern frameworks",
                delay: 0.1
              },
              {
                icon: <PenTool className="h-10 w-10" />,
                title: "UI/UX Design",
                description: "Creating intuitive user experiences with attention to detail",
                delay: 0.2
              },
              {
                icon: <Layers className="h-10 w-10" />,
                title: "Full Stack",
                description: "End-to-end development from frontend to backend systems",
                delay: 0.3
              },
              {
                icon: <Database className="h-10 w-10" />,
                title: "Database Design",
                description: "Optimizing data structures for performance and scalability",
                delay: 0.4
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <Card className="h-full hover:shadow-md transition-shadow bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}