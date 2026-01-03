import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useState } from "react";
import { Github } from "lucide-react";

const NavItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border"
          : "py-5 bg-background/50"
      )}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex container mx-auto px-4 items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold flex items-center text-foreground hover:text-primary transition-colors"
          style={{ color: "inherit" }}
        >
          <span className="relative z-10">
            <span className="text-glow">Zeidan Chabo </span>
            <span className="text-primary">Portfolio</span>
          </span>
        </a>

        {/* Desktop Navigation - Horizontal */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            {NavItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* GitHub Link */}
          <a
            href="https://github.com/Z-Chabo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105 font-semibold shadow-md"
            aria-label="Checkout my GitHub profile and projects"
          >
            <Github className="w-5 h-5" />
            <span>View My GitHub</span>
          </a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden container mx-auto px-4 py-1">
        {/* Mobile Title */}
        <div className="text-center mb-2">
          <a
            href="#hero"
            className="text-base font-bold text-foreground hover:text-primary transition-colors"
            style={{ color: "inherit" }}
          >
            <span className="text-glow">Zeidan Chabo </span>
            <span className="text-primary">Portfolio</span>
          </a>
        </div>

        {/* Mobile Navigation - Horizontal Grid */}
        <div className="grid grid-cols-3 gap-1 justify-items-center mb-2">
          {NavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs text-foreground hover:text-primary transition-colors duration-200 font-medium py-1 px-2 rounded hover:bg-background/50 text-center"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* GitHub Link - Mobile */}
        <div className="flex justify-center">
          <a
            href="https://github.com/Z-Chabo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all text-sm font-semibold shadow-md"
            aria-label="Visit my GitHub profile"
          >
            <Github className="w-4 h-4" />
            <span>View My GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};
