import React, { useState } from "react";
import { Clock, Star, Users, TrendingUp } from "lucide-react";

const CTASection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    { icon: Users, value: "300+", label: "Alunos Transformados" },
    { icon: Star, value: "4.9/5", label: "Avaliação Média" },
    { icon: TrendingUp, value: "+65%", label: "Aumento Médio Vendas" },
    { icon: Clock, value: "3", label: "Meses de acesso" },
  ];

  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-brand-blue-600 via-brand-blue-700 to-brand-blue-800 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="w-8 h-8 mx-auto mb-2 text-brand-blue-200" />
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-brand-blue-200">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Garanta sua <span className="text-yellow-400">Vaga Agora</span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-blue-100 mb-8 leading-relaxed">
            Transforme suas vendas e multiplique seus resultados com nossa
            mentoria exclusiva. Vagas limitadas para garantir qualidade do
            atendimento.
          </p>

          {/* Pricing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-sm text-brand-blue-200 mb-2">
                OFERTA ESPECIAL
              </div>
              <div className="text-sm text-brand-blue-200 line-through mb-1">
                De R$ 394
              </div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                R$ 197
              </div>
              <div className="text-brand-blue-200 mb-4">ou 12x de R$ 20,37</div>
              <div className="bg-yellow-400 text-brand-gray-900 px-4 py-2 rounded-lg font-semibold text-sm">
                50% DE DESCONTO
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className="group relative bg-yellow-400 text-brand-gray-900 px-12 py-6 rounded-xl text-xl font-bold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden">
              <span className="relative z-10">
                <a target="_blank" href="https://pay.kiwify.com.br/tt552DZ">
                  QUERO TRANSFORMAR MINHAS VENDAS
                </a>
              </span>

              {/* Wave effect */}
              <div
                className={`absolute inset-0 bg-white transform origin-left transition-transform duration-500 ${
                  isHovered ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
              ></div>
            </button>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
              LIMITADO
            </div>
          </div>

          {/* Urgency */}
          <div className="mt-8 bg-red-500/20 border border-red-400/30 rounded-lg p-4 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold">
                Restam apenas 12 vagas
              </span>
            </div>
            <div className="text-sm text-red-300 mt-1">
              Oferta válida até o final do mês
            </div>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-brand-blue-200">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
