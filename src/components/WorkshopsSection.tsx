import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { 
  Users, 
  Clock, 
  MapPin, 
  Calendar, 
  Star, 
  CheckCircle, 
  Heart,
  ArrowRight,
  Award,
  Coffee
} from 'lucide-react';

interface Workshop {
  id: number;
  title: string;
  level: 'iniciante' | 'intermediario' | 'avancado';
  duration: string;
  price: number;
  maxStudents: number;
  description: string;
  includes: string[];
  nextDate?: string;
}

const workshops: Workshop[] = [
  {
    id: 1,
    title: "Bordado Livre para Iniciantes",
    level: "iniciante",
    duration: "4 horas",
    price: 120.00,
    maxStudents: 8,
    description: "Aprenda os pontos básicos do bordado livre e crie sua primeira peça.",
    includes: [
      "Todos os materiais inclusos",
      "Bastidor personalizado",
      "Apostila com pontos básicos",
      "Coffee break",
      "Certificado de participação"
    ],
    nextDate: "25/02/2024"
  },
  {
    id: 2,
    title: "Porta Aliança - Técnicas Avançadas",
    level: "intermediario", 
    duration: "6 horas",
    price: 180.00,
    maxStudents: 6,
    description: "Crie um porta aliança único com técnicas especiais de bordado.",
    includes: [
      "Kit completo para porta aliança",
      "Materiais premium inclusos",
      "Técnicas de acabamento",
      "Almoço incluído",
      "Suporte pós-oficina"
    ],
    nextDate: "10/03/2024"
  },
  {
    id: 3,
    title: "Bordado em Tecidos Especiais",
    level: "avancado",
    duration: "8 horas",
    price: 250.00,
    maxStudents: 4,
    description: "Trabalhe com tecidos especiais e aprenda técnicas profissionais.",
    includes: [
      "Variedade de tecidos especiais",
      "Linhas importadas",
      "Técnicas profissionais",
      "Kit de ferramentas", 
      "Mentoria personalizada"
    ],
    nextDate: "17/03/2024"
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    text: "A oficina superou todas as minhas expectativas! Aprendi muito e ainda fiz novos amigos.",
    rating: 5,
    workshop: "Bordado Livre para Iniciantes"
  },
  {
    name: "Ana Costa", 
    text: "Excelente didática e material de primeira qualidade. Já me inscrevi na próxima!",
    rating: 5,
    workshop: "Porta Aliança - Técnicas Avançadas"
  },
  {
    name: "Lucia Santos",
    text: "Ambiente acolhedor e professora muito paciente. Recomendo para todas as idades.",
    rating: 5,
    workshop: "Bordado Livre para Iniciantes"
  }
];

const WorkshopsSection = () => {
  const whatsappUrl = "https://wa.me/5547999999999?text=Olá! Gostaria de saber mais sobre as oficinas de bordado em Blumenau.";

  const getWorkshopWhatsappUrl = (workshopTitle: string) => {
    return `https://wa.me/5547999999999?text=Olá! Gostaria de me inscrever na oficina "${workshopTitle}".`;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'iniciante':
        return 'bg-green-100 text-green-700';
      case 'intermediario':
        return 'bg-yellow-100 text-yellow-700';
      case 'avancado':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getLevelName = (level: string) => {
    switch (level) {
      case 'iniciante':
        return 'Iniciante';
      case 'intermediario':
        return 'Intermediário';
      case 'avancado':
        return 'Avançado';
      default:
        return level;
    }
  };

  return (
    <section id="oficinas" className="py-16 lg:py-24 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">
            <Users className="h-4 w-4" />
            <span>Aprenda Conosco</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
            Oficinas de Bordado em{' '}
            <span className="text-rose-600">Blumenau</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Venha aprender bordado livre em nosso ateliê acolhedor. Turmas pequenas, 
            atenção personalizada e muito carinho em cada aula.
          </p>
        </div>

        {/* Workshop Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="font-semibold text-slate-900">Turmas Pequenas</h3>
            <p className="text-sm text-slate-600">Máximo 8 pessoas por turma para atenção individualizada</p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="font-semibold text-slate-900">Materiais Inclusos</h3>
            <p className="text-sm text-slate-600">Tudo que você precisa está incluído no valor da oficina</p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
              <Coffee className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="font-semibold text-slate-900">Ambiente Acolhedor</h3>
            <p className="text-sm text-slate-600">Ateliê confortável com coffee break e muito carinho</p>
          </div>

          <div className="text-center space-y-3">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-rose-600" />
            </div>
            <h3 className="font-semibold text-slate-900">Suporte Contínuo</h3>
            <p className="text-sm text-slate-600">Apoio mesmo após a oficina para tirar dúvidas</p>
          </div>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {workshops.map((workshop, index) => (
            <Card 
              key={workshop.id} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className={getLevelColor(workshop.level)}>
                    {getLevelName(workshop.level)}
                  </Badge>
                  {workshop.nextDate && (
                    <div className="text-right">
                      <p className="text-xs opacity-80">Próxima turma</p>
                      <p className="font-semibold">{workshop.nextDate}</p>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{workshop.title}</h3>
                
                <div className="flex items-center justify-between text-sm opacity-90">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>Máx. {workshop.maxStudents}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {workshop.description}
                </p>

                {/* Includes */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-slate-900">O que está incluído:</h4>
                  <ul className="space-y-2">
                    {workshop.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-rose-600 mb-1">
                      R$ {workshop.price.toFixed(2).replace('.', ',')}
                    </div>
                    <p className="text-sm text-slate-500">Por pessoa</p>
                  </div>

                  <Button 
                    asChild
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <a 
                      href={getWorkshopWhatsappUrl(workshop.title)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      Reservar Vaga
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Info */}
        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border border-rose-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="h-8 w-8 text-rose-600" />
                <h3 className="text-2xl font-playfair font-bold text-slate-900">
                  Nosso Ateliê
                </h3>
              </div>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Localizado no coração de Blumenau, nosso ateliê é um espaço acolhedor e inspirador, 
                pensado especialmente para o aprendizado do bordado livre.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-600">Estacionamento gratuito</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-600">Fácil acesso por transporte público</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-600">Ambiente climatizado e confortável</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-slate-600">Coffee break incluso</span>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* 
                TODO: Substituir por foto real do ateliê
                Sugestão: Foto do espaço das oficinas, mostrando as mesas, materiais organizados,
                ambiente acolhedor e bem iluminado (600x400px)
              */}
              <div className="aspect-[3/2] bg-gradient-to-br from-rose-100 to-pink-200 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <MapPin className="h-16 w-16 text-rose-500 mx-auto" />
                  <p className="text-slate-600 font-medium">
                    Foto do Ateliê
                    <br />
                    <span className="text-sm">Interior acolhedor e bem equipado</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-slate-900 text-center mb-12">
            O que nossas alunas dizem
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-rose-50 border-rose-100 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.workshop}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white p-12 rounded-3xl shadow-xl">
          <Calendar className="h-12 w-12 mx-auto" />
          
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold">
            Pronta para começar sua jornada no bordado?
          </h3>
          
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco e reserve sua vaga na próxima oficina. 
            Turmas limitadas para garantir a melhor experiência!
          </p>
          
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold group"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              Falar Conosco no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
