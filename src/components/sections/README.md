# 📚 Componentes de Seção Modulares

Este diretório contém **8 componentes de seção reutilizáveis** e flexíveis para construir landing pages de forma eficiente e profissional.

## 🎯 Visão Geral

Os componentes seguem padrões de mercado comprovados e são totalmente **TypeScript**, **responsivos** e **customizáveis**. Cada componente pode ser usado independentemente ou combinado para criar landing pages completas.

---

## 📦 Componentes Disponíveis

### 1. 🔄 **SectionSplit**
Layout com conteúdo dividido em duas colunas (texto + imagem).

#### **Casos de uso:**
- Hero sections com imagem
- About sections  
- Product demonstrations
- Feature highlights
- Apresentação de serviços

#### **Parâmetros:**

| Parâmetro | Tipo | Obrigatório | Padrão | Descrição |
|-----------|------|-------------|---------|-----------|
| `imagePosition` | `'left' \| 'right'` | ❌ | `'right'` | Posição da imagem em relação ao texto |
| `backgroundColor` | `'background' \| 'muted' \| 'secondary/10' \| 'accent/10' \| 'primary'` | ❌ | `'background'` | Cor de fundo da seção |
| `title` | `string` | ✅ | - | Título principal da seção |
| `subtitle` | `string` | ❌ | - | Subtítulo opcional |
| `description` | `string` | ✅ | - | Descrição principal |
| `image` | `{src: string, alt: string}` | ❌ | - | Objeto com URL e texto alternativo da imagem |
| `cta` | `{text: string, href?: string, onClick?: function, variant?: string}` | ❌ | - | Botão de chamada para ação |
| `children` | `ReactNode` | ❌ | - | Conteúdo adicional (listas, formulários, etc.) |
| `containerSize` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | ❌ | `'lg'` | Tamanho máximo do container |
| `padding` | `'sm' \| 'md' \| 'lg' \| 'xl'` | ❌ | `'lg'` | Espaçamento interno da seção |

#### **Exemplo JSON:**
```json
{
  "imagePosition": "right",
  "backgroundColor": "muted",
  "title": "Nossa História",
  "subtitle": "Mais de uma década criando conexões autênticas",
  "description": "Fundada em 2012, nossa jornada começou com uma simples convicção: o design tem o poder de transformar negócios e vidas.",
  "image": {
    "src": "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    "alt": "Equipe colaborativa trabalhando"
  },
  "cta": {
    "text": "Conheça Nossa Equipe",
    "variant": "outline"
  },
  "containerSize": "lg",
  "padding": "xl"
}
```

### 2. 🔲 **SectionGrid**
Layout em grade para múltiplos itens organizados em cards.

#### **Casos de uso:**
- Features/benefícios
- Produtos/serviços
- Team members
- Portfolio items
- Serviços oferecidos

#### **Parâmetros:**

| Parâmetro | Tipo | Obrigatório | Padrão | Descrição |
|-----------|------|-------------|---------|-----------|
| `columns` | `2 \| 3 \| 4` | ❌ | `3` | Número de colunas no grid |
| `backgroundColor` | `'background' \| 'muted' \| 'secondary/10' \| 'accent/10' \| 'primary'` | ❌ | `'background'` | Cor de fundo da seção |
| `title` | `string` | ✅ | - | Título principal da seção |
| `subtitle` | `string` | ❌ | - | Subtítulo opcional |
| `description` | `string` | ❌ | - | Descrição da seção |
| `items` | `GridItem[]` | ✅ | - | Array de itens para exibir no grid |
| `cardStyle` | `'default' \| 'minimal' \| 'elevated' \| 'bordered'` | ❌ | `'default'` | Estilo visual dos cards |
| `containerSize` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | ❌ | `'lg'` | Tamanho máximo do container |
| `padding` | `'sm' \| 'md' \| 'lg' \| 'xl'` | ❌ | `'lg'` | Espaçamento interno da seção |

#### **Estrutura do GridItem:**
```typescript
interface GridItem {
  id: string;
  title: string;
  description: string;
  icon?: ReactNode;
  image?: {src: string, alt: string};
  badge?: string;
  link?: {href: string, text: string};
}
```

