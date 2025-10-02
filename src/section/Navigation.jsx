import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 60;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    closeMobileMenu();
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-primary/40 shadow-sm backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className={`cursor-pointer text-xl font-bold transition-colors hover:opacity-80 ${isScrolled ? "text-neutral-300" : "text-neutral-300"}`}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Portfolio
          </div>
          {/* Desktop */}
          <div className="hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className={`transition-colors hover:text-neutral-200 ${isScrolled ? "text-neutral-300" : "text-neutral-300"}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <button
            onClick={toggleMobileMenu}
            className={`cursor-pointer p-2 transition-colors hover:text-neutral-300 md:hidden ${isScrolled ? "text-neutral-300" : "text-slate-200"}`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`transition-all duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "mt-4 max-h-64 opacity-100" : "max-h-0 overflow-hidden opacity-0"}`}
        >
          <div className="bg-primary space-y-4 border border-neutral-400 p-4 shadow-lg">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="block py-2 text-neutral-300 transition-colors hover:text-neutral-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
