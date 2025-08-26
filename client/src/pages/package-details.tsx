import { useRoute, Link } from "wouter";
import { ArrowLeft, Check, Calendar, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const packageDetails = {
  starter: {
    name: "Starter",
    price: "€199",
    period: "eenmalig",
    description: "Perfect voor kleine ondernemers die snel online willen met een professionele uitstraling.",
    features: [
      "Simpele onepager",
      "Basisdesign met jouw kleuren en logo",
      "Contactformulier",
      "Mobiel vriendelijk design",
      "SSL certificaat (beveiligde verbinding)",
      "Google Analytics installatie"
    ],
    timeline: "1-2 weken",
    process: [
      "Gratis kennismakingsgesprek",
      "Concept en design binnen 3 dagen",
      "Feedback verwerken",
      "Website live zetten"
    ],
    ideal: [
      "Startende ondernemers",
      "Freelancers",
      "Kleine bedrijven",
      "Snelle online aanwezigheid"
    ]
  },
  plus: {
    name: "Plus",
    price: "€399",
    period: "eenmalig",
    description: "De ideale keuze voor bedrijven die meer willen tonen met meerdere pagina's en moderne functionaliteiten.",
    features: [
      "Tot 5 pagina's",
      "Modern, responsief design",
      "Volledig responsive (alle apparaten)",
      "Contactformulier",
      "Social media integratie",
      "SEO basis optimalisatie",
      "Google Analytics & Search Console",
      "1 maand gratis aanpassingen"
    ],
    timeline: "2-3 weken",
    process: [
      "Uitgebreid kennismakingsgesprek",
      "Sitemap en wireframes",
      "Design concept binnen 5 dagen",
      "Ontwikkeling en testing",
      "Training en oplevering"
    ],
    ideal: [
      "Groeiende bedrijven",
      "Service providers",
      "Lokale ondernemers",
      "Professionele uitstraling"
    ]
  },
  premium: {
    name: "Premium",
    price: "€699",
    period: "eenmalig",
    description: "Voor ambitieuze ondernemers die willen uitblinken online met een volledig uitgeruste website.",
    features: [
      "Tot 10 pagina's",
      "Maatwerkdesign op basis van je wensen",
      "Geavanceerde SEO optimalisatie",
      "Basisbeheer (3 maanden)",
      "Analytics & rapportage",
      "Contact- en quotatieformulieren",
      "Blog/nieuws functionaliteit",
      "Social media feeds",
      "Snelheidsoptimalisatie",
      "3 maanden support & onderhoud"
    ],
    timeline: "3-4 weken",
    process: [
      "Strategiesessie en planning",
      "Uitgebreide analyse en onderzoek",
      "Moodboard en design concepten",
      "Ontwikkeling in fases",
      "Testing en optimalisatie",
      "Training en doorlopende ondersteuning"
    ],
    ideal: [
      "Gevestigde bedrijven",
      "E-commerce starters",
      "Consultants & coaches",
      "Bedrijven met groeiambities"
    ]
  }
};

export default function PackageDetails() {
  const [match, params] = useRoute("/pakket/:packageType");
  const packageType = params?.packageType as keyof typeof packageDetails;
  
  if (!match || !packageDetails[packageType]) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Pakket niet gevonden</h1>
        <Link href="/">
          <Button>Terug naar home</Button>
        </Link>
      </div>
    );
  }

  const pkg = packageDetails[packageType];

  return (
    <div className="pt-20 pb-16" data-testid="page-package-details">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              Terug naar overzicht
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            {packageType === "plus" && "Meest populair"}
          </Badge>
          <h1 className="text-4xl font-bold text-websitemaatje-dark mb-4" data-testid={`text-package-title-${packageType}`}>
            {pkg.name} Pakket
          </h1>
          <div className="text-5xl font-bold text-websitemaatje-accent mb-2" data-testid={`text-package-price-${packageType}`}>
            {pkg.price}
          </div>
          <div className="text-gray-600 mb-6">{pkg.period}</div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid={`text-package-description-${packageType}`}>
            {pkg.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Wat zit er in?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Process */}
          <Card>
            <CardHeader>
              <CardTitle>Hoe werken we?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="font-semibold">Tijdlijn: </span>
                <span className="text-websitemaatje-accent">{pkg.timeline}</span>
              </div>
              <ol className="space-y-3">
                {pkg.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-websitemaatje-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Ideal for */}
          <Card>
            <CardHeader>
              <CardTitle>Ideaal voor</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pkg.ideal.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-websitemaatje-accent rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-websitemaatje-light to-blue-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-websitemaatje-dark mb-4">
                Klaar om te beginnen?
              </h3>
              <p className="text-gray-600 mb-8">
                Plan een gratis kennismakingsgesprek en we bespreken hoe we jouw {pkg.name.toLowerCase()} website kunnen realiseren.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    className="bg-websitemaatje-accent hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold"
                    data-testid="button-contact"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Plan gesprek
                  </Button>
                </Link>
                
                <Button 
                  variant="outline"
                  className="border-websitemaatje-primary text-websitemaatje-primary hover:bg-websitemaatje-primary hover:text-white px-8 py-3 rounded-xl font-semibold"
                  data-testid="button-call"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Bel direct
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>hallo@websitemaatje.nl</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>06 - 12 34 56 78</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
