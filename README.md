# Landing Page Modular (Astro + React + Tailwind)

Landing page modular e escalável com seções reutilizáveis, UI kit baseado em shadcn/ui e Tailwind CSS v4. Focada em performance, acessibilidade e fácil customização.

## 🔗 Preview/Deploy

- GitHub Pages (path-based): `https://entreospontosbordados.github.io/lp-website/`
- Configuração de base definida em `astro.config.mjs` (`site` e `base`).

## 🛠️ Tecnologias

- Astro 5 (com `@astrojs/react`)
- React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- shadcn/ui (tokens e componentes React)
- Radix UI (Avatar/Slot), Lucide React (ícones)
- Embla Carousel, Sonner (toasts)

## 🚀 Scripts

```bash
# Instalar dependências
yarn install

# Desenvolvimento
yarn dev

# Build de produção
yarn build

# Preview do build
yarn preview
```

## 📁 Estrutura

```
src/
├── components/
│   ├── Header.tsx, Footer.tsx
│   ├── HeroSection.tsx, FeaturesSection.tsx, AboutSection.tsx
│   ├── StatsSection.tsx, TestimonialsSection.tsx, FAQSection.tsx, FinalCTA.tsx
│   ├── sections/            # Componentes de seção reutilizáveis
│   └── ui/                  # UI kit (button, card, input, etc.)
├── layouts/
│   └── Layout.astro         # Head, fontes, favicon e <slot />
├── pages/
│   ├── index.astro          # Página principal (monta as seções)
│   ├── uikit.astro          # Showcase dos componentes de UI
│   └── markdown-page.md     # Exemplo de conteúdo Markdown
├── styles/
│   └── global.css           # Tailwind v4 + tema + tokens shadcn
└── lib/utils.ts
```

## 🧩 Seções e UI

- Seções disponíveis em `src/components/sections` (documentadas em `src/components/sections/README.md`).
- UI kit em `src/components/ui` com exports centralizados em `index.ts`.
- Página `src/pages/uikit.astro` exibe `UIKitShowcase.tsx` com exemplos.

## 🎨 Estilo e Tema

- Tailwind v4 configurado em `src/styles/global.css` (import `tailwindcss`).
- Tokens e variáveis compatíveis com shadcn/ui definidos em `:root` e `.dark`.
- Fontes personalizadas carregadas de `public/fonts` e referenciadas no CSS.

## ⚙️ SEO e Metadados

- `src/layouts/Layout.astro` define `<title>` e meta tags básicas via props (`title`, `description`, etc.).
- Defina os textos da página em `src/pages/index.astro` (constantes `title` e `description`).

## 🔧 Customização Rápida

- CTAs e textos principais: `src/components/HeroSection.tsx` e `src/components/FinalCTA.tsx`.
- Header/Footer: `src/components/Header.tsx` e `src/components/Footer.tsx`.
- Ícones: `lucide-react` já instalado (ex.: `Shield`).
- Imagens: substitua os `image.src` nas seções ou use arquivos em `public/images`.

## 📦 shadcn/ui

- Componentes base em `src/components/ui`.
- Para adicionar novos componentes, use o CLI do shadcn com Yarn (e o registry configurado via MCP):
```bash
yarn shadcn add button card input
```

## 🚚 Deploy (GitHub Pages)

- `astro.config.mjs` já define `site` e `base` (`/lp-website`).
- Gere o build: `yarn build` → publica a pasta `dist/`.
- Acesse em `https://entreospontosbordados.github.io/lp-website/`.

## 📄 Licenças de Terceiros

- Fontes em `public/fonts` devem respeitar suas licenças.
- Imagens de exemplo (Unsplash) apenas para desenvolvimento.

## 📚 Referências

- Astro: `https://docs.astro.build/`
- Tailwind CSS: `https://tailwindcss.com/`
- shadcn/ui: `https://ui.shadcn.com/`
- Lucide: `https://lucide.dev/`