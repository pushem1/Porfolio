import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">WebDZ Services</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Crafting digital experiences that delight users and solve real problems.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#home" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <Button className="mt-4" size="sm">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {currentYear} Webdz Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}