#### **Exemplo JSON:**
```json
{
  "columns": 3,
  "backgroundColor": "muted",
  "title": "Por Que Escolher Nossos Serviços?",
  "subtitle": "Soluções completas para impulsionar seu negócio digital",
  "description": "Combinamos expertise técnica com visão estratégica para entregar resultados que superam expectativas.",
  "items": [
    {
      "id": "design-system",
      "title": "Design System",
      "description": "Criamos sistemas de design escaláveis que garantem consistência visual e experiência unificada.",
      "image": {
        "src": "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        "alt": "Design system components"
      },
      "badge": "Popular"
    },
    {
      "id": "development",
      "title": "Desenvolvimento",
      "description": "Desenvolvemos aplicações web modernas, responsivas e otimizadas para performance.",
      "image": {
        "src": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        "alt": "Clean code on screens"
      }
    }
  ],
  "cardStyle": "elevated",
  "containerSize": "xl",
  "padding": "xl"
}
```

### 3. 🎯 **SectionCentered**
Conteúdo centralizado, ideal para hero sections e CTAs impactantes.

#### **Casos de uso:**
- Hero principal
- Newsletter signup
- Pricing highlight
- Video showcase
- Apresentação de produto

#### **Parâmetros:**

| Parâmetro | Tipo | Obrigatório | Padrão | Descrição |
|-----------|------|-------------|---------|-----------|
| `backgroundColor` | `'background' \| 'muted' \| 'secondary/10' \| 'accent/10' \| 'primary'` | ❌ | `'background'` | Cor de fundo da seção |
| `title` | `string` | ✅ | - | Título principal da seção |
| `subtitle` | `string` | ❌ | - | Subtítulo opcional |
| `description` | `string` | ❌ | - | Descrição da seção |
| `image` | `{src: string, alt: string, position?: 'above' \| 'below' \| 'background'}` | ❌ | - | Imagem com posicionamento |
| `video` | `{src: string, poster?: string, position?: 'above' \| 'below' \| 'background'}` | ❌ | - | Vídeo com posicionamento |
| `primaryCta` | `{text: string, href?: string, onClick?: function, variant?: string}` | ❌ | - | Botão principal de ação |
| `secondaryCta` | `{text: string, href?: string, onClick?: function, variant?: string}` | ❌ | - | Botão secundário de ação |
| `children` | `ReactNode` | ❌ | - | Conteúdo adicional |
| `containerSize` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | ❌ | `'lg'` | Tamanho máximo do container |
| `padding` | `'sm' \| 'md' \| 'lg' \| 'xl'` | ❌ | `'lg'` | Espaçamento interno da seção |
| `textAlign` | `'left' \| 'center'` | ❌ | `'center'` | Alinhamento do texto |

#### **Exemplo JSON:**
```json
{
  "backgroundColor": "background",
  "title": "Transforme Sua Visão em Realidade",
  "subtitle": "Criamos experiências digitais únicas que conectam marcas e pessoas",
  "description": "Nossa abordagem combina design estratégico, tecnologia de ponta e storytelling autêntico para criar soluções que geram resultados reais.",
  "image": {
    "src": "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    "alt": "Workspace moderno com design e tecnologia",
    "position": "below"
  },
  "primaryCta": {
    "text": "Começar Projeto",
    "variant": "default"
  },
  "secondaryCta": {
    "text": "Ver Portfolio",
    "variant": "outline"
  },
  "containerSize": "lg",
  "padding": "xl"
}
```

### 4. 📊 **SectionStats**
Exibição de números e estatísticas para social proof.

#### **Casos de uso:**
- Métricas de sucesso
- Social proof
- Achievements
- Company stats
- Resultados de clientes

#### **Parâmetros:**

| Parâmetro | Tipo | Obrigatório | Padrão | Descrição |
|-----------|------|-------------|---------|-----------|
| `layout` | `'horizontal' \| 'grid'` | ❌ | `'horizontal'` | Layout dos números (linha ou grade) |
| `backgroundColor` | `'background' \| 'muted' \| 'secondary/10' \| 'accent/10' \| 'primary'` | ❌ | `'background'` | Cor de fundo da seção |
| `title` | `string` | ❌ | - | Título da seção |
| `subtitle` | `string` | ❌ | - | Subtítulo opcional |
| `description` | `string` | ❌ | - | Descrição da seção |
| `stats` | `Stat[]` | ✅ | - | Array de estatísticas |
| `statStyle` | `'default' \| 'minimal' \| 'card' \| 'highlighted'` | ❌ | `'default'` | Estilo visual das estatísticas |
| `containerSize` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | ❌ | `'lg'` | Tamanho máximo do container |
| `padding` | `'sm' \| 'md' \| 'lg' \| 'xl'` | ❌ | `'lg'` | Espaçamento interno da seção |

