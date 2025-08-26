import { Link } from "wouter";
import { Laptop, Facebook, Instagram, Linkedin, Heart, Sparkles, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-websitemaatje-dark via-gray-800 to-websitemaatje-dark text-white py-16 relative overflow-hidden" data-testid="footer">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-websitemaatje-primary opacity-10 rounded-full floating-animation"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-websitemaatje-accent opacity-10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-websitemaatje-gradient rounded-xl flex items-center justify-center shadow-lg pulse-glow">
                <Laptop className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-bold">WebsiteMaatje</span>
                <div className="flex items-center">
                  <Sparkles className="w-3 h-3 text-websitemaatje-accent mr-1" />
                  <span className="text-xs text-websitemaatje-accent font-semibold">Sinds 2019</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Jouw digitale maatje voor een professionele website. Persoonlijk, betrouwbaar en zonder gedoe. 
              <span className="text-websitemaatje-accent font-semibold"> 100+ tevreden klanten!</span>
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center bg-white/10 rounded-lg p-3">
                <div className="text-xl font-bold text-websitemaatje-accent">100+</div>
                <div className="text-xs text-gray-400">Websites</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-3">
                <div className="text-xl font-bold text-websitemaatje-primary">50+</div>
                <div className="text-xs text-gray-400">Klanten</div>
              </div>
              <div className="text-center bg-white/10 rounded-lg p-3">
                <div className="text-xl font-bold text-green-400">100%</div>
                <div className="text-xs text-gray-400">Tevreden</div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-websitemaatje-primary hover:bg-white/20 transition-all duration-300"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-websitemaatje-primary hover:bg-white/20 transition-all duration-300"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-websitemaatje-primary hover:bg-white/20 transition-all duration-300"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-websitemaatje-accent" />
              Diensten
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/pakket/starter" className="hover:text-websitemaatje-primary transition-colors flex items-center group">
                  <div className="w-2 h-2 bg-websitemaatje-accent rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  Starter websites
                </Link>
              </li>
              <li>
                <Link href="/pakket/plus" className="hover:text-websitemaatje-primary transition-colors flex items-center group">
                  <div className="w-2 h-2 bg-websitemaatje-accent rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  Plus websites
                </Link>
              </li>
              <li>
                <Link href="/pakket/premium" className="hover:text-websitemaatje-primary transition-colors flex items-center group">
                  <div className="w-2 h-2 bg-websitemaatje-accent rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  Premium websites
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-websitemaatje-primary transition-colors flex items-center group">
                  <div className="w-2 h-2 bg-websitemaatje-accent rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  Website onderhoud
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg flex items-center">
              <Mail className="w-5 h-5 mr-2 text-websitemaatje-accent" />
              Contact
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-websitemaatje-accent" />
                <span>hallo@websitemaatje.nl</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-websitemaatje-accent" />
                <span>06 - 12 34 56 78</span>
              </li>
              <li className="flex items-center">
                <Heart className="w-4 h-4 mr-3 text-red-400" />
                <span>Gemaakt met liefde in Nederland</span>
              </li>
            </ul>

            {/* Call to action */}
            <div className="mt-6 p-4 bg-websitemaatje-gradient rounded-xl">
              <h5 className="font-bold mb-2 text-sm">Gratis kennismaking</h5>
              <p className="text-xs text-white/90 mb-3">Bel of mail voor een vrijblijvend gesprek!</p>
              <Link href="/contact" className="text-xs font-semibold text-white hover:underline">
                Plan nu →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2024 WebsiteMaatje. Alle rechten voorbehouden.</p>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Gemaakt met</span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span>door WebsiteMaatje</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
