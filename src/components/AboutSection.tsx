import { SectionSplit } from './sections';

export default function AboutSection() {
  return (
    <SectionSplit
      backgroundColor="background"
      imagePosition="right"
      title="Nossa História"
      subtitle="Mais de uma década criando conexões autênticas entre marcas e pessoas"
      description="Fundada em 2012, nossa jornada começou com uma simples convicção: o design tem o poder de transformar negócios e vidas. Desde então, temos trabalhado com empresas de todos os tamanhos, desde startups inovadoras até corporações estabelecidas."
      image={{
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        alt: "Equipe colaborativa trabalhando em projetos inovadores"
      }}
      cta={{
        text: "Conheça Nossa Equipe",
        variant: "outline"
      }}
      containerSize="lg"
      padding="xl"
    >
      <div className="space-y-4">
        <p className="font-means-web-light text-base md:text-lg leading-relaxed text-muted-foreground">
          Nossa equipe multidisciplinar combina expertise em design, tecnologia e estratégia 
          para entregar soluções que não apenas atendem às necessidades dos nossos clientes, 
          mas superam suas expectativas e impulsionam seu crescimento.
        </p>
        <ul className="space-y-2">
          <li className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="font-means-web-light text-muted-foreground">+200 projetos entregues</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="font-means-web-light text-muted-foreground">98% de satisfação dos clientes</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <span className="font-means-web-light text-muted-foreground">Equipe especializada e certificada</span>
          </li>
        </ul>
      </div>
    </SectionSplit>
  );
}
