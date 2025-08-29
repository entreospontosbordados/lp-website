import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Heart, Phone, ShoppingBag, Calendar } from 'lucide-react';

const FinalCTA = () => {
  const whatsappUrl = "https://wa.me/5547999999999?text=Olá! Gostaria de criar um bordado especial. Vamos conversar?";
  const productsWhatsappUrl = "https://wa.me/5547999999999?text=Olá! Vi sua loja online e gostaria de fazer um pedido.";
  const workshopWhatsappUrl = "https://wa.me/5547999999999?text=Olá! Tenho interesse em participar de uma oficina de bordado.";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Main CTA Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              <Heart className="h-4 w-4" />
              <span>Momento de Transformar</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-white leading-tight">
              Transforme{' '}
              <span className="relative">
                Momentos
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white/50 rounded-full"></div>
              </span>
              {' '}em Arte Bordada
            </h2>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Sua história merece ser eternizada em cada ponto. 
              Vamos criar algo único e especial juntos?
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-8">
            
            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-bold group min-w-[200px]"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Criar Meu Bordado
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-rose-600 px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg font-bold group min-w-[200px] backdrop-blur-sm"
              >
                <a href={productsWhatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Ver Produtos
                  <ShoppingBag className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>

            {/* Secondary CTA */}
            <div>
              <Button 
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 text-lg font-semibold group"
              >
                <a href={workshopWhatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Agendar Oficina
                  <Calendar className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Feito com Amor</h3>
              <p className="text-white/80 leading-relaxed">
                Cada ponto carrega carinho e dedicação para tornar sua peça única e especial.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Atendimento Pessoal</h3>
              <p className="text-white/80 leading-relaxed">
                Acompanhamento próximo em cada etapa, desde a ideia até a entrega da sua peça.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                <ArrowRight className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Entrega Rápida</h3>
              <p className="text-white/80 leading-relaxed">
                Prazo de 15-20 dias úteis e frete grátis para Santa Catarina.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="pt-8 space-y-4">
            <p className="text-white/90 text-lg">
              📱 <span className="font-semibold">WhatsApp:</span> (47) 99999-9999
            </p>
            <p className="text-white/90 text-lg">
              📍 <span className="font-semibold">Ateliê:</span> Blumenau - SC
            </p>
            <p className="text-white/80">
              Horário de atendimento: Segunda a Sexta, 9h às 18h
            </p>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-white/20 text-white/80">
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span className="text-sm">15+ anos de experiência</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span className="text-sm">200+ bordados criados</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span className="text-sm">150+ clientes satisfeitos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span className="text-sm">Avaliação 4.9/5 ⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