#### **Estrutura do Stat:**
```typescript
interface Stat {
  id: string;
  number: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  suffix?: string;
  prefix?: string;
}
```

#### **Exemplo JSON:**
```json
{
  "layout": "horizontal",
  "backgroundColor": "secondary/10",
  "title": "Números que Falam por Si",
  "subtitle": "Resultados comprovados em mais de uma década de mercado",
  "stats": [
    {
      "id": "clients",
      "number": "200",
      "label": "Clientes Satisfeitos",
      "description": "Empresas que confiaram em nosso trabalho",
      "suffix": "+"
    },
    {
      "id": "projects",
      "number": "350",
      "label": "Projetos Entregues",
      "description": "Soluções desenvolvidas com excelência",
      "suffix": "+"
    },
    {
      "id": "experience",
      "number": "12",
      "label": "Anos de Experiência",
      "description": "Expertise consolidada no mercado"
    },
    {
      "id": "satisfaction",
      "number": "98",
      "label": "Taxa de Satisfação",
      "description": "Clientes que recomendam nossos serviços",
      "suffix": "%"
    }
  ],
  "statStyle": "card",
  "containerSize": "xl",
  "padding": "xl"
}
```

### 5. 💬 **SectionTestimonials**
Depoimentos e avaliações de clientes para social proof.

#### **Casos de uso:**
- Customer reviews
- Case studies
- Social proof
- Success stories
- Avaliações de cursos

#### **Parâmetros:**

| Parâmetro | Tipo | Obrigatório | Padrão | Descrição |
|-----------|------|-------------|---------|-----------|
| `layout` | `'grid' \| 'carousel' \| 'featured' \| 'list'` | ❌ | `'grid'` | Layout dos depoimentos |
| `columns` | `1 \| 2 \| 3` | ❌ | `2` | Número de colunas (apenas para grid) |
| `backgroundColor` | `'background' \| 'muted' \| 'secondary/10' \| 'accent/10' \| 'primary'` | ❌ | `'background'` | Cor de fundo da seção |
| `title` | `string` | ✅ | - | Título da seção |
| `subtitle` | `string` | ❌ | - | Subtítulo opcional |
| `description` | `string` | ❌ | - | Descrição da seção |
| `testimonials` | `Testimonial[]` | ✅ | - | Array de depoimentos |
| `showRating` | `boolean` | ❌ | `true` | Exibir sistema de estrelas |
| `containerSize` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | ❌ | `'lg'` | Tamanho máximo do container |
| `padding` | `'sm' \| 'md' \| 'lg' \| 'xl'` | ❌ | `'lg'` | Espaçamento interno da seção |

#### **Estrutura do Testimonial:**
```typescript
interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  featured?: boolean;
}
```

#### **Exemplo JSON:**
```json
{
  "layout": "featured",
  "backgroundColor": "muted",
  "title": "O Que Dizem Nossos Clientes",
  "subtitle": "Histórias reais de transformação e sucesso",
  "description": "Mais de 200 empresas já confiaram em nosso trabalho para transformar suas ideias em realidade digital.",
  "testimonials": [
    {
      "id": "marina-silva",
      "content": "A parceria com a equipe foi transformadora. Eles não apenas entregaram um produto excepcional, mas nos ajudaram a repensar completamente nossa estratégia digital.",
      "author": {
        "name": "Marina Silva",
        "role": "CEO",
        "company": "TechInnovate",
        "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786"
      },
      "rating": 5,
      "featured": true
    }
  ],
  "showRating": true,
  "containerSize": "xl",
  "padding": "xl"
}
```

---

### 6. ❓ **SectionFAQ**
Perguntas frequentes com busca e categorização.

#### **Casos de uso:**
- FAQ pages
- Support sections
- Product information
- Course details
- Dúvidas comuns

#### **Parâmetros:**

