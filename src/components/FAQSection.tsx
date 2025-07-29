import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quanto tempo dura a mentoria?",
      answer:
        "A mentoria tem duração de 3 meses, com aulas de conteúdo gravado. Você terá tempo suficiente para absorver todo o conhecimento e aplicar as técnicas.",
    },
    {
      question: "Preciso ter experiência prévia em vendas?",
      answer:
        "Não! Nossa mentoria é adequada tanto para iniciantes quanto para profissionais experientes. Começamos do básico e avançamos gradualmente para técnicas mais sofisticadas.",
    },
    {
      question: "Posso aplicar as técnicas em qualquer segmento?",
      answer:
        "Sim! As técnicas ensinadas são universais e podem ser aplicadas em B2B, B2C, vendas online, produtos físicos, serviços e consultoria. Adaptamos os exemplos para diferentes nichos.",
    },
    {
      question: "Qual é o valor do investimento?",
      answer:
        "O investimento é de R$ 197. Considerando os resultados que nossos alunos obtêm, o ROI médio é de 500% nos primeiros 6 meses.",
    },
  ];

  const whatsappNumber = "5585985550187";
  const whatsappMessage =
    "Olá! Gostaria de saber mais sobre a mentoria de vendas.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-brand-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-brand-blue-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-800">
              Perguntas Frequentes
            </h2>
          </div>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Tire todas as suas dúvidas sobre a mentoria
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-brand-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-brand-gray-800 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-brand-gray-400 transform transition-transform duration-300 flex-shrink-0 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFAQ === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 bg-brand-gray-50">
                  <p className="text-brand-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-brand-gray-600 mb-4">
            Ainda tem dúvidas? Fale conosco!
          </p>
          <button className="bg-brand-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-blue-700 transition-colors duration-300">
            <a target="_blank" href={whatsappUrl}>
              Entrar em Contato
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
