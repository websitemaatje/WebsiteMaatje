import HeroSection from "@/components/hero-section";
import PackagesSection from "@/components/packages-section";
import AboutSection from "@/components/about-section";
import ProcessSection from "@/components/process-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    scrollToSection("contact");
  };

  const scrollToPackages = () => {
    scrollToSection("pakketten");
  };

  return (
    <div data-testid="page-home">
      <HeroSection 
        onConsultationClick={scrollToContact}
        onPackagesClick={scrollToPackages}
      />
      <PackagesSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
    </div>
  );
}
