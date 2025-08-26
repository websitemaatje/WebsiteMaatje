import { Link } from "wouter";
import { Laptop, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-websitemaatje-dark text-white py-12" data-testid="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-websitemaatje-primary to-websitemaatje-accent rounded-lg flex items-center justify-center">
                <Laptop className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold">WebsiteMaatje</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Jouw digitale maatje voor een professionele website. Persoonlijk, betrouwbaar en zonder gedoe.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-websitemaatje-primary transition-colors"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-websitemaatje-primary transition-colors"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-websitemaatje-primary transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#" className="hover:text-websitemaatje-primary transition-colors">
                  Website ontwerp
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-websitemaatje-primary transition-colors">
                  Webshop ontwikkeling
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-websitemaatje-primary transition-colors">
                  SEO optimalisatie
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-websitemaatje-primary transition-colors">
                  Website onderhoud
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>hallo@websitemaatje.nl</li>
              <li>06 - 12 34 56 78</li>
              <li>Nederland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 WebsiteMaatje. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
