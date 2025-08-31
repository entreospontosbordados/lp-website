import { SectionStats } from './sections';
import { Users, Award, Clock, TrendingUp } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      id: "clients",
      number: "200",
      label: "Clientes Satisfeitos",
      description: "Empresas que confiaram em nosso trabalho",
      icon: <Users className="w-8 h-8" />,
      suffix: "+"
    },
    {
      id: "projects",
      number: "350",
      label: "Projetos Entregues",
      description: "Soluções desenvolvidas com excelência",
      icon: <Award className="w-8 h-8" />,
      suffix: "+"
    },
    {
      id: "experience",
      number: "12",
      label: "Anos de Experiência",
      description: "Expertise consolidada no mercado",
      icon: <Clock className="w-8 h-8" />
    },
    {
      id: "growth",
      number: "98",
      label: "Taxa de Satisfação",
      description: "Clientes que recomendam nossos serviços",
      icon: <TrendingUp className="w-8 h-8" />,
      suffix: "%"
    }
  ];

  return (
    <SectionStats
      backgroundColor="secondary/10"
      layout="horizontal"
      title="Números que Falam por Si"
      subtitle="Resultados comprovados em mais de uma década de mercado"
      stats={stats}
      statStyle="card"
      containerSize="xl"
      padding="xl"
    />
  );
}
