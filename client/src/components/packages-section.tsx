import { Link } from "wouter";
import { Rocket, Star, Crown, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const packages = [
  {
    id: "starter",
    name: "Starter",
    price: "€199",
    period: "eenmalig",
    icon: Rocket,
    iconBg: "from-blue-100 to-blue-200",
    iconColor: "text-websitemaatje-primary",
    features: [
      "Simpele onepager",
      "Basisdesign",
      "Contactformulier",
      "Mobiel vriendelijk"
    ],
    buttonStyle: "bg-websitemaatje-primary hover:bg-blue-600",
    borderColor: "border-gray-100 hover:border-websitemaatje-primary"
  },
  {
    id: "plus",
    name: "Plus",
    price: "€399",
    period: "eenmalig",
    icon: Star,
    iconBg: "from-orange-100 to-orange-200",
    iconColor: "text-websitemaatje-accent",
    features: [
      "Tot 5 pagina's",
      "Modern design",
      "Volledig responsive",
      "Contactformulier",
      "Social media integratie"
    ],
    buttonStyle: "bg-websitemaatje-accent hover:bg-orange-600",
    borderColor: "border-websitemaatje-accent hover:border-websitemaatje-accent",
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
    features: [
      "Tot 10 pagina's",
      "Maatwerkdesign",
      "SEO-optimalisatie",
      "Basisbeheer (3 maanden)",
      "Analytics & rapportage"
    ],
    buttonStyle: "bg-websitemaatje-primary hover:bg-blue-600",
    borderColor: "border-gray-100 hover:border-websitemaatje-primary"
  }
];

export default function PackagesSection() {
  return (
    <section id="pakketten" className="py-20 bg-white" data-testid="packages-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-websitemaatje-dark mb-4" data-testid="text-packages-title">
            Onze pakketten
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-packages-subtitle">
            Kies het pakket dat bij jou past. Van eenvoudige starterspagina tot uitgebreide website met alle toeters en bellen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`relative bg-white border-2 ${pkg.borderColor} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2`}
              data-testid={`card-package-${pkg.id}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-websitemaatje-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Populair
                  </div>
                </div>
              )}
              
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <pkg.icon className={`${pkg.iconColor} w-8 h-8`} />
                  </div>
                  <h3 className="text-2xl font-bold text-websitemaatje-dark mb-2" data-testid={`text-package-name-${pkg.id}`}>
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-websitemaatje-accent mb-2" data-testid={`text-package-price-${pkg.id}`}>
                    {pkg.price}
                  </div>
                  <div className="text-gray-600">{pkg.period}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-green-500 mr-3 w-4 h-4" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={`/pakket/${pkg.id}`}>
                  <Button 
                    className={`w-full ${pkg.buttonStyle} text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}
                    data-testid={`button-select-${pkg.id}`}
                  >
                    Kies {pkg.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
