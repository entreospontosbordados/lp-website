import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Heart, ArrowRight, Filter, Sparkles, Crown, Baby, Home } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'porta-alianca' | 'porta-maternidade' | 'decorativo';
  image: string;
  description: string;
  featured?: boolean;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Porta Aliança Rosa Delicada",
    category: "porta-alianca",
    image: "/portfolio/porta-alianca-1.jpg",
    description: "Bordado em ponto cheio com flores delicadas em tons de rosa",
    featured: true
  },
  {
    id: 2,
    title: "Porta Maternidade Jardim Encantado",
    category: "porta-maternidade", 
    image: "/portfolio/porta-maternidade-1.jpg",
    description: "Design personalizado com nome do bebê e elementos da natureza"
  },
  {
    id: 3,
    title: "Mandala Floral Decorativa",
    category: "decorativo",
    image: "/portfolio/decorativo-1.jpg", 
    description: "Peça decorativa com padrão mandala em cores vibrantes"
  },
  {
    id: 4,
    title: "Porta Aliança Clássico",
    category: "porta-alianca",
    image: "/portfolio/porta-alianca-2.jpg",
    description: "Elegante bordado em branco com detalhes dourados"
  },
  {
    id: 5,
    title: "Porta Maternidade Lua e Estrelas",
    category: "porta-maternidade",
    image: "/portfolio/porta-maternidade-2.jpg", 
    description: "Tema celestial com bordados em tons de azul e prata"
  },
  {
    id: 6,
    title: "Quadro Decorativo Flores",
    category: "decorativo",
    image: "/portfolio/decorativo-2.jpg",
    description: "Composição floral para decoração de ambientes"
  }
];

const categories = [
  { id: 'all', name: 'Todos', icon: Sparkles },
  { id: 'porta-alianca', name: 'Porta Aliança', icon: Crown },
  { id: 'porta-maternidade', name: 'Porta Maternidade', icon: Baby },
  { id: 'decorativo', name: 'Decorativos', icon: Home }
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const whatsappUrl = "https://wa.me/5547999999999?text=Olá! Vi seu portfólio e gostaria de encomendar um bordado personalizado.";

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
            <Heart className="h-4 w-4" />
            <span>Nossos Trabalhos</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
            Galeria de{' '}
            <span className="text-rose-600">Bordados Únicos</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cada peça conta uma história especial. Explore nossa coleção de bordados artesanais 
            criados com amor e dedicação para momentos inesquecíveis.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-lg'
                    : 'border-rose-200 text-rose-700 hover:bg-rose-50 hover:border-rose-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="font-medium">{category.name}</span>
              </Button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden">
                {/* 
                  TODO: Substituir por imagens reais do portfólio
                  - porta-alianca-1.jpg: Porta aliança rosa delicada (600x400px)
                  - porta-maternidade-1.jpg: Porta maternidade jardim encantado (600x400px) 
                  - decorativo-1.jpg: Mandala floral decorativa (600x400px)
                  - porta-alianca-2.jpg: Porta aliança clássico branco (600x400px)
                  - porta-maternidade-2.jpg: Porta maternidade lua e estrelas (600x400px)
                  - decorativo-2.jpg: Quadro decorativo flores (600x400px)
                */}
                <div className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center space-y-2 p-4">
                    <Heart className="h-12 w-12 text-rose-500 mx-auto" />
                    <p className="text-slate-600 font-medium text-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
                
                {item.featured && (
                  <Badge className="absolute top-4 left-4 bg-rose-600 text-white">
                    Destaque
                  </Badge>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button
                    size="sm"
                    className="bg-white/90 text-slate-800 hover:bg-white transform scale-75 group-hover:scale-100 transition-all duration-300"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="outline" className="text-rose-600 border-rose-200">
                    {categories.find(cat => cat.id === item.category)?.name}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-rose-600 text-white p-12 rounded-3xl shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold">
            Gostou do que viu?
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Cada bordado é único e feito especialmente para você. 
            Vamos criar algo especial juntos!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold group"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Peça Seu Personalizado
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <div className="flex items-center space-x-4 text-white/80">
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4 text-white" />
                <span className="text-sm">Entrega em 15-20 dias</span>
              </div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span className="text-sm">Frete grátis para SC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
