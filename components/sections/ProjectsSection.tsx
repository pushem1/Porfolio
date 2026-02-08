"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "@/components/motion";
import { ExternalLink } from "lucide-react";

// Project data
const projects = [
  {
    id: 1,
    title: "Car Agency",
    description: "A luxury car showroom website showcasing premium vehicles with a modern and elegant design.",
    image: "/Images/agency.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
    demoLink: "https://car-agency-g5aj.vercel.app/",
    category: "web"
  },
  {
    id: 2,
    title: "Élégance Meuble",
    description: "A sophisticated furniture website featuring custom-made furniture and interior design services.",
    image: "/Images/meuble.png",
    tags: ["React", "Modern UI", "Responsive Design", "Custom Design"],
    demoLink: "https://elegance-meuble.vercel.app/",
    category: "web"
  },
  {
    id: 3,
    title: "HassalApp",
    description: "A modern application focused on currency exchange and financial management.",
    image: "/Images/hassa.png",
    tags: ["Next.js", "TypeScript", "API Integration", "Real-time Data"],
    demoLink: "https://changeapp.vercel.app/",
    category: "web"
  },
  {
    id: 4,
    title: "EcoTrack",
    description: "An environmental tracking platform for monitoring and managing ecological data.",
    image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Data Visualization", "Environmental Tech", "Responsive"],
    demoLink: "https://ecotrack22.netlify.app/",
    category: "web"
  },
  {
    id: 5,
    title: "ML Performance",
    description: "A comprehensive machine learning performance monitoring and optimization platform for tracking model metrics and deployment efficiency.",
    image: "/Images/mlperf.png",
    tags: ["Machine Learning", "Python", "Data Science", "Performance Monitoring", "Analytics"],
    demoLink: "https://ml-performance.com",
    category: "web"
  },
  {
    id: 6,
    title: "Sultan Library",
    description: "An ecommerce platform for Islamic books, perfumes, and gift collections with a clean shopping experience.",
    image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Ecommerce", "Next.js", "UI/UX", "Responsive"],
    demoLink: "https://sultanlibrary.com/",
    category: "web"
  }
];

export default function ProjectsSection() {

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Our Projects</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Here's a selection of projects we've worked on. Each one presented unique challenges and opportunities for growth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Card className="group h-full overflow-hidden border bg-card/60 shadow-sm transition-all hover:shadow-xl">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex gap-3">
                        <Button size="sm" variant="secondary">
                          <Link href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            View Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <div className="flex flex-wrap gap-3">
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline">Case Study</Button>
                      </DialogTrigger>
                      <Button size="sm" asChild>
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
              <DialogContent className="max-w-2xl">
                <div className="space-y-5">
                  <div className="relative h-56 w-full overflow-hidden rounded-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </div>
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>{project.description}</DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        View Live Demo
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <DialogClose asChild>
                      <Button variant="outline">Close</Button>
                    </DialogClose>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}