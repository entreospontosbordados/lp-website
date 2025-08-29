import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const whatsappUrl = "https://wa.me/5547999999999?text=Olá! Gostaria de saber mais sobre seus bordados artesanais.";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="font-playfair text-xl sm:text-2xl font-bold text-slate-800">
              Arte em Bordados
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-slate-700 hover:text-rose-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-slate-700 hover:text-rose-600 transition-colors font-medium"
            >
              Portfólio
            </button>
            <button 
              onClick={() => scrollToSection('produtos')}
              className="text-slate-700 hover:text-rose-600 transition-colors font-medium"
            >
              Produtos
            </button>
            <button 
              onClick={() => scrollToSection('oficinas')}
              className="text-slate-700 hover:text-rose-600 transition-colors font-medium"
            >
              Oficinas
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-slate-700 hover:text-rose-600 transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <Button 
              asChild
              className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-rose-600 hover:bg-slate-100 transition-colors"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-slate-700 hover:text-rose-600 transition-colors font-medium py-2"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-slate-700 hover:text-rose-600 transition-colors font-medium py-2"
              >
                Portfólio
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="block w-full text-left text-slate-700 hover:text-rose-600 transition-colors font-medium py-2"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('oficinas')}
                className="block w-full text-left text-slate-700 hover:text-rose-600 transition-colors font-medium py-2"
              >
                Oficinas
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-slate-700 hover:text-rose-600 transition-colors font-medium py-2"
              >
                Contato
              </button>
              <div className="pt-4">
                <Button 
                  asChild
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-full shadow-lg"
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
