export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-means-web-medium text-foreground mb-6">
          Nossa História
        </h2>
        <p className="subtitle text-xl md:text-2xl text-muted-foreground mb-8">
          Mais de uma década criando conexões autênticas entre marcas e pessoas
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <p className="font-means-web-light text-lg text-muted-foreground leading-relaxed mb-4">
              Fundada em 2012, nossa jornada começou com uma simples convicção: o design tem o poder 
              de transformar negócios e vidas. Desde então, temos trabalhado com empresas de todos os 
              tamanhos, desde startups inovadoras até corporações estabelecidas.
            </p>
          </div>
          <div>
            <p className="font-means-web-light text-lg text-muted-foreground leading-relaxed">
              Nossa equipe multidisciplinar combina expertise em design, tecnologia e estratégia 
              para entregar soluções que não apenas atendem às necessidades dos nossos clientes, 
              mas superam suas expectativas e impulsionam seu crescimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}