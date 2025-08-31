import { SectionCTA } from './sections';
import { Shield } from 'lucide-react';

export default function FinalCTA() {
  const benefits = [
    "Consulta gratuita de 30 minutos",
    "Proposta personalizada em 48h",
    "Acompanhamento dedicado durante todo o projeto",
    "Garantia de satisfação ou seu dinheiro de volta"
  ];

  return (
    <SectionCTA
      backgroundColor="primary"
      style="with-guarantee"
      title="Pronto Para Transformar Seu Negócio?"
      subtitle="Vamos conversar sobre como podemos ajudar você a alcançar seus objetivos"
      description="Cada projeto é único, assim como cada cliente. Nossa abordagem personalizada garante que você receba exatamente o que precisa para crescer e se destacar no mercado digital."
      benefits={benefits}
      guarantee={{
        text: "Garantia de 30 dias ou seu dinheiro de volta",
        icon: <Shield className="w-6 h-6" />,
        badge: "100% Seguro"
      }}
      primaryCta={{
        text: "Agendar Consulta Gratuita",
        variant: "default"
      }}
      secondaryCta={{
        text: "Ver Portfolio Completo",
        variant: "outline"
      }}
      containerSize="lg"
      padding="xl"
    >
      <p className="font-means-web-light text-sm text-primary-foreground/60 mt-8">
        Mais de 200 empresas já confiaram em nosso trabalho. Seja a próxima história de sucesso.
      </p>
    </SectionCTA>
  );
}