| Parâmetro | Tipo | Obrigatório | Padrão | Descrição |
|-----------|------|-------------|---------|-----------|
| `layout` | `'accordion' \| 'grid' \| 'list'` | ❌ | `'accordion'` | Layout das perguntas |
| `columns` | `1 \| 2` | ❌ | `1` | Número de colunas (apenas para grid) |
| `backgroundColor` | `'background' \| 'muted' \| 'secondary/10' \| 'accent/10' \| 'primary'` | ❌ | `'background'` | Cor de fundo da seção |
| `title` | `string` | ✅ | - | Título da seção |
| `subtitle` | `string` | ❌ | - | Subtítulo opcional |
| `description` | `string` | ❌ | - | Descrição da seção |
| `faqs` | `FAQItem[]` | ✅ | - | Array de perguntas e respostas |
| `searchable` | `boolean` | ❌ | `false` | Habilitar busca nas perguntas |
| `categorized` | `boolean` | ❌ | `false` | Habilitar filtro por categorias |
| `containerSize` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | ❌ | `'lg'` | Tamanho máximo do container |
| `padding` | `'sm' \| 'md' \| 'lg' \| 'xl'` | ❌ | `'lg'` | Espaçamento interno da seção |

#### **Estrutura do FAQItem:**
```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
```

#### **Exemplo JSON:**
```json
{
  "layout": "accordion",
  "backgroundColor": "background",
  "title": "Perguntas Frequentes",
  "subtitle": "Tire suas dúvidas sobre nossos serviços e processos",
  "description": "Reunimos as perguntas mais comuns de nossos clientes. Não encontrou sua dúvida? Entre em contato conosco!",
  "faqs": [
    {
      "id": "what-services",
      "question": "Quais serviços vocês oferecem?",
      "answer": "Oferecemos uma gama completa de serviços digitais incluindo design de interfaces (UI/UX), desenvolvimento web e mobile, consultoria em experiência do usuário, criação de design systems, otimização de performance e suporte técnico contínuo.",
      "category": "Serviços"
    },
    {
      "id": "project-timeline",
      "question": "Quanto tempo leva para concluir um projeto?",
      "answer": "O prazo varia conforme a complexidade do projeto. Projetos simples como landing pages podem levar de 2-4 semanas, enquanto aplicações mais complexas podem levar de 2-6 meses.",
      "category": "Prazos"
    }
  ],
  "searchable": true,
  "categorized": true,
  "containerSize": "lg",
  "padding": "xl"
}
```

---

### 7. 🚀 **SectionCTA**
Chamadas para ação com diferentes estilos e estratégias.

#### **Casos de uso:**
- Final CTA
- Newsletter signup
- Product purchase
- Course enrollment
- Lead generation

#### **Parâmetros:**

| Parâmetro | Tipo | Obrigatório | Padrão | Descrição |
|-----------|------|-------------|---------|-----------|
| `style` | `'simple' \| 'with-benefits' \| 'with-urgency' \| 'with-guarantee' \| 'dual'` | ❌ | `'simple'` | Estilo do CTA |
| `backgroundColor` | `'background' \| 'muted' \| 'secondary/10' \| 'accent/10' \| 'primary'` | ❌ | `'primary'` | Cor de fundo da seção |
| `title` | `string` | ✅ | - | Título da seção |
| `subtitle` | `string` | ❌ | - | Subtítulo opcional |
| `description` | `string` | ❌ | - | Descrição da seção |
| `benefits` | `string[]` | ❌ | - | Lista de benefícios (para style 'with-benefits') |
| `urgency` | `{text: string, countdown?: {endDate: Date}}` | ❌ | - | Elementos de urgência |
| `guarantee` | `{text: string, icon?: ReactNode, badge?: string}` | ❌ | - | Garantia oferecida |
| `primaryCta` | `{text: string, href?: string, onClick?: function, variant?: string}` | ✅ | - | Botão principal |
| `secondaryCta` | `{text: string, href?: string, onClick?: function, variant?: string}` | ❌ | - | Botão secundário |
| `children` | `ReactNode` | ❌ | - | Conteúdo adicional |
| `containerSize` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | ❌ | `'lg'` | Tamanho máximo do container |
| `padding` | `'sm' \| 'md' \| 'lg' \| 'xl'` | ❌ | `'lg'` | Espaçamento interno da seção |

