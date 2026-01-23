"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((element): element is Element => Boolean(element));

    if (!sectionElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.2, 0.5, 0.8],
      }
    );

    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",
        scrolled
          ? "bg-background/80 shadow-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="#home" 
            className="font-bold text-xl tracking-tight transition-colors bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 text-transparent bg-clip-text"
            onClick={() => setIsOpen(false)}
          >
            WEBDZ SERVICES
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                  isActive && "text-primary after:w-full"
                )}
              >
                {link.name}
              </Link>
            );
            })}
            <Button size="sm" className="bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 hover:opacity-90">
              <Link href="#contact">Get Started</Link>
            </Button>
            <ModeToggle />
          </nav>

          <div className="flex items-center md:hidden space-x-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b">
          <div className="container px-4 py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium py-2 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 via-red-500 to-orange-500 hover:opacity-90">
              <Link 
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}