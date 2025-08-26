import { Users, Target, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Persoonlijk",
      description: "We kennen onze klanten bij naam en begrijpen hun unieke behoeften. Geen callcenters, maar direct contact met je WebsiteMaatje."
    },
    {
      icon: Target,
      title: "Resultaatgericht",
      description: "Elke website die we maken heeft een doel: jouw bedrijf online laten groeien. We denken mee over conversie en gebruiksvriendelijkheid."
    },
    {
      icon: Users,
      title: "Toegankelijk",
      description: "We geloven dat elke ondernemer een professionele website verdient. Daarom houden we onze diensten betaalbaar en begrijpelijk."
    },
    {
      icon: Award,
      title: "Kwaliteit",
      description: "Ondanks onze vriendelijke prijzen maken we geen concessies aan kwaliteit. Moderne designs en betrouwbare techniek."
    }
  ];

  const team = [
    {
      name: "Mark van den Berg",
      role: "Oprichter & Webdesigner",
      description: "15 jaar ervaring in webdesign en een passie voor het helpen van ondernemers online te groeien.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      name: "Lisa Janssen",
      role: "Frontend Developer",
      description: "Zorgt ervoor dat elke website perfect werkt op alle apparaten en sneller laadt dan de concurrentie.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <div className="pt-20 pb-16" data-testid="page-about">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-websitemaatje-light to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-websitemaatje-dark mb-6" data-testid="text-about-hero-title">
              Jouw digitale maatje
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-about-hero-subtitle">
              WebsiteMaatje is ontstaan uit de overtuiging dat elke ondernemer een professionele website verdient, 
              zonder de hoofdpijn van ingewikkelde processen of torenhoge kosten.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Het WebsiteMaatje team aan het werk" 
                className="rounded-2xl shadow-xl w-full"
                data-testid="img-team-work"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-websitemaatje-dark mb-6" data-testid="text-story-title">
                Ons verhaal
              </h2>
              <div className="space-y-4 text-gray-600">
                <p data-testid="text-story-p1">
                  In 2019 begonnen we WebsiteMaatje omdat we zagen dat veel kleine ondernemers worstelden met hun online aanwezigheid. 
                  Webbureaus waren vaak te duur of te ingewikkeld, en DIY-oplossingen leverden niet het gewenste resultaat.
                </p>
                <p data-testid="text-story-p2">
                  Wij geloofden dat het anders kon: persoonlijk, betaalbaar en zonder gedoe. Vandaag de dag hebben we al 
                  meer dan 100 ondernemers geholpen om succesvol online te gaan.
                </p>
                <p data-testid="text-story-p3">
                  Wat begon als een missie om websites toegankelijk te maken, is uitgegroeid tot een team van 
                  gepassioneerde professionals die elke dag werken aan de online groei van onze klanten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-websitemaatje-dark mb-6" data-testid="text-values-title">
              Onze waarden
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-values-subtitle">
              Deze principes staan centraal in alles wat we doen, van het eerste gesprek tot de oplevering van je website.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-websitemaatje-primary to-websitemaatje-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-websitemaatje-dark mb-3" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600" data-testid={`text-value-description-${index}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-websitemaatje-light to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-websitemaatje-dark mb-6" data-testid="text-team-title">
              Ons team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-team-subtitle">
              Leer de mensen kennen die jouw website tot leven brengen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    data-testid={`img-team-member-${index}`}
                  />
                  <h3 className="text-2xl font-bold text-websitemaatje-dark mb-2" data-testid={`text-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-websitemaatje-accent font-semibold mb-4" data-testid={`text-member-role-${index}`}>
                    {member.role}
                  </p>
                  <p className="text-gray-600" data-testid={`text-member-description-${index}`}>
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-websitemaatje-accent mb-2" data-testid="stat-websites">
                100+
              </div>
              <div className="text-gray-600">Websites gemaakt</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-websitemaatje-primary mb-2" data-testid="stat-clients">
                50+
              </div>
              <div className="text-gray-600">Tevreden klanten</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-websitemaatje-accent mb-2" data-testid="stat-years">
                5+
              </div>
              <div className="text-gray-600">Jaar ervaring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-websitemaatje-primary mb-2" data-testid="stat-satisfaction">
                100%
              </div>
              <div className="text-gray-600">Tevredenheidsscore</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-websitemaatje-primary to-websitemaatje-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="text-cta-title">
            Klaar om kennis te maken?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
            We horen graag over jouw plannen en vertellen je graag meer over hoe we je kunnen helpen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg"
                className="bg-white text-websitemaatje-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg"
                data-testid="button-contact"
              >
                Plan een gesprek
              </Button>
            </Link>
            <Link href="/">
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-websitemaatje-primary px-8 py-4 rounded-xl font-semibold text-lg"
                data-testid="button-packages"
              >
                Bekijk onze pakketten
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
