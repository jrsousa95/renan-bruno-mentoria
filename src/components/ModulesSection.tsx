import React, { useState } from "react";
import { ChevronDown, PlayCircle, Clock, Award } from "lucide-react";

const ModulesSection = () => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const modules = [
    {
      title: "Módulo 1: Fundamentos da Venda Consultiva",
      duration: "4 semanas",
      lessons: 8,
      description:
        "Aprenda os princípios básicos da venda consultiva e como criar relacionamentos duradouros com seus clientes.",
      topics: [
        "Mindset do vendedor de sucesso",
        "Técnicas de rapport e conexão",
        "Escuta ativa e questionamento estratégico",
        "Identificação de necessidades reais",
      ],
    },
    {
      title: "Módulo 2: Prospecção e Qualificação Avançada",
      duration: "3 semanas",
      lessons: 6,
      description:
        "Domine as estratégias mais eficazes para encontrar e qualificar leads de alta qualidade.",
      topics: [
        "Técnicas de cold calling modernas",
        "LinkedIn para vendas B2B",
        "Qualificação BANT e MEDDIC",
        "Follow-up estratégico",
      ],
    },
    {
      title: "Módulo 3: Apresentação e Demonstração",
      duration: "3 semanas",
      lessons: 6,
      description:
        "Construa apresentações impactantes que convertem prospects em clientes.",
      topics: [
        "Storytelling para vendas",
        "Demonstrações que vendem",
        "Tratamento de objeções",
        "Criação de urgência",
      ],
    },
    {
      title: "Módulo 4: Negociação e Fechamento",
      duration: "4 semanas",
      lessons: 8,
      description:
        "Aprenda técnicas avançadas de negociação e como fechar vendas de alto valor.",
      topics: [
        "Psicologia da negociação",
        "Técnicas de fechamento",
        "Negociação win-win",
        "Upsell e cross-sell",
      ],
    },
    {
      title: "Módulo 5: Gestão de Pipeline e CRM",
      duration: "2 semanas",
      lessons: 4,
      description:
        "Organize e gerencie seu processo de vendas para maximizar resultados.",
      topics: [
        "Configuração de CRM",
        "Métricas e KPIs de vendas",
        "Automação de processos",
        "Análise de performance",
      ],
    },
  ];

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <section id="modulos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-800 mb-4">
            Módulos do <span className="text-brand-blue-600">Curso</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Um programa completo e estruturado para transformar você em um
            especialista em vendas
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="border border-brand-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Module Header */}
              <button
                onClick={() => toggleModule(index)}
                className="w-full p-6 text-left bg-white hover:bg-brand-gray-50 transition-colors duration-300 flex items-center justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-brand-gray-800 mb-2">
                    {module.title}
                  </h3>
                  <div className="flex items-center space-x-6 text-brand-gray-600">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{module.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <PlayCircle className="w-4 h-4" />
                      <span className="text-sm">{module.lessons} aulas</span>
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-brand-gray-400 transform transition-transform duration-300 ${
                    openModule === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Module Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openModule === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 bg-brand-gray-50">
                  <p className="text-brand-gray-700 mb-4 leading-relaxed">
                    {module.description}
                  </p>

                  <h4 className="font-semibold text-brand-gray-800 mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-brand-blue-600" />O que
                    você vai aprender:
                  </h4>

                  <ul className="grid md:grid-cols-2 gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-2 h-2 bg-brand-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-brand-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-brand-blue-50 px-6 py-4 rounded-xl">
            <Award className="w-8 h-8 text-brand-blue-600" />
            <div className="text-left">
              <div className="font-semibold text-brand-gray-800">
                Certificado de Conclusão
              </div>
              <div className="text-brand-gray-600 text-sm">
                Reconhecido pelo mercado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
