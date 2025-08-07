import React, { useState } from "react";
import { ChevronDown, PlayCircle, Clock, Award } from "lucide-react";

const ModulesSection = () => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const modules = [
    {
      title: "Módulo 1: Introdução",
      lessons: 3,
      description:
        "Aprenda os fundamentos essenciais para se tornar um corretor de planos de saúde.",
      topics: [
        "Primeiros passos",
        "Trajetória",
        "O mercado de planos de saúde",
      ],
    },
    {
      title: "Módulo 2: O perfil do representante de sucesso",
      lessons: 3,
      description:
        "Desenvolva as habilidades e mentalidade necessárias para se destacar no mercado.",
      topics: [
        "Perfil do representante de sucesso",
        "Seja intencional",
        "Experiência do cliente",
      ],
    },
    {
      title: "Módulo 3: Táticas de venda",
      lessons: 2,
      description:
        "Aprenda técnicas avançadas de vendas e como superar objeções comuns.",
      topics: ["Táticas de vendas e quebra de objeções", "Vitrine Digital"],
    },
    {
      title: "Módulo 4: Encerramento",
      lessons: 1,
      description: "Encerramento do curso.",
      topics: ["Encerramento"],
    },
  ];

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <section id="modules" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-800 mb-4">
            Módulos do <span className="text-brand-blue-600">Curso</span>
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Descubra os módulos do curso que vão transformar sua carreira como
            corretor de planos de saúde.
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
      </div>
    </section>
  );
};

export default ModulesSection;
