import { SectionFAQ } from './sections';

export default function FAQSection() {
  const faqs = [
    {
      id: "what-services",
      question: "Quais serviços vocês oferecem?",
      answer: "Oferecemos uma gama completa de serviços digitais incluindo design de interfaces (UI/UX), desenvolvimento web e mobile, consultoria em experiência do usuário, criação de design systems, otimização de performance e suporte técnico contínuo.",
      category: "Serviços"
    },
    {
      id: "project-timeline",
      question: "Quanto tempo leva para concluir um projeto?",
      answer: "O prazo varia conforme a complexidade do projeto. Projetos simples como landing pages podem levar de 2-4 semanas, enquanto aplicações mais complexas podem levar de 2-6 meses. Sempre fornecemos um cronograma detalhado na proposta inicial.",
      category: "Prazos"
    },
    {
      id: "pricing-model",
      question: "Como funciona o modelo de precificação?",
      answer: "Trabalhamos com diferentes modelos: projeto fechado (escopo bem definido), por horas (para consultorias e ajustes) ou retainer mensal (para suporte contínuo). Cada projeto recebe uma proposta personalizada baseada em suas necessidades específicas.",
      category: "Investimento"
    },
    {
      id: "design-process",
      question: "Como é o processo de design?",
      answer: "Nosso processo segue metodologias ágeis: descoberta e pesquisa, definição de personas e jornadas, wireframes e protótipos, design visual, testes de usabilidade e iterações. Mantemos o cliente envolvido em cada etapa com apresentações regulares.",
      category: "Processo"
    },
    {
      id: "revisions-included",
      question: "Quantas revisões estão incluídas?",
      answer: "Incluímos até 3 rodadas de revisões em cada etapa do projeto. Revisões adicionais podem ser necessárias para mudanças significativas de escopo e são cobradas separadamente conforme nossa tabela de horas.",
      category: "Processo"
    },
    {
      id: "post-launch-support",
      question: "Vocês oferecem suporte após o lançamento?",
      answer: "Sim! Oferecemos 30 dias de suporte gratuito após o lançamento para correções de bugs e ajustes menores. Também temos planos de suporte mensal para manutenção contínua, atualizações e melhorias.",
      category: "Suporte"
    },
    {
      id: "technologies-used",
      question: "Quais tecnologias vocês utilizam?",
      answer: "Utilizamos tecnologias modernas e confiáveis como React, Next.js, TypeScript, Tailwind CSS, Node.js, e ferramentas de design como Figma. Sempre escolhemos a stack mais adequada para cada projeto específico.",
      category: "Tecnologia"
    },
    {
      id: "client-involvement",
      question: "Como o cliente participa do processo?",
      answer: "Valorizamos a colaboração! Realizamos reuniões semanais de alinhamento, compartilhamos protótipos interativos para feedback, e mantemos comunicação constante via Slack ou Teams. Sua opinião é fundamental em cada decisão.",
      category: "Processo"
    }
  ];

  return (
    <SectionFAQ
      backgroundColor="background"
      layout="accordion"
      title="Perguntas Frequentes"
      subtitle="Tire suas dúvidas sobre nossos serviços e processos"
      description="Reunimos as perguntas mais comuns de nossos clientes. Não encontrou sua dúvida? Entre em contato conosco!"
      faqs={faqs}
      searchable={true}
      categorized={true}
      containerSize="lg"
      padding="xl"
    />
  );
}
