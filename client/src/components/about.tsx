import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="over-ons" className="py-20 bg-gradient-to-br from-websitemaatje-light to-blue-50" data-testid="about-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Friendly team working on web projects" 
              className="rounded-2xl shadow-xl w-full h-auto"
              data-testid="img-about"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-websitemaatje-dark mb-6" data-testid="text-about-title">
              Over WebsiteMaatje
            </h2>
            <p className="text-xl text-gray-600 mb-6" data-testid="text-about-intro">
              Wij zijn jouw digitale maatje. Persoonlijk contact en een website die echt bij jou past.
            </p>
            <p className="text-lg text-gray-600 mb-8" data-testid="text-about-description">
              Bij WebsiteMaatje geloven we dat elke ondernemer een professionele website verdient, zonder de hoofdpijn van ingewikkelde processen of torenhoge kosten. We nemen je bij de hand en zorgen ervoor dat je online aanwezigheid perfect aansluit bij jouw bedrijf en doelgroep.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-websitemaatje-accent mb-2" data-testid="stat-happy-clients">
                  50+
                </div>
                <div className="text-gray-600">Tevreden klanten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-websitemaatje-primary mb-2" data-testid="stat-projects-completed">
                  100+
                </div>
                <div className="text-gray-600">Websites gemaakt</div>
              </div>
            </div>
            
            <Button 
              className="bg-websitemaatje-primary hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-learn-more"
            >
              Leer ons beter kennen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
