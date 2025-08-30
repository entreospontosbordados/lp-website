export default function CourseTeaser() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-cyan-100">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-means-web-medium text-gray-800 mb-6">
          Curso Completo de UX/UI
        </h2>
        <p className="subtitle text-xl md:text-2xl text-gray-700 mb-8">
          Do conceito ao produto: aprenda a criar experiências que convertem
        </p>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 mb-8">
          <p className="font-means-web-light text-lg text-gray-600 leading-relaxed mb-6">
            Um programa intensivo de 12 semanas que combina teoria sólida com prática real. 
            Você trabalhará em projetos reais, receberá mentoria personalizada e sairá com 
            um portfólio profissional que impressiona recrutadores.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="font-means-web-medium text-2xl text-gray-800 mb-2">12</h3>
              <p className="font-bevellier text-gray-700">Semanas intensivas</p>
            </div>
            <div>
              <h3 className="font-means-web-medium text-2xl text-gray-800 mb-2">5</h3>
              <p className="font-bevellier text-gray-700">Projetos reais</p>
            </div>
            <div>
              <h3 className="font-means-web-medium text-2xl text-gray-800 mb-2">95%</h3>
              <p className="font-bevellier text-gray-700">Taxa de empregabilidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}