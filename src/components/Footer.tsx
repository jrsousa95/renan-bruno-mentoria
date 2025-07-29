import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";

import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/renanbruno.vendas?igsh=MWR0eGlxOWwzMTdpaA==",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-brand-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img
                src={logoFooter}
                alt="Renan Bruno - Logo"
                className="h-28 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Acelere seus resultados na venda de planos de saúde com
              estratégias comprovadas! Esse curso para alta performance em
              vendas vai te guiar desde a abordagem até o fechamento, com
              técnicas persuasivas, posicionamento estratégico e mentalidade
              vencedora. Transforme seu desempenho e conquiste mais vendas!
            </p>

            {/* Social media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    className="w-10 h-10 bg-brand-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-blue-600 transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre a Mentoria
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#modulos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Módulos
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-blue-400" />
                <span className="text-gray-400">
                  gerenciarenanbruno@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-blue-400" />
                <span className="text-gray-400">(85) 98555-0187</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-brand-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Renan Bruno. Todos os direitos reservados.
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
