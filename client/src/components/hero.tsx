import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onConsultationClick?: () => void;
  onPackagesClick?: () => void;
}

export default function Hero({ onConsultationClick, onPackagesClick }: HeroProps) {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-websitemaatje-light via-white to-blue-50 overflow-hidden" data-testid="hero-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-websitemaatje-dark leading-tight mb-6" data-testid="text-hero-title">
              Jouw website, 
              <span className="text-websitemaatje-primary"> gemaakt door</span>
              <span className="text-websitemaatje-accent"> je maatje</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl" data-testid="text-hero-subtitle">
              WebsiteMaatje helpt je snel en betaalbaar online. Persoonlijk, betrouwbaar en zonder gedoe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={onConsultationClick}
                className="bg-websitemaatje-accent hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                data-testid="button-consultation"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Plan gratis kennismaking
              </Button>
              <Button 
                variant="outline"
                onClick={onPackagesClick}
                className="border-2 border-websitemaatje-primary text-websitemaatje-primary hover:bg-websitemaatje-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                data-testid="button-packages"
              >
                Bekijk pakketten
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern workspace with laptop and web design" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-websitemaatje-dark">100% tevreden klanten</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
