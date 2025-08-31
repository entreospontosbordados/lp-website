# UI Kit - Entre os Pontos

Este é o sistema de design e biblioteca de componentes padronizados para o projeto Entre os Pontos.

## 🎯 Objetivo

Manter consistência visual e funcional em toda a aplicação através de componentes reutilizáveis e bem documentados.

## 📁 Estrutura

```
src/components/ui/
├── avatar.tsx      # Componente de avatar/foto de perfil
├── badge.tsx       # Badges para status e categorização
├── button.tsx      # Botões com diferentes variantes
├── card.tsx        # Cards para organização de conteúdo
├── carousel.tsx    # Carrossel de imagens/conteúdo
├── input.tsx       # Campos de entrada de texto
├── sonner.tsx      # Sistema de toast/notificações
├── spinner.tsx     # Indicadores de carregamento
├── textarea.tsx    # Campo de texto multilinha
└── index.ts        # Arquivo de índice para importações
```

## 🚀 Como Usar

### Acessar o UI Kit

Visite `/uikit` para ver todos os componentes disponíveis com exemplos de uso.

### Importar Componentes

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Spinner } from '@/components/ui/spinner';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

// Ou importar múltiplos componentes de uma vez:
import { Button, Card, Badge, Spinner } from '@/components/ui';
```

### Exemplos de Uso

#### Button
```tsx
<Button variant="default">Clique aqui</Button>
<Button variant="outline" size="sm">Pequeno</Button>
<Button variant="ghost">
  <Icon className="mr-2 h-4 w-4" />
  Com ícone
</Button>
```

#### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição opcional</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo do card</p>
  </CardContent>
</Card>
```

#### Badge
```tsx
<Badge variant="default">Padrão</Badge>
<Badge variant="secondary">Secundário</Badge>
<Badge variant="outline">Contorno</Badge>
```

#### Spinner
```tsx
<Spinner size="sm" />
<Spinner variant="secondary" />
<Button disabled>
  <Spinner size="sm" className="mr-2" />
  Carregando...
</Button>
```

#### Toast
```tsx
// Adicione o Toaster no seu layout principal
<Toaster />

// Use em qualquer lugar da aplicação
import { toast } from 'sonner';

toast.success('Sucesso!');
toast.error('Erro!');
toast.info('Informação');
toast.warning('Aviso');

// Toast com ação
toast.message('Item removido', {
  action: {
    label: 'Desfazer',
    onClick: () => toast.success('Desfeito!')
  }
});
```

## 🎨 Variantes Disponíveis

### Button
- `default` - Botão principal
- `secondary` - Botão secundário
- `outline` - Botão com contorno
- `ghost` - Botão transparente
- `link` - Estilo de link
- `destructive` - Para ações destrutivas

### Badge
- `default` - Badge padrão
- `secondary` - Badge secundário
- `outline` - Badge com contorno
- `destructive` - Para status de erro

### Tamanhos
- `sm` - Pequeno
- `default` - Padrão
- `lg` - Grande
- `xl` - Extra grande (para spinners)
- `icon` - Apenas ícone (para botões)

### Spinner
- `default` - Cor primária
- `secondary` - Cor secundária
- `muted` - Cor neutra
- `white` - Branco (para fundos escuros)

## 🛠 Personalização

Todos os componentes utilizam:
- **Tailwind CSS** para estilização
- **class-variance-authority** para variantes
- **clsx** e **tailwind-merge** para composição de classes
- **Radix UI** como base para acessibilidade

### Exemplo de Personalização
```tsx
<Button 
  variant="outline" 
  size="lg"
  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none"
>
  Botão Customizado
</Button>
```

## 📱 Responsividade

Todos os componentes são responsivos por padrão. Use as classes do Tailwind para ajustes específicos:

```tsx
<Button className="w-full sm:w-auto">
  Responsivo
</Button>
```

## ♿ Acessibilidade

Os componentes seguem as melhores práticas de acessibilidade:
- Suporte a navegação por teclado
- ARIA labels apropriados
- Contraste adequado
- Foco visível

## 🔄 Atualizações

Para adicionar novos componentes ou modificar existentes:

1. Siga o padrão dos componentes existentes
2. Use TypeScript para tipagem
3. Adicione exemplos no UIKitShowcase
4. Documente as novas variantes
5. Teste a acessibilidade

## 📚 Recursos

- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