#### **Exemplo JSON:**
```json
{
  "style": "with-guarantee",
  "backgroundColor": "primary",
  "title": "Pronto Para Transformar Seu Negócio?",
  "subtitle": "Vamos conversar sobre como podemos ajudar você a alcançar seus objetivos",
  "description": "Cada projeto é único, assim como cada cliente. Nossa abordagem personalizada garante que você receba exatamente o que precisa para crescer.",
  "benefits": [
    "Consulta gratuita de 30 minutos",
    "Proposta personalizada em 48h",
    "Acompanhamento dedicado durante todo o projeto",
    "Garantia de satisfação ou seu dinheiro de volta"
  ],
  "guarantee": {
    "text": "Garantia de 30 dias ou seu dinheiro de volta",
    "badge": "100% Seguro"
  },
  "primaryCta": {
    "text": "Agendar Consulta Gratuita",
    "variant": "default"
  },
  "secondaryCta": {
    "text": "Ver Portfolio Completo",
    "variant": "outline"
  },
  "containerSize": "lg",
  "padding": "xl"
}
```

---

### 8. ⚡ **SectionAlternating**
Conteúdo alternado em zigue-zague para storytelling.

#### **Casos de uso:**
- Feature walkthrough
- Process steps
- Product benefits
- How it works
- Timeline de processo

#### **Parâmetros:**

| Parâmetro | Tipo | Obrigatório | Padrão | Descrição |
|-----------|------|-------------|---------|-----------|
| `backgroundColor` | `'background' \| 'muted' \| 'secondary/10' \| 'accent/10' \| 'primary'` | ❌ | `'background'` | Cor de fundo da seção |
| `title` | `string` | ❌ | - | Título da seção |
| `subtitle` | `string` | ❌ | - | Subtítulo opcional |
| `description` | `string` | ❌ | - | Descrição da seção |
| `items` | `AlternatingItem[]` | ✅ | - | Array de itens alternados |
| `containerSize` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | ❌ | `'lg'` | Tamanho máximo do container |
| `padding` | `'sm' \| 'md' \| 'lg' \| 'xl'` | ❌ | `'lg'` | Espaçamento interno da seção |
| `itemSpacing` | `'sm' \| 'md' \| 'lg' \| 'xl'` | ❌ | `'lg'` | Espaçamento entre itens |

#### **Estrutura do AlternatingItem:**
```typescript
interface AlternatingItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: {src: string, alt: string};
  icon?: ReactNode;
  badge?: string;
  cta?: {text: string, href?: string, onClick?: function, variant?: string};
  list?: string[];
}
```

#### **Exemplo JSON:**
```json
{
  "backgroundColor": "background",
  "title": "Como Funciona Nosso Processo",
  "subtitle": "Do conceito à entrega, um processo transparente e eficiente",
  "items": [
    {
      "id": "discovery",
      "title": "Descoberta e Estratégia",
      "subtitle": "Entendemos seu negócio e objetivos",
      "description": "Realizamos uma análise profunda do seu negócio, público-alvo e concorrência para criar uma estratégia sólida e direcionada.",
      "image": {
        "src": "https://images.unsplash.com/photo-1552664730-d307ca884978",
        "alt": "Equipe em processo de descoberta"
      },
      "list": [
        "Análise de mercado e concorrência",
        "Definição de personas e jornadas",
        "Mapeamento de objetivos e KPIs"
      ]
    },
    {
      "id": "design",
      "title": "Design e Prototipação",
      "subtitle": "Criamos a experiência perfeita",
      "description": "Desenvolvemos wireframes, protótipos interativos e o design final, sempre com foco na experiência do usuário e nos objetivos de negócio.",
      "image": {
        "src": "https://images.unsplash.com/photo-1561070791-2526d30994b5",
        "alt": "Processo de design e prototipação"
      },
      "cta": {
        "text": "Ver Nosso Portfolio",
        "variant": "outline"
      }
    }
  ],
  "containerSize": "lg",
  "padding": "xl",
  "itemSpacing": "lg"
}
```

---

## 🎨 Props Comuns

Todos os componentes compartilham estas props básicas:

