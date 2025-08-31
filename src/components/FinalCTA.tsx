export default function FinalCTA() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-means-web-medium text-primary-foreground mb-6">
          Pronto Para Transformar Seu Negócio?
        </h2>
        <p className="subtitle text-xl md:text-2xl text-primary-foreground/80 mb-8">
          Vamos conversar sobre como podemos ajudar você a alcançar seus objetivos
        </p>
        <div className="bg-card border rounded-lg p-8 mb-8">
          <p className="font-means-web-light text-lg text-muted-foreground leading-relaxed mb-6">
            Cada projeto é único, assim como cada cliente. Nossa abordagem personalizada 
            garante que você receba exatamente o que precisa para crescer e se destacar 
            no mercado digital. Vamos começar essa jornada juntos?
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-means-web-medium hover:bg-accent/90 transition-colors">
              Agendar Consulta Gratuita
            </button>
            <p className="font-bevellier text-muted-foreground">
              Resposta em até 24 horas
            </p>
          </div>
        </div>
        <p className="font-means-web-light text-sm text-primary-foreground/60">
          Mais de 200 empresas já confiaram em nosso trabalho. Seja a próxima história de sucesso.
        </p>
      </div>
    </section>
  );
}