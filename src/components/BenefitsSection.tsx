import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award } from "lucide-react";

const BenefitsSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards with staggered delay
            setTimeout(
              () => setVisibleCards((prev) => [true, prev[1], prev[2]]),
              100
            );
            setTimeout(
              () => setVisibleCards((prev) => [prev[0], true, prev[2]]),
              300
            );
            setTimeout(
              () => setVisibleCards((prev) => [prev[0], prev[1], true]),
              500
            );
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

  const benefits = [
    {
      icon: TrendingUp,
      title: "+50% de aumento",
      subtitle: "no faturamento",
      description:
        "Nossos alunos veem resultados reais em até 60 dias com nossas técnicas comprovadas.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Award,
      title: "Técnicas avançadas",
      subtitle: "de negociação",
      description:
        "Aprenda estratégias usadas pelos melhores vendedores do mercado mundial.",
      color: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: Users,
      title: "Networking exclusivo",
      subtitle: "com empreendedores",
      description:
        "Conecte-se com uma comunidade de alto nível e expanda seus negócios.",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <section
      id="beneficios"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-800 mb-4">
            Resultados que{" "}
            <span className="text-brand-blue-600">Transformam</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Descubra como nossa mentoria pode revolucionar suas vendas e seu
            negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                  visibleCards[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-brand-gray-800 mb-2 group-hover:text-brand-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <h4 className="text-lg font-semibold text-brand-gray-600 mb-4">
                  {benefit.subtitle}
                </h4>
                <p className="text-brand-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover effect border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-blue-300 rounded-2xl transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
