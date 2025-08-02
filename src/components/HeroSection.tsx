import React, { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import RENAN_BRUNO from "@/assets/presentation.jpg";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-blue-900 via-brand-blue-800 to-brand-gray-900"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
        {/* Content */}
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Transforme suas <span className="text-brand-blue-400">Vendas</span>
          </h1>
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Método comprovado de quem já formou dezenas de campeões em vendas
          </h2>
          <p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Aprenda as técnicas, estratégias e segredos que realmente funcionam
            no campo de batalha — direto com quem tem anos de experiência e
            resultados.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={() => scrollToSection("cta")}
              className="group bg-brand-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10">Comprar agora</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            <button
              onClick={() => scrollToSection("sobre")}
              className="text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-blue-600 transition-all duration-300"
            >
              Saiba Mais
            </button>
          </div>
        </div>

        <div
          className={`relative animate-scale-in`}
          style={{ animationDelay: "400ms" }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={RENAN_BRUNO}
              alt="Renan Bruno"
              className="w-full max-h-[550px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-600/20 to-transparent"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>

      {/* Fixed CTA button */}
      <button
        onClick={() => scrollToSection("cta")}
        className="fixed bottom-6 right-6 bg-brand-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-brand-blue-700 transform hover:scale-110 transition-all duration-300 z-40 font-semibold"
      >
        <a target="_blank" href="https://pay.kiwify.com.br/tt552DZ">
          Comprar agora
        </a>
      </button>
    </section>
  );
};

export default HeroSection;
