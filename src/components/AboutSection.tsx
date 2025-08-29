import React from 'react';
import { Button } from './ui/button';
import { Heart, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* 
                TODO: Substituir por foto profissional da artesã
                Sugestão: Foto da artesã em seu ateliê, sorrindo, trabalhando em um bordado
                Dimensões ideais: 500x600px, boa iluminação natural
              */}
              <div className="aspect-[4/5] bg-gradient-to-br from-rose-100 to-pink-200 rounded-3xl flex items-center justify-center shadow-xl overflow-hidden">
                <div className="text-center space-y-4 p-8">
                  <Heart className="h-16 w-16 text-rose-500 mx-auto" />
                  <p className="text-slate-600 font-medium">
                    Foto da Artesã
                    <br />
                    <span className="text-sm">Em seu ateliê trabalhando</span>
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-400 rounded-full opacity-30 animate-pulse delay-300"></div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg border border-rose-100">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-rose-100 rounded-lg">
                  <Award className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-900">200+</div>
                  <div className="text-sm text-slate-600">Bordados criados</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            
            {/* Section Header */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Heart className="h-4 w-4" />
                <span>Conheça Nossa História</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-slate-900 leading-tight">
                Uma Paixão que{' '}
                <span className="text-rose-600">Virou Arte</span>
              </h2>
            </div>

            {/* Story Content */}
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Há mais de 15 anos, descobri no bordado livre muito mais que uma técnica artesanal - 
                encontrei uma forma de <span className="text-rose-600 font-semibold">transformar momentos especiais em memórias eternas</span>.
              </p>
              
              <p>
                Cada ponto carrega uma história, cada linha conta uma emoção. Seja um porta aliança 
                para o dia mais importante de sua vida, um porta maternidade para celebrar a chegada 
                de um novo amor, ou uma decoração que aquece o seu lar - 
                <span className="font-semibold text-slate-800"> minha missão é criar peças únicas que tocam o coração</span>.
              </p>

              <p>
                Em nosso ateliê em Blumenau, não apenas criamos bordados, mas também 
                <span className="text-rose-600 font-semibold"> compartilhamos conhecimento</span> através de 
                oficinas presenciais, onde cada aluna descobre sua própria arte interior.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-rose-100 rounded-lg flex-shrink-0">
                  <Heart className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Feito com Amor</h3>
                  <p className="text-sm text-slate-600">Cada peça recebe atenção especial e carinho único</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-3 bg-rose-100 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Qualidade Superior</h3>
                  <p className="text-sm text-slate-600">Materiais nobres e técnicas aperfeiçoadas</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-3 bg-rose-100 rounded-lg flex-shrink-0">
                  <Users className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Atendimento Pessoal</h3>
                  <p className="text-sm text-slate-600">Acompanhamento em cada etapa do processo</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-3 bg-rose-100 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">15+ Anos</h3>
                  <p className="text-sm text-slate-600">De experiência e aperfeiçoamento contínuo</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold group"
              >
                Conheça Meu Portfólio
                <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
