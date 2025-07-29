import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import AboutSection from "../components/AboutSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ModulesSection from "../components/ModulesSection";
import BonusSection from "../components/BonusSection";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import AboutMe from "@/components/AboutMe";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutMe />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsCarousel />
      <ModulesSection />
      <BonusSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
