import { MessageCircle, Palette, Code, Rocket, ArrowRight, Sparkles } from "lucide-react";

export default function ProcessSection() {
  const processSteps = [
    {
      number: 1,
      title: "Kennismaking",
      description: "Gratis gesprek om jouw wensen en doelen te bespreken.",
      icon: MessageCircle,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      number: 2,
      title: "Ontwerp",
      description: "We maken een design dat perfect bij jouw merk past.",
      icon: Palette,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      number: 3,
      title: "Ontwikkeling",
      description: "Je website wordt gebouwd met aandacht voor detail.",
      icon: Code,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      number: 4,
      title: "Live",
      description: "Je website gaat online en jij kunt trots zijn!",
      icon: Rocket,
      color: "from-websitemaatje-accent to-red-500",
      bgColor: "from-orange-50 to-red-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden" data-testid="process-section">
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-websitemaatje-primary opacity-5 rounded-full floating-animation"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-websitemaatje-accent opacity-5 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-websitemaatje-gradient rounded-full text-white font-semibold mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Van idee tot live website
          </div>
          <h2 className="text-4xl font-bold text-websitemaatje-dark mb-4" data-testid="text-process-title">
            <span className="text-gradient">Zo werken we samen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="text-process-subtitle">
            Van eerste kennismaking tot live website in 4 eenvoudige stappen. 
            <span className="font-semibold text-websitemaatje-primary"> Transparant proces, altijd op de hoogte!</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-websitemaatje-primary to-websitemaatje-accent opacity-30"></div>
          
          {processSteps.map((step, index) => (
            <div key={step.number} className="relative" data-testid={`process-step-${step.number}`}>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                {/* Step card */}
                <div className={`bg-gradient-to-br ${step.bgColor} rounded-2xl p-6 mb-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover:floating-animation`}>
                    <step.icon className="w-10 h-10" />
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-websitemaatje-gradient rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-websitemaatje-dark mb-3" data-testid={`text-step-title-${step.number}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" data-testid={`text-step-description-${step.number}`}>
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 z-10">
                    <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-websitemaatje-primary" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-websitemaatje-dark mb-4">
              Klaar om te beginnen?
            </h3>
            <p className="text-gray-600 mb-6">
              Het hele proces duurt gemiddeld 2-3 weken. Jij bent altijd op de hoogte van de voortgang!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center bg-green-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-green-700">Gratis kennismaking</span>
              </div>
              <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-blue-700">Vaste prijs</span>
              </div>
              <div className="flex items-center bg-orange-50 px-4 py-2 rounded-full">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-orange-700">Snelle oplevering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
