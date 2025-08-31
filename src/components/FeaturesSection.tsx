import { SectionGrid } from './sections';
import { Palette, Code, Users, Zap, Shield, Award } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      id: "design-system",
      title: "Design System",
      description: "Criamos sistemas de design escaláveis que garantem consistência visual e experiência unificada em todos os pontos de contato da sua marca.",
      icon: <Palette className="w-6 h-6" />,
      image: {
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        alt: "Design system components and style guide"
      },
      badge: "Popular"
    },
    {
      id: "development",
      title: "Desenvolvimento",
      description: "Desenvolvemos aplicações web modernas, responsivas e otimizadas para performance, focadas na experiência do usuário e resultados de negócio.",
      icon: <Code className="w-6 h-6" />,
      image: {
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Clean code on multiple screens"
      }
    },
    {
      id: "consultoria",
      title: "Consultoria UX",
      description: "Oferecemos consultoria especializada em UX para otimizar jornadas do usuário, aumentar conversões e melhorar métricas de engajamento.",
      icon: <Users className="w-6 h-6" />,
      image: {
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "UX consultation and user research"
      }
    },
    {
      id: "performance",
      title: "Performance",
      description: "Otimizamos velocidade de carregamento, SEO e Core Web Vitals para garantir que seu site tenha o melhor desempenho possível.",
      icon: <Zap className="w-6 h-6" />,
      image: {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Performance analytics and optimization"
      }
    },
    {
      id: "security",
      title: "Segurança",
      description: "Implementamos as melhores práticas de segurança, proteção de dados e compliance para manter seu negócio protegido.",
      icon: <Shield className="w-6 h-6" />,
      image: {
        src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Cybersecurity and data protection"
      }
    },
    {
      id: "support",
      title: "Suporte Contínuo",
      description: "Oferecemos suporte técnico especializado, manutenção preventiva e atualizações regulares para manter tudo funcionando perfeitamente.",
      icon: <Award className="w-6 h-6" />,
      image: {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        alt: "Customer support and technical assistance"
      }
    }
  ];

  return (
    <SectionGrid
      backgroundColor="muted"
      columns={3}
      title="Por Que Escolher Nossos Serviços?"
      subtitle="Soluções completas para impulsionar seu negócio digital"
      description="Combinamos expertise técnica com visão estratégica para entregar resultados que superam expectativas."
      items={features}
      cardStyle="elevated"
      containerSize="xl"
      padding="xl"
    />
  );
}
