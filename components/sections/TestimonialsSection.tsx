"use client";

import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "@/components/motion";
import { Quote } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "The EcoTrack platform they built for us exceeded all expectations. The environmental tracking features are comprehensive and the user interface is incredibly intuitive.",
    author: "Ahmed",
    position: "TechnoAlgeria"
  },
  {
    id: 2,
    quote: "Their ML Performance autotuning website has revolutionized how we automatically optimize our machine learning models. The intelligent tuning algorithms and performance analytics are exactly what we needed for our AI projects.",
    author: "Lyes",
    position: "ML Performance GARAGE"
  },
  {
    id: 3,
    quote: "The team's expertise in both design and development made our collaboration seamless. They truly understand how to create products that users love.",
    author: "Karim",
    position: "DesignHub"
  },
  {
    id: 4,
    quote: "I've worked with many developers, but this team stands out for their communication skills and dedication to quality. They're now our go-to team for all projects.",
    author: "Amina",
    position: "GrowthTech Algeria"
  }
];

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-16 right-8 h-56 w-56 rounded-full bg-primary/10 blur-3xl float-medium" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl float-slow" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            We value every relationship we build with clients. Here's what some of them have to say about working with us.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full border bg-card/70 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="h-8 w-8 text-primary/60 mb-4" />
                      <p className="text-muted-foreground mb-6 flex-1">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static transform-none mx-2" />
            <CarouselNext className="relative static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}