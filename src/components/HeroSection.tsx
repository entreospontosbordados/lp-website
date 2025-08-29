import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Star, Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5547999999999?text=Olá! Gostaria de conhecer melhor seus bordados artesanais.";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Side */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Bordados Artesanais Únicos</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-slate-900 leading-tight">
                Transforme{' '}
                <span className="text-rose-600 relative">
                  Momentos
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-rose-300 rounded-full"></div>
                </span>
                {' '}em Arte Bordada
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Descubra a magia do bordado livre artesanal. Criamos peças únicas que contam sua história, 
              desde porta alianças especiais até decorações que aquecem o coração.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-rose-500" />
                <span>Feito à Mão</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-rose-500" />
                <span>Peças Únicas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-rose-500" />
                <span>Personalizado</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold group"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Criar Meu Bordado
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('portfolio')}
                className="border-2 border-rose-200 text-rose-700 hover:bg-rose-50 px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-lg font-semibold"
              >
                Ver Portfólio
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-slate-600 font-medium">4.9/5</span>
              </div>
              <div className="text-slate-600">
                <span className="font-semibold text-rose-600">200+</span> bordados criados
              </div>
              <div className="text-slate-600">
                <span className="font-semibold text-rose-600">150+</span> clientes felizes
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* 
                TODO: Substituir por imagem real da artesã trabalhando ou 
                montagem com bordados principais (porta aliança, porta maternidade)
                Sugestão: Imagem em alta resolução (800x600) da artesã bordando
                ou composição artística dos produtos mais vendidos
              */}
              <div className="aspect-square bg-gradient-to-br from-rose-100 to-pink-200 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4 p-8">
                  <Heart className="h-20 w-20 text-rose-500 mx-auto" />
                  <p className="text-slate-600 font-medium">
                    Imagem Principal
                    <br />
                    <span className="text-sm">Artesã trabalhando ou portfólio</span>
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">Disponível agora</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-rose-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Anos de experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
