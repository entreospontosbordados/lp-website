# Componentes de Seção Modulares

Este diretório contém componentes de seção reutilizáveis e flexíveis para construir landing pages de forma eficiente.

## 📦 Componentes Disponíveis

### 1. **SectionSplit**
Layout com conteúdo dividido em duas colunas (texto + imagem).

**Casos de uso:**
- Hero sections
- About sections  
- Product demonstrations
- Feature highlights

**Props principais:**
- `imagePosition`: 'left' | 'right'
- `title`, `subtitle`, `description`
- `image`: objeto com src e alt
- `cta`: objeto com texto e ação

### 2. **SectionGrid**
Layout em grade para múltiplos itens.

**Casos de uso:**
- Features/benefícios
- Produtos/serviços
- Team members
- Portfolio items

**Props principais:**
- `columns`: 2 | 3 | 4
- `items`: array de objetos com título, descrição, ícone
- `cardStyle`: 'default' | 'minimal' | 'elevated' | 'bordered'

### 3. **SectionCentered**
Conteúdo centralizado, ideal para hero sections e CTAs.

**Casos de uso:**
- Hero principal
- Newsletter signup
- Pricing highlight
- Video showcase

**Props principais:**
- `title`, `subtitle`, `description`
- `primaryCta`, `secondaryCta`
- `image`/`video` com posição (above/below/background)

### 4. **SectionStats**
Exibição de números e estatísticas.

**Casos de uso:**
- Métricas de sucesso
- Social proof
- Achievements
- Company stats

**Props principais:**
- `layout`: 'horizontal' | 'grid'
- `stats`: array com number, label, description
- `statStyle`: 'default' | 'minimal' | 'card' | 'highlighted'

### 5. **SectionTestimonials**
Depoimentos e avaliações de clientes.

**Casos de uso:**
- Customer reviews
- Case studies
- Social proof
- Success stories

**Props principais:**
- `layout`: 'grid' | 'carousel' | 'featured' | 'list'
- `testimonials`: array com content, author, rating
- `showRating`: boolean

### 6. **SectionFAQ**
Perguntas frequentes com diferentes layouts.

**Casos de uso:**
- FAQ pages
- Support sections
- Product information
- Course details

**Props principais:**
- `layout`: 'accordion' | 'grid' | 'list'
- `faqs`: array com question, answer, category
- `searchable`, `categorized`: boolean

### 7. **SectionCTA**
Chamadas para ação com diferentes estilos.

**Casos de uso:**
- Final CTA
- Newsletter signup
- Product purchase
- Course enrollment

**Props principais:**
- `style`: 'simple' | 'with-benefits' | 'with-urgency' | 'with-guarantee' | 'dual'
- `primaryCta`, `secondaryCta`
- `benefits`, `urgency`, `guarantee`

### 8. **SectionAlternating**
Conteúdo alternado em zigue-zague.

**Casos de uso:**
- Feature walkthrough
- Process steps
- Product benefits
- How it works

**Props principais:**
- `items`: array que alterna automaticamente esquerda/direita
- `itemSpacing`: controla espaçamento entre itens

## 🎨 Props Comuns

Todos os componentes compartilham estas props:

### Layout
- `backgroundColor`: 'background' | 'muted' | 'secondary/10' | 'accent/10' | 'primary'
- `containerSize`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `padding`: 'sm' | 'md' | 'lg' | 'xl'

### Styling
- `className`: classes CSS adicionais
- `children`: conteúdo adicional

## 🚀 Como Usar

### Importação
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

### Exemplo Básico
```tsx
<SectionSplit
  imagePosition="right"
  backgroundColor="muted"
  title="Transforme Sua Carreira"
  subtitle="Aprenda as habilidades mais demandadas do mercado"
  description="Nosso curso completo vai te levar do zero ao profissional em 12 semanas."
  image={{
    src: "/images/hero-image.jpg",
    alt: "Estudante aprendendo"
  }}
  cta={{
    text: "Começar Agora",
    onClick: () => console.log('CTA clicked')
  }}
/>
```

### Exemplo com Grid
```tsx
<SectionGrid
  columns={3}
  backgroundColor="background"
  title="Por Que Escolher Nosso Curso?"
  items={[
    {
      id: "1",
      title: "Metodologia Prática",
      description: "Aprenda fazendo projetos reais do mercado",
      icon: <BookIcon />
    },
    {
      id: "2", 
      title: "Mentoria Individual",
      description: "Acompanhamento personalizado durante todo o curso",
      icon: <UserIcon />
    },
    {
      id: "3",
      title: "Certificado Reconhecido",
      description: "Certificação válida em todo território nacional",
      icon: <AwardIcon />
    }
  ]}
/>
```

## 🎯 Padrões de Cores

### Esquema Alternado Recomendado:
1. Hero: `background` (branco)
2. Features: `muted` (cinza claro)
3. About: `background` (branco)
4. Stats: `secondary/10` (azul claro)
5. Testimonials: `muted` (cinza claro)
6. FAQ: `background` (branco)
7. CTA: `primary` (azul escuro)

## 📱 Responsividade

Todos os componentes são totalmente responsivos:
- **Mobile**: Layout empilhado verticalmente
- **Tablet**: Pode manter 2 colunas ou empilhar
- **Desktop**: Layout completo conforme especificado

## 🔧 Customização

### Fontes
- Títulos: `font-means-web-medium`
- Subtítulos: `subtitle` (Bevellier)
- Texto: `font-means-web-light`

### Cores
Utiliza o sistema de cores do shadcn/ui:
- `text-foreground`: texto principal
- `text-muted-foreground`: texto secundário
- `text-primary`: cor de destaque
- `bg-card`: fundo de cards
- `border`: bordas

## 💡 Dicas de Uso

1. **Combine diferentes layouts** para criar páginas únicas
2. **Use cores alternadas** para criar ritmo visual
3. **Mantenha consistência** nos espaçamentos usando as props de padding
4. **Aproveite a flexibilidade** dos children para conteúdo customizado
5. **Teste responsividade** em diferentes tamanhos de tela

## 🔄 Atualizações Futuras

- [ ] Animações com Framer Motion
- [ ] Lazy loading para imagens
- [ ] Suporte a temas customizados
- [ ] Mais variações de layout
- [ ] Integração com CMS
