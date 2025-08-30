export default function FinalCTA() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-means-web-medium text-gray-800 mb-6">
          Pronto Para Transformar Seu Negócio?
        </h2>
        <p className="subtitle text-xl md:text-2xl text-gray-700 mb-8">
          Vamos conversar sobre como podemos ajudar você a alcançar seus objetivos
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-8">
          <p className="font-means-web-light text-lg text-gray-600 leading-relaxed mb-6">
            Cada projeto é único, assim como cada cliente. Nossa abordagem personalizada 
            garante que você receba exatamente o que precisa para crescer e se destacar 
            no mercado digital. Vamos começar essa jornada juntos?
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-means-web-medium hover:bg-gray-700 transition-colors">
              Agendar Consulta Gratuita
            </button>
            <p className="font-bevellier text-gray-600">
              Resposta em até 24 horas
            </p>
          </div>
        </div>
        <p className="font-means-web-light text-sm text-gray-500">
          Mais de 200 empresas já confiaram em nosso trabalho. Seja a próxima história de sucesso.
        </p>
      </div>
    </section>
  );
}