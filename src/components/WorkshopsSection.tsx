export default function WorkshopsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-means-web-medium text-gray-800 mb-6">
          Workshops & Treinamentos
        </h2>
        <p className="subtitle text-xl md:text-2xl text-gray-700 mb-12">
          Capacite sua equipe com conhecimento prático e estratégico
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-means-web-medium text-xl text-gray-800 mb-3">Design Thinking</h3>
            <p className="font-bevellier text-base text-gray-700 mb-3">
              Metodologia centrada no usuário para inovação
            </p>
            <p className="font-means-web-light text-gray-600 leading-relaxed text-sm">
              Workshop prático de 2 dias onde sua equipe aprenderá a aplicar design thinking 
              para resolver problemas complexos e gerar soluções inovadoras.
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-means-web-medium text-xl text-gray-800 mb-3">UX Strategy</h3>
            <p className="font-bevellier text-base text-gray-700 mb-3">
              Estratégia de experiência do usuário para negócios
            </p>
            <p className="font-means-web-light text-gray-600 leading-relaxed text-sm">
              Treinamento intensivo focado em alinhar objetivos de negócio com necessidades 
              dos usuários, criando estratégias de UX que geram resultados mensuráveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}