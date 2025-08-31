export default function ProductsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-orange-50 to-brand-beige-200">
      <div className="text-center max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-means-web-medium text-brand-green-800 mb-6">
          Nossos Produtos
        </h2>
        <p className="subtitle text-xl md:text-2xl text-brand-green-700 mb-12">
          Soluções completas para impulsionar seu negócio digital
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-brand-green-200">
            <h3 className="font-means-web-medium text-2xl text-brand-green-800 mb-4">Design System</h3>
            <p className="font-means-web-light text-brand-green-600 leading-relaxed">
              Criamos sistemas de design escaláveis que garantem consistência visual 
              e experiência unificada em todos os pontos de contato da sua marca.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-brand-orange-200">
            <h3 className="font-means-web-medium text-2xl text-brand-orange-700 mb-4">Plataformas Web</h3>
            <p className="font-means-web-light text-brand-green-600 leading-relaxed">
              Desenvolvemos aplicações web modernas, responsivas e otimizadas para 
              performance, focadas na experiência do usuário e resultados de negócio.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-brand-green-200">
            <h3 className="font-means-web-medium text-2xl text-brand-green-800 mb-4">Consultoria Digital</h3>
            <p className="font-means-web-light text-brand-green-600 leading-relaxed">
              Oferecemos consultoria estratégica para transformação digital, 
              ajudando empresas a navegar e prosperar no ambiente digital atual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}