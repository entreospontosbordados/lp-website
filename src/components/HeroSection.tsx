export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-green-50 to-brand-beige-100">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-means-web-medium text-brand-green-800 mb-6">
          Transforme Sua Visão em Realidade
        </h1>
        <p className="subtitle text-xl md:text-2xl text-brand-green-700 mb-8">
          Criamos experiências digitais únicas que conectam marcas e pessoas
        </p>
        <p className="font-means-web-light text-lg text-brand-green-600 leading-relaxed max-w-2xl mx-auto">
          Nossa abordagem combina design estratégico, tecnologia de ponta e storytelling autêntico 
          para criar soluções que não apenas impressionam, mas geram resultados reais para o seu negócio.
        </p>
      </div>
    </section>
  );
}