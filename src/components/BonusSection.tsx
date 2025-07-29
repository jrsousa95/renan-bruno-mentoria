import React from "react";
import { Gift, Shield, BookOpen, MessageCircle, Users } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    {
      icon: BookOpen,
      title: "PDF com ferramentas práticas",
      description: "Aprenda com o guia completo de ferramentas práticas",
      value: "R$ 149",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue-900 to-brand-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {/* Bonuses */}
          <div>
            <div className="flex items-center mb-8">
              <Gift className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Bônus Exclusivos
              </h2>
            </div>

            <div className="space-y-6">
              {bonuses.map((bonus, index) => {
                const Icon = bonus.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-gray-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {bonus.title}
                      </h3>
                      <p className="text-gray-300 mb-2">{bonus.description}</p>
                      <span className="text-yellow-400 font-semibold">
                        Valor: {bonus.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-yellow-400/20 rounded-xl border border-yellow-400/30">
              <div className="text-center">
                <div className="text-sm text-yellow-400 font-semibold mb-1">
                  VALOR TOTAL DOS BÔNUS
                </div>
                <div className="text-3xl font-bold text-yellow-400">R$ 149</div>
                <div className="text-sm text-gray-300 mt-1">
                  Grátis para você!
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          {/* <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 bg-green-500 rounded-full flex items-center justify-center animate-pulse-soft">
                  <div className="w-40 h-40 bg-green-600 rounded-full flex items-center justify-center">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 border-4 border-green-400 rounded-full opacity-30 animate-ping"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mt-6 mb-4">
                Garantia de 30 Dias
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed max-w-md">
                Se você não ficar 100% satisfeito com a mentoria, devolvemos seu
                dinheiro integralmente, sem perguntas.
              </p>

              <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="font-semibold text-green-400">
                  Risco Zero para Você!
                </div>
                <div className="text-sm text-gray-300">
                  Sua satisfação é nossa prioridade
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
