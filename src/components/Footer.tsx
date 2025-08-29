import React from 'react';
import { Heart, MapPin, Phone, Mail, Instagram, Facebook, Clock, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappUrl = "https://wa.me/5547999999999?text=Olá! Gostaria de saber mais sobre seus bordados.";
  const instagramUrl = "https://instagram.com/artembordados"; // TODO: Substituir pela URL real
  const facebookUrl = "https://facebook.com/artembordados"; // TODO: Substituir pela URL real

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="bg-slate-900 text-white relative">
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-rose-400" />
              <span className="text-2xl font-playfair font-bold">Arte em Bordados</span>
            </div>
            
            <p className="text-slate-300 leading-relaxed">
              Há mais de 15 anos criando bordados únicos que eternizam momentos especiais. 
              Cada ponto é feito com amor e dedicação.
            </p>
            
            <div className="flex space-x-4">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-slate-800 text-slate-300 hover:text-rose-400 transition-colors"
              >
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="p-2 hover:bg-slate-800 text-slate-300 hover:text-rose-400 transition-colors"
              >
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Sobre a Artesã
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('produtos')}
                  className="text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Produtos e Riscos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('oficinas')}
                  className="text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Oficinas
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Nossos Serviços</h3>
            <ul className="space-y-3 text-slate-300">
              <li>Porta Alianças Personalizados</li>
              <li>Porta Maternidade Únicos</li>
              <li>Bordados Decorativos</li>
              <li>Oficinas Presenciais</li>
              <li>Riscos Digitais</li>
              <li>Bordados Sob Medida</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contato</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">WhatsApp</p>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-rose-400 transition-colors font-medium"
                  >
                    (47) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">E-mail</p>
                  <a 
                    href="mailto:contato@artembordados.com.br" 
                    className="text-white hover:text-rose-400 transition-colors font-medium"
                  >
                    contato@artembordados.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Localização</p>
                  <p className="text-white font-medium">
                    Blumenau - SC
                    <br />
                    <span className="text-sm text-slate-300">Atendimento com agendamento</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">Horário</p>
                  <p className="text-white font-medium">
                    Segunda a Sexta
                    <br />
                    <span className="text-sm text-slate-300">9h às 18h</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="pt-4">
              <Button 
                asChild
                className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-400">
              <p>© {currentYear} Arte em Bordados. Todos os direitos reservados.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-rose-400 transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-rose-400 transition-colors">Termos de Uso</a>
              </div>
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="p-2 hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
    </footer>
  );
};

export default Footer;
