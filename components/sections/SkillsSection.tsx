"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "@/components/motion";

// Skill categories
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML / CSS", level: 98 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 85 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "GraphQL", level: 82 },
      { name: "REST API Design", level: 90 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Others",
    skills: [
      { name: "Git / GitHub", level: 94 },
      { name: "Docker", level: 78 },
      { name: "AWS / Vercel", level: 85 },
      { name: "Jest / Testing", level: 82 },
      { name: "CI/CD", level: 80 },
      { name: "Agile / Scrum", level: 90 },
    ],
  },
  {
    id: "design",
    title: "Design",
    skills: [
      { name: "Figma", level: 88 },
      { name: "UI/UX Design", level: 85 },
      { name: "Wireframing", level: 90 },
      { name: "Design Systems", level: 86 },
      { name: "Adobe XD", level: 80 },
      { name: "Accessibility", level: 87 },
    ],
  },
];

// Tech stack icons (These would be imported from their respective libraries in a real project)
const techStack = [
  { name: "React", icon: "react.svg" },
  { name: "Next.js", icon: "nextjs.svg" },
  { name: "TypeScript", icon: "typescript.svg" },
  { name: "Node.js", icon: "nodejs.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "PostgreSQL", icon: "postgresql.svg" },
  { name: "Tailwind CSS", icon: "tailwindcss.svg" },
  { name: "AWS", icon: "aws.svg" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Our technical toolkit includes a diverse range of languages, frameworks, and tools that we've mastered over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-2 sm:grid-cols-4 mb-8">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.06, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
          
          {/* Experience Cards */}
          <div className="space-y-6">
            {[
              {
                period: "2021 - Present",
                title: "Senior Frontend Developer",
                company: "TechCorp Inc.",
                description: "Leading the development of the company's flagship product using Next.js and TypeScript.",
                delay: 0.1
              },
              {
                period: "2019 - 2021",
                title: "Full Stack Developer",
                company: "InnovateLabs",
                description: "Developed and maintained multiple client projects using React, Node.js, and MongoDB.",
                delay: 0.2
              },
              {
                period: "2017 - 2019",
                title: "UI/UX Designer & Developer",
                company: "DesignWorks Studio",
                description: "Created user interfaces and implemented them with HTML, CSS, and JavaScript.",
                delay: 0.3
              }
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: experience.delay }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row justify-between mb-2">
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <span className="text-sm text-muted-foreground">{experience.period}</span>
                    </div>
                    <p className="text-sm font-medium text-primary mb-2">{experience.company}</p>
                    <p className="text-muted-foreground">{experience.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">Technologies We Work With</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-2 shadow-sm">
                  {/* In a real project, you would use actual SVG icons or images here */}
                  <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                </div>
                <span className="text-sm text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}