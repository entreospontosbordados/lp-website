import { SectionTestimonials } from './sections';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: "marina-silva",
      content: "A parceria com a equipe foi transformadora. Eles não apenas entregaram um produto excepcional, mas nos ajudaram a repensar completamente nossa estratégia digital. Os resultados superaram todas as expectativas.",
      author: {
        name: "Marina Silva",
        role: "CEO",
        company: "TechInnovate",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      rating: 5,
      featured: true
    },
    {
      id: "carlos-mendes",
      content: "O workshop de Design Thinking revolucionou nossa forma de trabalhar. A equipe agora aborda problemas de forma mais criativa e colaborativa. Foi um investimento que se pagou em poucos meses.",
      author: {
        name: "Carlos Mendes",
        role: "Diretor de Inovação",
        company: "StartupHub",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      rating: 5
    },
    {
      id: "ana-costa",
      content: "Profissionalismo exemplar e entrega no prazo. O novo site aumentou nossas conversões em 180% e melhorou significativamente nossa presença digital.",
      author: {
        name: "Ana Costa",
        role: "Marketing Manager",
        company: "EcoCommerce",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      },
      rating: 5
    },
    {
      id: "roberto-lima",
      content: "A consultoria em UX foi fundamental para otimizar nossa plataforma. Reduzimos o tempo de onboarding em 60% e aumentamos a retenção de usuários.",
      author: {
        name: "Roberto Lima",
        role: "Product Owner",
        company: "FinTech Solutions",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      rating: 5
    }
  ];

  return (
    <SectionTestimonials
      backgroundColor="muted"
      layout="featured"
      title="O Que Dizem Nossos Clientes"
      subtitle="Histórias reais de transformação e sucesso"
      description="Mais de 200 empresas já confiaram em nosso trabalho para transformar suas ideias em realidade digital."
      testimonials={testimonials}
      showRating={true}
      containerSize="xl"
      padding="xl"
    />
  );
}
