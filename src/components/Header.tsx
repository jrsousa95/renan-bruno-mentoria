import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import logoInverter from "@/assets/logo-inverter.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={isScrolled ? logoInverter : logo}
              alt="Ferraz Santos Advogados"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className={`${
                isScrolled ? "text-brand-gray-700" : "text-white"
              } hover:text-brand-blue-600 transition-colors`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className={`${
                isScrolled ? "text-brand-gray-700" : "text-white"
              } hover:text-brand-blue-600 transition-colors`}
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("modulos")}
              className={`${
                isScrolled ? "text-brand-gray-700" : "text-white"
              } hover:text-brand-blue-600 transition-colors`}
            >
              Módulos
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className={`${
                isScrolled ? "text-brand-gray-700" : "text-white"
              } hover:text-brand-blue-600 transition-colors`}
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="bg-brand-blue-600 text-white px-6 py-2 rounded-lg hover:bg-brand-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Inscrever-se
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-brand-gray-700 transform rotate-0 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-brand-gray-700 transform rotate-0 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left text-brand-gray-700 hover:text-brand-blue-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="block w-full text-left text-brand-gray-700 hover:text-brand-blue-600 transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("modulos")}
              className="block w-full text-left text-brand-gray-700 hover:text-brand-blue-600 transition-colors"
            >
              Módulos
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="block w-full text-left text-brand-gray-700 hover:text-brand-blue-600 transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="block w-full bg-brand-blue-600 text-white px-6 py-2 rounded-lg hover:bg-brand-blue-700 transition-colors"
            >
              Inscrever-se
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
