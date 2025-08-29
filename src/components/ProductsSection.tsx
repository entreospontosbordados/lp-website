import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingBag, Download, Star, Heart, Crown, Baby, Home, Palette, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: 'prontos' | 'riscos';
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  featured?: boolean;
  digital?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Porta Aliança Elegante",
    category: "prontos",
    price: 89.90,
    originalPrice: 120.00,
    image: "/products/porta-alianca-produto.jpg",
    description: "Porta aliança bordado à mão com flores delicadas, perfeito para casamentos.",
    rating: 4.9,
    reviews: 23,
    featured: true
  },
  {
    id: 2,
    name: "Kit Riscos Porta Maternidade",
    category: "riscos", 
    price: 15.90,
    image: "/products/riscos-maternidade.jpg",
    description: "Pacote com 5 riscos digitais para porta maternidade em diferentes temas.",
    rating: 4.8,
    reviews: 45,
    digital: true
  },
  {
    id: 3,
    name: "Quadro Decorativo Flores",
    category: "prontos",
    price: 65.90,
    image: "/products/quadro-flores.jpg", 
    description: "Quadro bordado 20x25cm com flores coloridas, ideal para decoração.",
    rating: 5.0,
    reviews: 12
  },
  {
    id: 4,
    name: "Riscos Mandala Collection",
    category: "riscos",
    price: 12.90,
    image: "/products/riscos-mandala.jpg",
    description: "Coleção com 8 riscos de mandalas em diferentes tamanhos e complexidades.",
    rating: 4.7,
    reviews: 31,
    digital: true
  },
  {
    id: 5,
    name: "Porta Maternidade Personalizado",
    category: "prontos",
    price: 95.00,
    image: "/products/porta-maternidade-produto.jpg",
    description: "Porta maternidade com nome do bebê bordado, tema à sua escolha.",
    rating: 4.9,
    reviews: 28,
    featured: true
  },
  {
    id: 6,
    name: "Kit Completo Riscos Iniciante",
    category: "riscos",
    price: 24.90,
    originalPrice: 35.00,
    image: "/products/kit-iniciante.jpg",
    description: "Mais de 20 riscos simples para quem está começando no bordado livre.",
    rating: 4.6,
    reviews: 67,
    digital: true
  }
];

const categories = [
  { id: 'all', name: 'Todos', icon: ShoppingBag },
  { id: 'prontos', name: 'Produtos Prontos', icon: Crown },
  { id: 'riscos', name: 'Riscos Digitais', icon: Palette }
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const whatsappUrl = "https://wa.me/5547999999999?text=Olá! Gostaria de saber mais sobre seus produtos e fazer um pedido.";

  const getWhatsappProductUrl = (productName: string) => {
    return `https://wa.me/5547999999999?text=Olá! Tenho interesse no produto "${productName}". Gostaria de mais informações.`;
  };

  return (
    <section id="produtos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
            <ShoppingBag className="h-4 w-4" />
            <span>Nossa Loja</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
            Produtos e{' '}
            <span className="text-rose-600">Riscos para Bordar</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Descubra nossa coleção de bordados prontos e riscos digitais para você criar suas próprias obras de arte.
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden">
                {/* 
                  TODO: Substituir por imagens reais dos produtos
                  - porta-alianca-produto.jpg: Foto do produto porta aliança (400x300px)
                  - riscos-maternidade.jpg: Preview dos riscos para maternidade (400x300px)
                  - quadro-flores.jpg: Foto do quadro bordado com flores (400x300px)
                  - riscos-mandala.jpg: Preview dos riscos mandala (400x300px)
                  - porta-maternidade-produto.jpg: Foto do produto porta maternidade (400x300px)
                  - kit-iniciante.jpg: Preview do kit de riscos iniciante (400x300px)
                */}
                <div className="aspect-[4/3] bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center space-y-2 p-4">
                    {product.digital ? (
                      <Download className="h-12 w-12 text-rose-500 mx-auto" />
                    ) : (
                      <ShoppingBag className="h-12 w-12 text-rose-500 mx-auto" />
                    )}
                    <p className="text-slate-600 font-medium text-sm">
                      {product.name}
                    </p>
                  </div>
                </div>
                
                <div className="absolute top-4 left-4 space-y-2">
                  {product.featured && (
                    <Badge className="bg-rose-600 text-white">
                      Destaque
                    </Badge>
                  )}
                  {product.digital && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Digital
                    </Badge>
                  )}
                </div>

                {product.originalPrice && (
                  <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>
              
              <CardContent className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-semibold text-slate-900 group-hover:text-rose-600 transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                
                <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-rose-600">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-slate-500 line-through">
                          R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    {product.digital && (
                      <p className="text-xs text-slate-500 mt-1">Download imediato</p>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  asChild
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <a 
                    href={getWhatsappProductUrl(product.name)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    {product.digital ? 'Comprar Agora' : 'Falar no WhatsApp'}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 bg-gradient-to-r from-rose-50 to-pink-50 p-12 rounded-3xl border border-rose-100">
          <Heart className="h-12 w-12 text-rose-500 mx-auto" />
          
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-slate-900">
            Não encontrou o que procurava?
          </h3>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Criamos bordados 100% personalizados para ocasiões especiais. 
            Conte-nos sua ideia e faremos um orçamento sob medida!
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold group"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              Solicitar Orçamento Personalizado
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
