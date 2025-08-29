import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar } from './ui/avatar';
import { Badge } from './ui/badge';
import { Star, Heart, Quote, Crown, Baby, Home } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  category: 'produto' | 'oficina' | 'atendimento';
  productType?: string;
  image: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Fernanda",
    location: "Blumenau, SC",
    text: "O porta aliança que encomendei superou todas as minhas expectativas! O cuidado em cada detalhe, a delicadeza dos pontos e a perfeita execução da minha ideia fizeram do meu casamento ainda mais especial. Recomendo de coração!",
    rating: 5,
    category: "produto",
    productType: "Porta Aliança",
    image: "/testimonials/maria-fernanda.jpg",
    date: "Janeiro 2024"
  },
  {
    id: 2,
    name: "Ana Clara Santos",
    location: "Pomerode, SC",
    text: "A oficina foi uma experiência transformadora! A professora é extremamente paciente e didática. Saí de lá sabendo bordar e com uma paixão nova. Já estou ansiosa pela próxima oficina!",
    rating: 5,
    category: "oficina",
    image: "/testimonials/ana-clara.jpg",
    date: "Fevereiro 2024"
  },
  {
    id: 3,
    name: "Juliana Costa",
    location: "Florianópolis, SC",
    text: "Encomendei um porta maternidade personalizado para a chegada da minha filha. O resultado foi simplesmente perfeito! Cada pontinho foi feito com tanto amor que emociona. É uma lembrança que guardarei para sempre.",
    rating: 5,
    category: "produto",
    productType: "Porta Maternidade",
    image: "/testimonials/juliana-costa.jpg",
    date: "Dezembro 2023"
  },
  {
    id: 4,
    name: "Rosana Lima",
    location: "Joinville, SC",
    text: "O atendimento é excepcional! Desde o primeiro contato até a entrega, fui tratada com muito carinho e profissionalismo. A qualidade do bordado é artística, cada peça é única e especial.",
    rating: 5,
    category: "atendimento",
    image: "/testimonials/rosana-lima.jpg",
    date: "Novembro 2023"
  },
  {
    id: 5,
    name: "Camila Rodrigues",
    location: "Itajaí, SC",
    text: "Comprei os riscos digitais e foi a melhor escolha! São muito bem elaborados, fáceis de seguir e com instruções claras. Consegui fazer bordados lindos em casa. Vale cada centavo!",
    rating: 5,
    category: "produto",
    productType: "Riscos Digitais",
    image: "/testimonials/camila-rodrigues.jpg",
    date: "Janeiro 2024"
  },
  {
    id: 6,
    name: "Patricia Müller",
    location: "Blumenau, SC",
    text: "Participei de duas oficinas já e posso dizer: é viciante! O ambiente é acolhedor, aprendo muito e ainda faço novos amigos. A professora tem um dom especial para ensinar e inspirar.",
    rating: 5,
    category: "oficina",
    image: "/testimonials/patricia-muller.jpg",
    date: "Fevereiro 2024"
  }
];

const TestimonialsSection = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'produto':
        return Crown;
      case 'oficina':
        return Heart;
      case 'atendimento':
        return Star;
      default:
        return Heart;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'produto':
        return 'Produto';
      case 'oficina':
        return 'Oficina';
      case 'atendimento':
        return 'Atendimento';
      default:
        return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'produto':
        return 'bg-rose-100 text-rose-700';
      case 'oficina':
        return 'bg-purple-100 text-purple-700';
      case 'atendimento':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
            <Star className="h-4 w-4" />
            <span>Avaliações</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
            O que nossas{' '}
            <span className="text-rose-600">Clientes Dizem</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cada depoimento é uma história de carinho, dedicação e arte que toca o coração. 
            Veja o que dizem sobre nossa trabalho.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-rose-600">4.9</div>
            <div className="flex justify-center items-center space-x-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-sm text-slate-600">Avaliação média</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-rose-600">150+</div>
            <div className="text-sm text-slate-600">Clientes satisfeitos</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-rose-600">200+</div>
            <div className="text-sm text-slate-600">Bordados entregues</div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl sm:text-4xl font-bold text-rose-600">98%</div>
            <div className="text-sm text-slate-600">Recomendariam</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const CategoryIcon = getCategoryIcon(testimonial.category);
            
            return (
              <Card 
                key={testimonial.id} 
                className="relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-rose-400" />
                </div>

                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getCategoryColor(testimonial.category)}>
                      <CategoryIcon className="h-3 w-3 mr-1" />
                      {getCategoryName(testimonial.category)}
                    </Badge>
                    
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-3">
                    {/* 
                      TODO: Substituir por fotos reais das clientes
                      - maria-fernanda.jpg: Foto da cliente Maria Fernanda (100x100px)
                      - ana-clara.jpg: Foto da cliente Ana Clara Santos (100x100px)
                      - juliana-costa.jpg: Foto da cliente Juliana Costa (100x100px)
                      - rosana-lima.jpg: Foto da cliente Rosana Lima (100x100px)
                      - camila-rodrigues.jpg: Foto da cliente Camila Rodrigues (100x100px)
                      - patricia-muller.jpg: Foto da cliente Patricia Müller (100x100px)
                      Obs: Usar fotos com permissão ou avatars ilustrativos
                    */}
                    <Avatar className="h-12 w-12 bg-rose-100 flex items-center justify-center">
                      <Heart className="h-6 w-6 text-rose-500" />
                    </Avatar>
                    
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.location}</div>
                      {testimonial.productType && (
                        <div className="text-xs text-rose-600 font-medium">{testimonial.productType}</div>
                      )}
                    </div>

                    <div className="ml-auto text-right">
                      <div className="text-xs text-slate-500">{testimonial.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-8 lg:p-12 rounded-3xl border border-rose-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Crown className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Qualidade Garantida</h3>
              <p className="text-slate-600">
                Cada peça é única e feita com materiais de primeira qualidade, 
                garantindo durabilidade e beleza.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Feito com Amor</h3>
              <p className="text-slate-600">
                Mais de 15 anos de experiência e paixão em cada ponto, 
                criando memórias que duram para sempre.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Satisfação Total</h3>
              <p className="text-slate-600">
                98% das nossas clientes recomendam nosso trabalho. 
                Sua satisfação é nossa maior conquista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
