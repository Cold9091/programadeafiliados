import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import LevelsSection from "@/components/LevelsSection";
import CommissionsSection from "@/components/CommissionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <HowItWorks />
        <LevelsSection />
        <CommissionsSection />
        <BenefitsSection />
        <FAQSection />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
