export default function PortfolioSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-means-web-medium text-foreground mb-6">
          Nosso Portfólio
        </h2>
        <p className="subtitle text-xl md:text-2xl text-muted-foreground mb-12">
          Projetos que transformaram negócios e encantaram usuários
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border rounded-lg p-8 text-left">
            <h3 className="font-means-web-medium text-2xl text-card-foreground mb-3">TechStart Platform</h3>
            <p className="font-bevellier text-lg text-primary mb-4">
              Plataforma de gestão para startups de tecnologia
            </p>
            <p className="font-means-web-light text-muted-foreground leading-relaxed">
              Desenvolvemos uma plataforma completa que conecta investidores e startups, 
              resultando em 300% de aumento nas conexões qualificadas e R$ 50M em 
              investimentos facilitados no primeiro ano.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-8 text-left">
            <h3 className="font-means-web-medium text-2xl text-card-foreground mb-3">EcoCommerce</h3>
            <p className="font-bevellier text-lg text-primary mb-4">
              E-commerce sustentável para produtos ecológicos
            </p>
            <p className="font-means-web-light text-muted-foreground leading-relaxed">
              Criamos uma experiência de compra única focada em sustentabilidade, 
              com sistema de rastreamento de impacto ambiental que aumentou as 
              vendas em 250% e engajamento em 180%.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}