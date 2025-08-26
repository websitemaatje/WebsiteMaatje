import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Laptop, Menu, X } from "lucide-react";
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
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm" data-testid="navigation">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="w-8 h-8 bg-gradient-to-br from-websitemaatje-primary to-websitemaatje-accent rounded-lg flex items-center justify-center">
              <Laptop className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-websitemaatje-dark">WebsiteMaatje</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.href.includes("#") ? (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.split("#")[1])}
                  className="text-websitemaatje-dark hover:text-websitemaatje-primary transition-colors font-medium"
                  data-testid={`nav-${item.label.toLowerCase().replace(" ", "-")}`}
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
                  data-testid={`nav-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
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
