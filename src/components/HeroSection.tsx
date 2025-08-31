import { SectionCentered } from './sections';

export default function HeroSection() {
  return (
    <SectionCentered
      backgroundColor="background"
      title="Transforme Sua Visão em Realidade"
      subtitle="Criamos experiências digitais únicas que conectam marcas e pessoas"
      description="Nossa abordagem combina design estratégico, tecnologia de ponta e storytelling autêntico para criar soluções que não apenas impressionam, mas geram resultados reais para o seu negócio."
      image={{
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
        alt: "Workspace moderno com design e tecnologia",
        position: "below"
      }}
      primaryCta={{
        text: "Começar Projeto",
        variant: "default"
      }}
      secondaryCta={{
        text: "Ver Portfolio",
        variant: "outline"
      }}
      containerSize="lg"
      padding="xl"
    />
  );
}
