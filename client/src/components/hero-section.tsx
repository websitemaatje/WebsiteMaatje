import { Calendar, Sparkles, Star, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onConsultationClick: () => void;
  onPackagesClick: () => void;
}

export default function HeroSection({ onConsultationClick, onPackagesClick }: HeroSectionProps) {
  const [animatedElements, setAnimatedElements] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimatedElements(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const FloatingIcon = ({ Icon, className, delay }: { Icon: any, className: string, delay: string }) => (
    <div 
      className={`absolute ${className} floating-animation opacity-20`}
      style={{ animationDelay: delay }}
    >
      <Icon className="w-8 h-8 text-websitemaatje-primary" />
    </div>
  );

  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden" data-testid="hero-section">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <FloatingIcon Icon={Sparkles} className="top-20 left-10" delay="0s" />
        <FloatingIcon Icon={Star} className="top-32 right-20" delay="1s" />
        <FloatingIcon Icon={Heart} className="bottom-32 left-20" delay="2s" />
        <FloatingIcon Icon={Zap} className="top-40 left-1/3" delay="1.5s" />
        <FloatingIcon Icon={Sparkles} className="bottom-20 right-10" delay="0.5s" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className={`text-center lg:text-left ${animatedElements ? 'slide-in-bottom' : 'opacity-0'}`}>
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-websitemaatje-gradient text-white text-sm font-semibold mb-4 pulse-glow">
                <Sparkles className="w-4 h-4 mr-2" />
                Jouw digitale maatje sinds 2019
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-websitemaatje-dark leading-tight mb-6" data-testid="text-hero-title">
              Jouw website, 
              <span className="block text-gradient"> gemaakt door je maatje</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed" data-testid="text-hero-subtitle">
              WebsiteMaatje helpt je snel en betaalbaar online. Persoonlijk, betrouwbaar en zonder gedoe. 
              <span className="font-semibold text-websitemaatje-primary"> Van idee tot live website in 2 weken!</span>
            </p>

            {/* Key benefits */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Heart className="w-4 h-4 text-red-500 mr-2" />
                <span className="text-sm font-medium">Persoonlijke aanpak</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="text-sm font-medium">Snel resultaat</span>
              </div>
              <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                <Star className="w-4 h-4 text-websitemaatje-accent mr-2" />
                <span className="text-sm font-medium">100% tevredenheid</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={onConsultationClick}
                className="bg-websitemaatje-gradient hover:bg-websitemaatje-gradient-light text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl pulse-glow"
                data-testid="button-consultation"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Plan gratis kennismaking
                <Sparkles className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline"
                onClick={onPackagesClick}
                className="border-2 border-websitemaatje-primary text-websitemaatje-primary hover:bg-websitemaatje-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 glass-effect backdrop-blur-sm"
                data-testid="button-packages"
              >
                Bekijk pakketten
              </Button>
            </div>
          </div>
          
          <div className={`relative ${animatedElements ? 'fade-in-scale' : 'opacity-0'}`}>
            <div className="relative floating-animation">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern workspace with laptop and web design" 
                className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
                data-testid="img-hero"
              />
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-websitemaatje-gradient opacity-10 rounded-2xl"></div>
            </div>
            
            {/* Success badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-green-100 slide-in-bottom">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-websitemaatje-dark">100% tevreden klanten</span>
              </div>
            </div>

            {/* Speed badge */}
            <div className="absolute -top-4 -right-4 bg-websitemaatje-gradient text-white rounded-xl p-3 shadow-xl slide-in-bottom">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-bold">2 weken live</span>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-websitemaatje-gradient rounded-full opacity-20 floating-animation" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-websitemaatje-accent rounded-full opacity-20 floating-animation" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
