export default function PortfolioSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-beige-100 to-brand-green-100">
      <div className="text-center max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-means-web-medium text-brand-green-800 mb-6">
          Nosso Portfólio
        </h2>
        <p className="subtitle text-xl md:text-2xl text-brand-green-700 mb-12">
          Projetos que transformaram negócios e encantaram usuários
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-left border border-brand-green-200">
            <h3 className="font-means-web-medium text-2xl text-brand-green-800 mb-3">TechStart Platform</h3>
            <p className="font-bevellier text-lg text-brand-orange-600 mb-4">
              Plataforma de gestão para startups de tecnologia
            </p>
            <p className="font-means-web-light text-brand-green-600 leading-relaxed">
              Desenvolvemos uma plataforma completa que conecta investidores e startups, 
              resultando em 300% de aumento nas conexões qualificadas e R$ 50M em 
              investimentos facilitados no primeiro ano.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-left border border-brand-orange-200">
            <h3 className="font-means-web-medium text-2xl text-brand-green-800 mb-3">EcoCommerce</h3>
            <p className="font-bevellier text-lg text-brand-orange-600 mb-4">
              E-commerce sustentável para produtos ecológicos
            </p>
            <p className="font-means-web-light text-brand-green-600 leading-relaxed">
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