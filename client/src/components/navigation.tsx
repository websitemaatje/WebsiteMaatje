import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Laptop, Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Pakketten", href: "/#pakketten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location === "/") {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/${sectionId}`;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-gray-100" data-testid="navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" data-testid="link-home">
            <div className="w-10 h-10 bg-websitemaatje-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 pulse-glow">
              <Laptop className="text-white w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold text-websitemaatje-dark">WebsiteMaatje</span>
              <div className="flex items-center">
                <Sparkles className="w-3 h-3 text-websitemaatje-accent mr-1" />
                <span className="text-xs text-websitemaatje-accent font-semibold">Jouw digitale maatje</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href.includes("#") ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.split("#")[1])}
                  className="relative text-websitemaatje-dark hover:text-websitemaatje-primary transition-all duration-300 font-semibold group px-3 py-2 rounded-lg hover:bg-websitemaatje-light"
                  data-testid={`nav-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-websitemaatje-gradient group-hover:w-full transition-all duration-300"></div>
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-websitemaatje-dark hover:text-websitemaatje-primary transition-all duration-300 font-semibold group px-3 py-2 rounded-lg hover:bg-websitemaatje-light ${
                    location === item.href ? "text-websitemaatje-primary bg-websitemaatje-light" : ""
                  }`}
                  data-testid={`nav-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-websitemaatje-gradient transition-all duration-300 ${
                    location === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}></div>
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.href.includes("#") ? (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href.split("#")[1])}
                    className="text-websitemaatje-dark hover:text-websitemaatje-primary transition-colors font-medium text-left"
                    data-testid={`mobile-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-websitemaatje-dark hover:text-websitemaatje-primary transition-colors font-medium ${
                      location === item.href ? "text-websitemaatje-primary" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`mobile-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
