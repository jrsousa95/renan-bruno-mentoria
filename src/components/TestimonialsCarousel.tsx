import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Natan Sousa",
      position: "CEO, TechStart",
      image:
        "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=160/rLizmogKmA23NrM/img_builder_4b0eec82-8e12-49d5-a10a-3a998fa757c3_5f62298e6576425f8f95654677205195.png",
      quote:
        "Comecei no mercado de planos de saúde sem nenhuma pretensão, mas com as estratégias da mentoria, vi que eu poderia alcançar resultados que eu nem imaginava!",
      rating: 5,
    },
    {
      name: "Átila Camelo",
      position: "Fundadora, Marketing Pro",
      image:
        "https://aws-assets.kiwify.com.br/cdn-cgi/image/fit=scale-down,width=160/rLizmogKmA23NrM/img_builder_31cb031d-7a5b-47f5-9643-58a6dbdfb2a3_3b79c69797c441f9a9c755bb78286669.png",
      quote:
        "Todo o suporte que eu tive na mentoria foi essencial para desenvolver minhas habilidades, técnicas de vendas e melhorei 100% a minha abordagem com os clientes. O resultado foi só uma consequência de tudo que eu pude aplicar nos meus atendimentos.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-brand-gray-50 to-brand-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray-800 mb-4">
            O que nossos <span className="text-brand-blue-600">alunos</span>{" "}
            dizem
          </h2>
          <p className="text-xl text-brand-gray-600 max-w-2xl mx-auto">
            Histórias reais de transformação e sucesso
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mx-4">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full object-cover shadow-lg"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <div className="flex justify-center md:justify-start mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg md:text-xl text-brand-gray-700 italic mb-6 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Author */}
                        <div>
                          <div className="font-bold text-brand-gray-800 text-lg">
                            {testimonial.name}
                          </div>
                          {/* <div className="text-brand-gray-600">
                            {testimonial.position}
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-brand-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-brand-gray-600" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-brand-blue-600 w-8"
                    : "bg-brand-gray-300 hover:bg-brand-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