### **Tabela de Props Globais:**

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `backgroundColor` | `'background' \| 'muted' \| 'secondary/10' \| 'accent/10' \| 'primary'` | `'background'` | Cor de fundo da seção |
| `containerSize` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'lg'` | Largura máxima do container |
| `padding` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | Espaçamento interno vertical |
| `className` | `string` | - | Classes CSS adicionais |
| `children` | `ReactNode` | - | Conteúdo adicional personalizado |

### **Valores de Container Size:**
- `sm`: max-width: 640px
- `md`: max-width: 768px  
- `lg`: max-width: 1024px
- `xl`: max-width: 1280px
- `full`: width: 100%

### **Valores de Padding:**
- `sm`: py-8 md:py-12
- `md`: py-12 md:py-16
- `lg`: py-16 md:py-24
- `xl`: py-24 md:py-32

---

## 🚀 Como Usar

### **Importação:**
```tsx
import { 
  SectionSplit, 
  SectionGrid, 
  SectionCentered,
  SectionStats,
  SectionTestimonials,
  SectionFAQ,
  SectionCTA,
  SectionAlternating
} from '@/components/sections';
```

### **Exemplo Prático - Landing Page Completa:**
```tsx
export default function LandingPage() {
  return (
    <>
      {/* Hero */}
      <SectionCentered
        title="Transforme Sua Carreira em Tech"
        subtitle="Do zero ao profissional em 12 semanas"
        description="Aprenda as tecnologias mais demandadas do mercado com mentoria individual e projetos reais."
        primaryCta={{ text: "Começar Agora", href: "/inscricao" }}
        secondaryCta={{ text: "Ver Currículo", href: "/curriculo" }}
        backgroundColor="background"
        padding="xl"
      />

      {/* Features */}
      <SectionGrid
        title="Por Que Escolher Nosso Curso?"
        columns={3}
        backgroundColor="muted"
        items={[
          {
            id: "pratica",
            title: "100% Prático",
            description: "Projetos reais desde o primeiro dia",
            icon: <CodeIcon />
          },
          {
            id: "mentoria",
            title: "Mentoria Individual", 
            description: "Acompanhamento personalizado",
            icon: <UserIcon />
          },
          {
            id: "emprego",
            title: "Garantia de Emprego",
            description: "Ou seu dinheiro de volta",
            icon: <BriefcaseIcon />,
            badge: "Garantido"
          }
        ]}
      />

      {/* Stats */}
      <SectionStats
        title="Resultados Comprovados"
        backgroundColor="secondary/10"
        stats={[
          { id: "1", number: "95", label: "Taxa de Empregabilidade", suffix: "%" },
          { id: "2", number: "R$ 8.500", label: "Salário Médio dos Formados" },
          { id: "3", number: "500", label: "Alunos Formados", suffix: "+" },
          { id: "4", number: "4.9", label: "Avaliação dos Alunos", suffix: "/5" }
        ]}
      />

      {/* Testimonials */}
      <SectionTestimonials
        title="Histórias de Sucesso"
        backgroundColor="muted"
        layout="featured"
        testimonials={testimonialData}
      />

      {/* FAQ */}
      <SectionFAQ
        title="Perguntas Frequentes"
        backgroundColor="background"
        searchable={true}
        faqs={faqData}
      />

      {/* CTA Final */}
      <SectionCTA
        title="Pronto Para Mudar Sua Vida?"
        subtitle="Vagas limitadas para a próxima turma"
        backgroundColor="primary"
        style="with-urgency"
        urgency={{ text: "Restam apenas 5 vagas!" }}
        primaryCta={{ text: "Garantir Minha Vaga", href: "/inscricao" }}
        secondaryCta={{ text: "Falar com Consultor", href: "/contato" }}
      />
    </>
  );
}
```

---

## 🎯 Padrões de Design Recomendados

### **Esquema de Cores Alternado:**
```
1. Hero: background (branco/neutro)
2. Features: muted (cinza claro)  
3. About/Process: background (branco/neutro)
4. Stats: secondary/10 (azul claro)
5. Testimonials: muted (cinza claro)
6. FAQ: background (branco/neutro)
7. CTA Final: primary (cor principal)
```

### **Hierarquia de Títulos:**
- **H1**: Apenas no Hero (SEO)
- **H2**: Títulos de seção
- **H3**: Subtítulos e cards
- **H4**: Elementos menores

### **Espaçamentos Consistentes:**
- **Seções principais**: padding="xl" 
- **Seções secundárias**: padding="lg"
- **Elementos compactos**: padding="md"

---

## 📱 Responsividade

### **Breakpoints Utilizados:**
- **Mobile**: < 768px (layout empilhado)
- **Tablet**: 768px - 1024px (2 colunas)
- **Desktop**: > 1024px (layout completo)

### **Comportamento por Componente:**
| Componente | Mobile | Tablet | Desktop |
|------------|--------|--------|---------|
| SectionSplit | Empilhado | Empilhado | 2 colunas |
| SectionGrid | 1 coluna | 2 colunas | 2-4 colunas |
| SectionStats | Empilhado | 2x2 grid | Horizontal |
| SectionTestimonials | 1 coluna | 2 colunas | 2-3 colunas |
| SectionFAQ | 1 coluna | 1 coluna | 1-2 colunas |

---

## 🔧 Customização Avançada

### **Sistema de Fontes:**
```css
/* Títulos principais */
.font-means-web-medium { font-family: 'Means Web', sans-serif; font-weight: 500; }

