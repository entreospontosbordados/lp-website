export default function TestimonialsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-means-web-medium text-foreground mb-6">
          O Que Dizem Nossos Clientes
        </h2>
        <p className="subtitle text-xl md:text-2xl text-muted-foreground mb-12">
          Histórias reais de transformação e sucesso
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border rounded-lg p-8 text-left">
            <p className="font-means-web-light text-lg text-muted-foreground leading-relaxed mb-6">
              "A parceria com a equipe foi transformadora. Eles não apenas entregaram 
              um produto excepcional, mas nos ajudaram a repensar completamente nossa 
              estratégia digital. Os resultados superaram todas as expectativas."
            </p>
            <div className="flex items-center">
              <div>
                <h4 className="font-means-web-medium text-card-foreground">Marina Silva</h4>
                <p className="font-bevellier text-primary">CEO, TechInnovate</p>
              </div>
            </div>
          </div>
          <div className="bg-card border rounded-lg p-8 text-left">
            <p className="font-means-web-light text-lg text-muted-foreground leading-relaxed mb-6">
              "O workshop de Design Thinking revolucionou nossa forma de trabalhar. 
              A equipe agora aborda problemas de forma mais criativa e colaborativa. 
              Foi um investimento que se pagou em poucos meses."
            </p>
            <div className="flex items-center">
              <div>
                <h4 className="font-means-web-medium text-card-foreground">Carlos Mendes</h4>
                <p className="font-bevellier text-primary">Diretor de Inovação, StartupHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}