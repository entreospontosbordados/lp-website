export default function ProductsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary/10">
      <div className="text-center max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-means-web-medium text-foreground mb-6">
          Nossos Produtos
        </h2>
        <p className="subtitle text-xl md:text-2xl text-muted-foreground mb-12">
          Soluções completas para impulsionar seu negócio digital
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-means-web-medium text-2xl text-card-foreground mb-4">Design System</h3>
            <p className="font-means-web-light text-muted-foreground leading-relaxed">
              Criamos sistemas de design escaláveis que garantem consistência visual 
              e experiência unificada em todos os pontos de contato da sua marca.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-means-web-medium text-2xl text-primary mb-4">Plataformas Web</h3>
            <p className="font-means-web-light text-muted-foreground leading-relaxed">
              Desenvolvemos aplicações web modernas, responsivas e otimizadas para 
              performance, focadas na experiência do usuário e resultados de negócio.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-means-web-medium text-2xl text-card-foreground mb-4">Consultoria Digital</h3>
            <p className="font-means-web-light text-muted-foreground leading-relaxed">
              Oferecemos consultoria estratégica para transformação digital, 
              ajudando empresas a navegar e prosperar no ambiente digital atual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}