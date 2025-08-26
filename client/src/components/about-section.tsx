import { Button } from "@/components/ui/button";
import { Heart, Users, Target, Award, Sparkles, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="over-ons" className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden" data-testid="about-section">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-websitemaatje-primary opacity-5 rounded-full floating-animation"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-websitemaatje-accent opacity-5 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="floating-animation">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Friendly team working on web projects" 
                className="rounded-2xl shadow-2xl w-full h-auto relative z-10"
                data-testid="img-about"
              />
              
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-websitemaatje-gradient opacity-10 rounded-2xl"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-websitemaatje-gradient text-white rounded-xl p-3 shadow-xl pulse-glow">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span className="font-bold text-sm">5 jaar ervaring</span>
              </div>
            </div>

            {/* Achievement badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-green-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-websitemaatje-dark">100% Tevredenheid</div>
                  <div className="text-sm text-gray-600">Alle klanten tevreden</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="slide-in-bottom">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-websitemaatje-gradient rounded-full text-white font-semibold text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Jouw digitale maatje sinds 2019
              </span>
            </div>
            
            <h2 className="text-4xl font-bold text-websitemaatje-dark mb-6" data-testid="text-about-title">
              <span className="text-gradient">Over WebsiteMaatje</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed" data-testid="text-about-intro">
              Wij zijn jouw digitale maatje. <span className="font-semibold text-websitemaatje-primary">Persoonlijk contact</span> en een website die echt bij jou past.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="text-about-description">
              Bij WebsiteMaatje geloven we dat elke ondernemer een professionele website verdient, zonder de hoofdpijn van ingewikkelde processen of torenhoge kosten. We nemen je bij de hand en zorgen ervoor dat je online aanwezigheid perfect aansluit bij jouw bedrijf en doelgroep.
            </p>

            {/* Core values */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                <div>
                  <div className="font-bold text-websitemaatje-dark">Persoonlijk</div>
                  <div className="text-sm text-gray-600">Direct contact</div>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                <Target className="w-8 h-8 text-websitemaatje-primary mr-3" />
                <div>
                  <div className="font-bold text-websitemaatje-dark">Doelgericht</div>
                  <div className="text-sm text-gray-600">Focus op resultaat</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-websitemaatje-accent mb-2 flex items-center justify-center" data-testid="stat-happy-clients">
                  <TrendingUp className="w-8 h-8 mr-2" />
                  50+
                </div>
                <div className="text-gray-600 font-semibold">Tevreden klanten</div>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-websitemaatje-primary mb-2 flex items-center justify-center" data-testid="stat-projects-completed">
                  <Users className="w-8 h-8 mr-2" />
                  100+
                </div>
                <div className="text-gray-600 font-semibold">Websites gemaakt</div>
              </div>
            </div>
            
            <Button 
              className="bg-websitemaatje-gradient hover:bg-websitemaatje-gradient-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl pulse-glow"
              data-testid="button-learn-more"
            >
              <Heart className="mr-2 w-5 h-5" />
              Leer ons beter kennen
              <Sparkles className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
