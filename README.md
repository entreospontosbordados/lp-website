# Landing Page - Maria Silva Bordados

Uma landing page moderna e responsiva para artesã especializada em bordados, construída com **Astro**, **React** e **TailwindCSS**.

## 🎨 Características

- **Design Moderno**: Interface elegante e profissional
- **Totalmente Responsiva**: Otimizada para todos os dispositivos
- **Performance Otimizada**: Carregamento rápido com Astro Islands
- **SEO Friendly**: Meta tags otimizadas e estrutura semântica
- **Acessibilidade**: Componentes acessíveis e navegação por teclado

## 🛠️ Tecnologias Utilizadas

- **Astro 5** - Framework principal para geração estática
- **React 19** - Componentes interativos
- **TailwindCSS 4** - Estilização utilitária
- **TypeScript** - Tipagem estática

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/           # Componentes básicos (Button, Card, Input)
│   ├── sections/     # Seções da landing page
│   └── shared/       # Componentes globais (Footer)
├── layouts/          # Layouts compartilhados
├── pages/            # Páginas (index.astro)
├── styles/           # Estilos globais
└── utils/            # Funções auxiliares
```

## 🚀 Como Usar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd lp-website
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:4321` no seu navegador

### Comandos Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
```

## 📸 Adicionando Imagens

Para que a landing page funcione completamente, adicione as imagens nas seguintes pastas:

```
public/images/
├── artesa-photo.jpg           # Foto da artesã
├── portfolio/                 # Galeria de bordados (6 imagens)
├── products/                  # Fotos dos produtos (6 imagens)
├── workshops/                 # Fotos das oficinas (4 imagens)
├── testimonials/              # Fotos dos clientes (9 imagens)
└── og-image.jpg              # Imagem para redes sociais
```

Consulte o arquivo `public/images/placeholder.md` para especificações detalhadas.

## ⚙️ Personalização

### Cores e Tema

Edite o arquivo `tailwind.config.mjs` para personalizar as cores:

```javascript
colors: {
  primary: { /* Cor principal */ },
  secondary: { /* Cor secundária */ },
  accent: { /* Cor de destaque */ },
}
```

### Conteúdo

1. **Informações da Artesã**: Edite `src/components/sections/About.astro`
2. **Produtos**: Modifique `src/components/sections/Products.astro`
3. **Depoimentos**: Atualize `src/components/sections/Testimonials.astro`
4. **Contato**: Altere os links do WhatsApp e redes sociais

### Meta Tags SEO

Edite `src/pages/index.astro` para personalizar:
- Título da página
- Descrição
- Imagem de compartilhamento

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Netlify

1. Conecte seu repositório ao Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Outros Provedores

O projeto gera arquivos estáticos na pasta `dist/` após o build, compatível com qualquer provedor de hospedagem estática.

## 📱 Seções da Landing Page

1. **Hero** - Apresentação principal com CTAs
2. **Sobre** - História e experiência da artesã
3. **Portfólio** - Galeria de trabalhos realizados
4. **Produtos** - Catálogo de produtos e riscos digitais
5. **Oficinas** - Informações sobre cursos presenciais
6. **Curso Online** - Teaser e captura de leads
7. **Depoimentos** - Feedback de clientes satisfeitos
8. **CTA Final** - Chamada para ação principal
9. **Footer** - Links, contatos e informações

## 🎯 Funcionalidades

- **Navegação suave** entre seções
- **Formulário de captura** de leads
- **Links diretos** para WhatsApp
- **Galeria responsiva** de imagens
- **Filtros de produtos** por categoria
- **Depoimentos com avaliações**
- **Informações de contato** completas

## 📊 Performance

- **Lighthouse Score**: 90+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **Imagens**: Lazy loading automático
- **CSS**: Purged e minificado
- **JavaScript**: Hydratação seletiva

## 🤝 Suporte

Para dúvidas ou suporte, entre em contato através dos canais disponíveis no footer da landing page.

---

**Desenvolvido com ❤️ para artesãs apaixonadas por bordado**