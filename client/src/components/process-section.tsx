export default function ProcessSection() {
  const processSteps = [
    {
      number: 1,
      title: "Kennismaking",
      description: "Gratis gesprek om jouw wensen en doelen te bespreken."
    },
    {
      number: 2,
      title: "Ontwerp",
      description: "We maken een design dat perfect bij jouw merk past."
    },
    {
      number: 3,
      title: "Ontwikkeling",
      description: "Je website wordt gebouwd met aandacht voor detail."
    },
    {
      number: 4,
      title: "Live",
      description: "Je website gaat online en jij kunt trots zijn!"
    }
  ];

  return (
    <section className="py-20 bg-white" data-testid="process-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-websitemaatje-dark mb-4" data-testid="text-process-title">
            Zo werken we samen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" data-testid="text-process-subtitle">
            Van eerste kennismaking tot live website in 4 eenvoudige stappen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div key={step.number} className="text-center" data-testid={`process-step-${step.number}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-websitemaatje-primary to-websitemaatje-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-websitemaatje-dark mb-2" data-testid={`text-step-title-${step.number}`}>
                {step.title}
              </h3>
              <p className="text-gray-600" data-testid={`text-step-description-${step.number}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
