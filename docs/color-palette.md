# Paleta de Cores - Padrão shadcn/ui

Este projeto utiliza a paleta de cores padrão do shadcn/ui, garantindo consistência e acessibilidade em todos os componentes.

## 🎨 Sistema de Cores shadcn/ui

O sistema de cores do shadcn/ui é baseado em variáveis CSS que se adaptam automaticamente aos temas light e dark.

### Cores Principais

| Variável | Descrição | Uso Recomendado |
|----------|-----------|-----------------|
| `primary` | Cor principal do sistema | Botões primários, links importantes |
| `secondary` | Cor secundária | Botões secundários, elementos de apoio |
| `accent` | Cor de destaque | Elementos que precisam chamar atenção |
| `muted` | Cor suave | Fundos suaves, texto secundário |
| `destructive` | Cor para ações destrutivas | Botões de deletar, avisos de erro |

### Cores de Fundo e Texto

| Variável | Descrição |
|----------|-----------|
| `background` | Fundo principal da aplicação |
| `foreground` | Texto principal |
| `card` | Fundo de cards |
| `card-foreground` | Texto em cards |
| `popover` | Fundo de popovers |
| `popover-foreground` | Texto em popovers |

### Cores de Interface

| Variável | Descrição |
|----------|-----------|
| `border` | Bordas de elementos |
| `input` | Bordas de inputs |
| `ring` | Cor do focus ring |

## 🌙 Suporte a Tema Dark

O sistema automaticamente suporta tema dark através da classe `.dark` aplicada ao elemento raiz.

## 📝 Como Usar

### Classes Tailwind
```html
<!-- Botões -->
<button class="bg-primary text-primary-foreground">Botão Primário</button>
<button class="bg-secondary text-secondary-foreground">Botão Secundário</button>
<button class="bg-accent text-accent-foreground">Botão de Destaque</button>

<!-- Cards -->
<div class="bg-card text-card-foreground border">
  Conteúdo do card
</div>

<!-- Texto secundário -->
<p class="text-muted-foreground">Texto secundário</p>

<!-- Fundos suaves -->
<div class="bg-muted">Fundo suave</div>
```

### Variáveis CSS Diretas
```css
.custom-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border-color: hsl(var(--border));
}
```

## 🎨 Fontes Customizadas

O projeto mantém as fontes customizadas da marca:

- **Means Web**: Fonte principal para títulos e corpo de texto
  - Light (300): Corpo de texto
  - Medium (500): Títulos
- **Bevellier**: Fonte serif para subtítulos e elementos especiais

### Uso das Fontes
```css
/* Aplicadas automaticamente */
body { font-family: var(--font-family-means-web); }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-family-means-web); }

/* Para subtítulos especiais */
.subtitle, .lead { font-family: var(--font-family-bevellier); }
```

## ✅ Vantagens do Sistema Padrão

1. **Consistência**: Todos os componentes shadcn/ui funcionam perfeitamente
2. **Acessibilidade**: Contrastes testados e aprovados
3. **Manutenibilidade**: Fácil de atualizar e manter
4. **Flexibilidade**: Suporte automático a temas light/dark
5. **Padrão da Indústria**: Segue as melhores práticas do design system

## 🔧 Personalização Futura

Se precisar personalizar cores no futuro, edite as variáveis CSS em `src/styles/global.css`:

```css
:root {
  --primary: 220 14.3% 95.9%; /* Sua cor personalizada */
  --primary-foreground: 220.9 39.3% 11%;
}
```

---

*Esta documentação reflete a implementação atual em `src/styles/global.css` usando o padrão shadcn/ui*