import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { 
  Monitor, 
  Clock, 
  Users, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Mail,
  Gift,
  Sparkles
} from 'lucide-react';

const CourseTeaser = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar com serviço de email marketing (ex: Mailchimp, ConvertKit)
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const benefits = [
    "Aprenda no seu próprio ritmo",
    "Acesso vitalício ao conteúdo",
    "Suporte direto com a professora",
    "Comunidade exclusiva de alunas",
    "Certificado de conclusão",
    "Bônus: Kit de riscos exclusivos"
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Em Breve</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-slate-900 leading-tight">
              Curso Online de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Bordado Livre
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              O primeiro curso completo de bordado livre online, criado com todo o carinho e 
              expertise de mais de 15 anos ensinando essa arte maravilhosa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Side */}
            <div className="space-y-8">
              
              {/* Course Preview */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-900">
                  O que você vai aprender:
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Pontos básicos e avançados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Escolha de materiais</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Técnicas de acabamento</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Criação de peças únicas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Bordados personalizados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">Dicas profissionais</span>
                  </div>
                </div>
              </div>

              {/* Course Stats */}
              <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-slate-200">
                <div className="text-center">
                  <Monitor className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-600">Videoaulas</div>
                </div>
                <div className="text-center">
                  <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">20h</div>
                  <div className="text-sm text-slate-600">De conteúdo</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">∞</div>
                  <div className="text-sm text-slate-600">Acesso vitalício</div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-slate-900">
                  O que está incluído:
                </h4>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Gift className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sign-up Side */}
            <div>
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50">
                <CardContent className="p-8">
                  
                  {/* Course Image Placeholder */}
                  <div className="mb-8">
                    {/* 
                      TODO: Substituir por imagem do curso
                      Sugestão: Mockup da plataforma do curso ou montagem com capturas 
                      das videoaulas, mostrando a professora ensinando (400x250px)
                    */}
                    <div className="aspect-[8/5] bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center space-y-4 p-6">
                        <Monitor className="h-16 w-16 text-purple-500 mx-auto" />
                        <p className="text-slate-600 font-medium">
                          Preview do Curso
                          <br />
                          <span className="text-sm">Interface da plataforma</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Early Bird Badge */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      <Star className="h-4 w-4" />
                      <span>Desconto exclusivo para primeiras inscrições</span>
                    </div>
                  </div>

                  <div className="text-center space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        Seja a primeira a saber!
                      </h3>
                      <p className="text-slate-600">
                        Cadastre seu e-mail e receba um <span className="font-semibold text-purple-600">desconto especial</span> quando 
                        o curso for lançado.
                      </p>
                    </div>

                    {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Input
                            type="email"
                            placeholder="Seu melhor e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-full border-slate-300 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                        
                        <Button 
                          type="submit"
                          size="lg"
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold group"
                        >
                          Quero Ser Avisada!
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </form>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-4 rounded-full">
                          <CheckCircle className="h-6 w-6" />
                          <span className="font-semibold">E-mail cadastrado com sucesso!</span>
                        </div>
                        <p className="text-sm text-slate-600">
                          Você receberá em primeira mão todas as novidades sobre o curso.
                        </p>
                      </div>
                    )}

                    {/* Guarantee */}
                    <div className="pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-center space-x-2 text-sm text-slate-600">
                        <Mail className="h-4 w-4" />
                        <span>Sem spam. Apenas conteúdo valioso sobre bordado.</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 text-center">
            <p className="text-slate-600 mb-8">
              Mais de <span className="font-bold text-purple-600">500 pessoas</span> já demonstraram interesse no curso!
            </p>
            
            <div className="flex justify-center items-center space-x-2">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${
                    i < 12 ? 'bg-purple-400' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
            
            <p className="text-sm text-slate-500 mt-2">
              60% das vagas já demonstraram interesse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseTeaser;