/* Subtítulos e destaques */
.subtitle { font-family: 'Bevellier', serif; font-weight: 400; }

/* Corpo de texto */
.font-means-web-light { font-family: 'Means Web', sans-serif; font-weight: 300; }
```

### **Variáveis de Cor (shadcn/ui):**
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --muted: 210 40% 98%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 47.4% 11.2%;
}
```

### **Extensão de Componentes:**
```tsx
// Exemplo: SectionSplit customizada
const CustomHeroSection = () => (
  <SectionSplit
    {...heroProps}
    className="relative overflow-hidden"
  >
    {/* Conteúdo adicional */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
    <ParticlesBackground />
  </SectionSplit>
);
```

---

## 💡 Melhores Práticas

### **✅ Faça:**
1. **Use cores alternadas** para criar ritmo visual
2. **Mantenha consistência** nos espaçamentos
3. **Teste em dispositivos móveis** regularmente
4. **Otimize imagens** (WebP, lazy loading)
5. **Use IDs únicos** em todos os itens de array
6. **Implemente CTAs claros** em cada seção relevante

### **❌ Evite:**
1. **Mais de 2 CTAs** na mesma seção
2. **Textos muito longos** em cards
3. **Cores de fundo consecutivas iguais**
4. **Imagens sem alt text**
5. **Layouts muito complexos** no mobile

### **🎯 Conversão:**
1. **Hero**: Foco no valor principal + CTA forte
2. **Features**: Máximo 6 itens, benefícios claros
3. **Social Proof**: Stats + testimonials próximos
4. **FAQ**: Antecipe objeções comuns
5. **CTA Final**: Urgência + garantia + benefício

---

## 🔄 Roadmap e Atualizações

### **🚧 Em Desenvolvimento:**
- [ ] **Animações**: Framer Motion para micro-interações
- [ ] **Performance**: Lazy loading automático de imagens
- [ ] **A11y**: Melhorias de acessibilidade (ARIA, foco)
- [ ] **Temas**: Suporte a múltiplos temas de cor
- [ ] **CMS**: Integração com Strapi/Contentful

### **💡 Futuras Features:**
- [ ] **Analytics**: Tracking automático de conversões
- [ ] **Forms**: Componentes de formulário integrados
- [ ] **Video**: Suporte nativo a vídeos de fundo
- [ ] **Carousel**: Implementação de carrossel para testimonials
- [ ] **Countdown**: Timer de urgência para CTAs

### **📈 Métricas de Sucesso:**
- **Performance**: Lighthouse Score > 95
- **Acessibilidade**: WCAG 2.1 AA compliance
- **Conversão**: Taxa de conversão > 3%
- **Mobile**: Core Web Vitals otimizados

---

## 📞 Suporte

Para dúvidas, sugestões ou reportar bugs:

1. **Documentação**: Consulte este README primeiro
2. **Exemplos**: Veja os componentes em `/src/components/`
3. **Issues**: Abra uma issue no repositório
4. **Discussões**: Use as Discussions para perguntas gerais

**Versão**: 1.0.0 | **Última atualização**: Dezembro 2024
