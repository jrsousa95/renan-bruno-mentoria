import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, DollarSign, Play, Clock, Users } from "lucide-react";
import profile from "@/assets/profile.png";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Clock,
      title: "+10 anos de experiência",
      description: "Renan tem mais de 10 anos de experiência em vendas.",
    },

    {
      icon: DollarSign,
      title: "+500.000 em vendas",
      description:
        "Renan já gerou mais de meio milhão em vendas de planos de saúde.",
    },
  ];

  return (
    <section id="about-me" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div
            className={`space-y-6 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-800">
              Quem é <span className="text-brand-blue-600">Renan Bruno?</span>
            </h2>
            <p className="text-xl text-brand-gray-600 leading-relaxed">
              Renan Bruno é especialista em vendas de planos de saúde, com anos
              de experiência e dezenas de prêmios conquistados. Sua mentoria já
              transformou a carreira de centenas de vendedores.
            </p>
            <p className="text-xl text-brand-gray-600 leading-relaxed">
              Com uma abordagem prática e resultados comprovados, Renan
              desenvolveu um método único que combina técnicas de vendas,
              psicologia do cliente e estratégias de mercado para maximizar o
              desempenho dos representantes comerciais.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 ${
                      isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-gray-800 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-brand-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <div className="pt-6">
              <button
                onClick={() => scrollToSection("cta")}
                className="bg-brand-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Começar Agora
              </button>
            </div> */}
          </div>

          {/* Image */}
          <div
            className={`relative ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profile}
                alt="Renan Bruno"
                className="w-full h-120 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-600/20 to-transparent"></div>
            </div>

            {/* Floating elements */}
            {/* <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-brand-blue-600">98%</div>
              <div className="text-sm text-brand-gray-600">Satisfação</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-green-600">+5.000</div>
              <div className="text-sm text-brand-gray-600">Alunos</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
