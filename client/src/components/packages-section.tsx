import { Link } from "wouter";
import { Rocket, Star, Crown, Check, Sparkles, TrendingUp, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "€199",
    period: "eenmalig",
    icon: Rocket,
    iconBg: "from-blue-100 to-blue-200",
    iconColor: "text-websitemaatje-primary",
    accent: "Perfecte start!",
    timeline: "1-2 weken",
    features: [
      "Simpele onepager",
      "Basisdesign met jouw kleuren",
      "Contactformulier",
      "Mobiel vriendelijk",
      "SSL beveiligde verbinding"
    ],
    buttonStyle: "bg-websitemaatje-primary hover:bg-blue-600",
    borderColor: "border-gray-200 hover:border-websitemaatje-primary",
    bgGradient: "from-blue-50 to-white"
  },
  {
    id: "plus",
    name: "Plus",
    price: "€399",
    period: "eenmalig",
    icon: Star,
    iconBg: "from-orange-100 to-orange-200",
    iconColor: "text-websitemaatje-accent",
    accent: "Meest gekozen! 🚀",
    timeline: "2-3 weken",
    features: [
      "Tot 5 pagina's",
      "Modern, uniek design",
      "Volledig responsive",
      "Contactformulier",
      "Social media integratie",
      "SEO basis optimalisatie"
    ],
    buttonStyle: "bg-websitemaatje-gradient hover:bg-websitemaatje-gradient-light",
    borderColor: "border-websitemaatje-accent hover:border-websitemaatje-accent",
    bgGradient: "from-orange-50 to-white",
    popular: true
  },
  {
    id: "premium",
    name: "Premium",
    price: "€699",
    period: "eenmalig",
    icon: Crown,
    iconBg: "from-purple-100 to-purple-200",
    iconColor: "text-purple-600",
    accent: "Alle toeters en bellen!",
    timeline: "3-4 weken",
    features: [
      "Tot 10 pagina's",
      "Volledig maatwerkdesign",
      "Geavanceerde SEO optimalisatie",
      "3 maanden gratis onderhoud",
      "Analytics & rapportage",
      "Blog/nieuws functionaliteit"
    ],
    buttonStyle: "bg-gradient-to-r from-purple-600 to-websitemaatje-primary hover:from-purple-700 hover:to-blue-600",
    borderColor: "border-purple-200 hover:border-purple-400",
    bgGradient: "from-purple-50 to-white"
  }
];

export default function PackagesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="pakketten" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" data-testid="packages-section">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-websitemaatje-primary opacity-5 rounded-full floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-websitemaatje-accent opacity-5 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-websitemaatje-gradient rounded-full text-white font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Transparante prijzen, geen verrassingen
          </div>
          <h2 className="text-4xl font-bold text-websitemaatje-dark mb-4" data-testid="text-packages-title">
            <span className="text-gradient">Kies jouw perfecte pakket</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="text-packages-subtitle">
            Van eenvoudige starterspagina tot uitgebreide website met alle toeters en bellen. 
            <span className="font-semibold text-websitemaatje-primary"> Alle prijzen zijn eenmalig - geen abonnementen!</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id}
              className={`relative bg-gradient-to-br ${pkg.bgGradient} border-2 ${pkg.borderColor} rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-4 ${hoveredCard === pkg.id ? 'scale-105' : ''} ${pkg.popular ? 'ring-2 ring-websitemaatje-accent ring-opacity-50' : ''}`}
              data-testid={`card-package-${pkg.id}`}
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-websitemaatje-gradient text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg pulse-glow">
                    <Star className="w-4 h-4 inline mr-1" />
                    Meest populair!
                  </div>
                </div>
              )}

              {/* Floating decorative element */}
              <div className="absolute top-4 right-4 opacity-10">
                <pkg.icon className="w-12 h-12 text-websitemaatje-primary floating-animation" />
              </div>
              
              <CardContent className="p-0 relative">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${pkg.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${hoveredCard === pkg.id ? 'floating-animation' : ''}`}>
                    <pkg.icon className={`${pkg.iconColor} w-10 h-10`} />
                  </div>
                  
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-websitemaatje-accent bg-white px-3 py-1 rounded-full border">
                      {pkg.accent}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-websitemaatje-dark mb-2" data-testid={`text-package-name-${pkg.id}`}>
                    {pkg.name}
                  </h3>
                  
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-5xl font-bold text-websitemaatje-accent" data-testid={`text-package-price-${pkg.id}`}>
                      {pkg.price}
                    </div>
                  </div>
                  
                  <div className="text-gray-600 mb-2">{pkg.period}</div>
                  
                  <div className="flex items-center justify-center text-sm text-websitemaatje-primary font-semibold">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {pkg.timeline}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <Check className="text-green-600 w-3 h-3" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={`/pakket/${pkg.id}`}>
                  <Button 
                    className={`w-full ${pkg.buttonStyle} text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                    data-testid={`button-select-${pkg.id}`}
                  >
                    <Zap className="mr-2 w-5 h-5" />
                    Kies {pkg.name}
                    <Sparkles className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-websitemaatje-dark mb-4">
              Waarom kiezen voor WebsiteMaatje?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <span className="font-semibold">Persoonlijke aanpak</span>
              </div>
              <div className="flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                <span className="font-semibold">Snelle oplevering</span>
              </div>
              <div className="flex items-center justify-center">
                <Star className="w-6 h-6 text-websitemaatje-accent mr-3" />
                <span className="font-semibold">100% tevredenheid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
