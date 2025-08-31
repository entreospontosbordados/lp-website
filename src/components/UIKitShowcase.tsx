import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Spinner } from './ui/spinner';
import { Toaster } from './ui/sonner';
import { toast } from 'sonner';
import { 
  Search, 
  Heart, 
  Star, 
  Download, 
  Share2, 
  Settings, 
  User, 
  Mail, 
  Phone,
  MapPin,
  Calendar,
  Clock,
  ChevronRight,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  Zap,
  Palette
} from 'lucide-react';

const UIKitShowcase = () => {
  const [activeSection, setActiveSection] = useState('buttons');

  const sections = [
    { id: 'buttons', name: 'Buttons', icon: Zap },
    { id: 'cards', name: 'Cards', icon: Palette },
    { id: 'badges', name: 'Badges', icon: Star },
    { id: 'avatars', name: 'Avatars', icon: User },
    { id: 'inputs', name: 'Inputs', icon: Mail },
    { id: 'headers', name: 'Headers', icon: Settings },
    { id: 'spinners', name: 'Spinners', icon: Clock },
    { id: 'toasts', name: 'Toasts', icon: Info },
  ];

  const ComponentSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-1">Componentes padronizados para uso consistente</p>
      </div>
      <div className="space-y-8">
        {children}
      </div>
    </div>
  );

  const ExampleGroup = ({ title, description, children }: { 
    title: string; 
    description?: string; 
    children: React.ReactNode 
  }) => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="p-6 border rounded-lg bg-card">
        <div className="flex flex-wrap gap-4 items-center">
          {children}
        </div>
      </div>
    </div>
  );

  const renderButtons = () => (
    <ComponentSection title="Buttons">
      <ExampleGroup title="Variantes" description="Diferentes estilos de botões disponíveis">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="destructive">Destructive</Button>
      </ExampleGroup>

      <ExampleGroup title="Tamanhos" description="Diferentes tamanhos para diferentes contextos">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon"><Settings className="h-4 w-4" /></Button>
      </ExampleGroup>

      <ExampleGroup title="Com Ícones" description="Botões com ícones para melhor UX">
        <Button><Download className="mr-2 h-4 w-4" />Download</Button>
        <Button variant="outline"><Share2 className="mr-2 h-4 w-4" />Compartilhar</Button>
        <Button variant="secondary"><Heart className="mr-2 h-4 w-4" />Favoritar</Button>
        <Button variant="ghost"><Plus className="mr-2 h-4 w-4" />Adicionar</Button>
      </ExampleGroup>

      <ExampleGroup title="Estados" description="Estados especiais dos botões">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>Disabled Outline</Button>
        <Button className="opacity-50 cursor-not-allowed">Loading...</Button>
      </ExampleGroup>
    </ComponentSection>
  );

  const renderCards = () => (
    <ComponentSection title="Cards">
      <ExampleGroup title="Card Básico" description="Estrutura básica de um card">
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content area where you can place any information.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </ExampleGroup>

      <ExampleGroup title="Card com Ação" description="Card com botão de ação no header">
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Produto</CardTitle>
            <CardDescription>Descrição do produto</CardDescription>
            <CardAction>
              <Button size="sm" variant="ghost">
                <Settings className="h-4 w-4" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">Preço: R$ 99,90</p>
              <p className="text-sm text-muted-foreground">Em estoque</p>
            </div>
          </CardContent>
        </Card>
      </ExampleGroup>

      <ExampleGroup title="Card de Perfil" description="Exemplo de card para perfil de usuário">
        <Card className="w-80">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>João Silva</CardTitle>
                <CardDescription>Designer & Desenvolvedor</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4" />
                São Paulo, SP
              </div>
              <div className="flex items-center text-sm">
                <Mail className="mr-2 h-4 w-4" />
                joao@exemplo.com
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Ver Perfil</Button>
          </CardFooter>
        </Card>
      </ExampleGroup>
    </ComponentSection>
  );

  const renderBadges = () => (
    <ComponentSection title="Badges">
      <ExampleGroup title="Variantes" description="Diferentes estilos de badges">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </ExampleGroup>

      <ExampleGroup title="Com Ícones" description="Badges com ícones para contexto adicional">
        <Badge variant="default"><Star className="mr-1 h-3 w-3" />Premium</Badge>
        <Badge variant="secondary"><Check className="mr-1 h-3 w-3" />Verificado</Badge>
        <Badge variant="outline"><Clock className="mr-1 h-3 w-3" />Pendente</Badge>
        <Badge variant="destructive"><AlertCircle className="mr-1 h-3 w-3" />Erro</Badge>
      </ExampleGroup>

      <ExampleGroup title="Status" description="Badges para indicar status">
        <Badge className="bg-green-500 hover:bg-green-600">Ativo</Badge>
        <Badge className="bg-yellow-500 hover:bg-yellow-600">Aguardando</Badge>
        <Badge className="bg-red-500 hover:bg-red-600">Inativo</Badge>
        <Badge className="bg-blue-500 hover:bg-blue-600">Em Progresso</Badge>
      </ExampleGroup>
    </ComponentSection>
  );

  const renderAvatars = () => (
    <ComponentSection title="Avatars">
      <ExampleGroup title="Tamanhos" description="Diferentes tamanhos de avatar">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </ExampleGroup>

      <ExampleGroup title="Fallbacks" description="Avatars com iniciais quando não há imagem">
        <Avatar>
          <AvatarFallback>JS</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>MF</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
        </Avatar>
      </ExampleGroup>
    </ComponentSection>
  );

  const renderInputs = () => (
    <ComponentSection title="Inputs">
      <ExampleGroup title="Input Básico" description="Campos de entrada de texto">
        <div className="space-y-4 w-full max-w-sm">
          <Input placeholder="Digite seu nome..." />
          <Input type="email" placeholder="seu@email.com" />
          <Input type="password" placeholder="Senha" />
          <Input disabled placeholder="Campo desabilitado" />
        </div>
      </ExampleGroup>

      <ExampleGroup title="Textarea" description="Campo de texto multilinha">
        <div className="w-full max-w-sm">
          <Textarea placeholder="Digite sua mensagem aqui..." rows={4} />
        </div>
      </ExampleGroup>

      <ExampleGroup title="Com Ícones" description="Inputs com ícones para melhor UX">
        <div className="space-y-4 w-full max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar..." className="pl-10" />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input type="email" placeholder="Email" className="pl-10" />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input type="tel" placeholder="Telefone" className="pl-10" />
          </div>
        </div>
      </ExampleGroup>
    </ComponentSection>
  );

  const renderHeaders = () => (
    <ComponentSection title="Headers">
      <ExampleGroup title="Header Principal" description="Header para páginas principais">
        <div className="w-full border rounded-lg p-6 bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EP</span>
              </div>
              <h1 className="text-xl font-bold">Entre os Pontos</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </ExampleGroup>

      <ExampleGroup title="Subheader" description="Header secundário com navegação">
        <div className="w-full border rounded-lg p-4 bg-card">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h2 className="font-semibold">Dashboard</h2>
              <nav className="flex space-x-4">
                <Button variant="ghost" size="sm">Visão Geral</Button>
                <Button variant="ghost" size="sm">Produtos</Button>
                <Button variant="ghost" size="sm">Pedidos</Button>
                <Button variant="ghost" size="sm">Clientes</Button>
              </nav>
            </div>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Novo Item
            </Button>
          </div>
        </div>
      </ExampleGroup>

      <ExampleGroup title="Header de Seção" description="Header para seções específicas">
        <div className="w-full border rounded-lg p-4 bg-card">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Produtos Recentes</h3>
              <p className="text-sm text-muted-foreground">Últimos produtos adicionados</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">24 novos</Badge>
              <Button variant="outline" size="sm">
                Ver Todos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </ExampleGroup>
    </ComponentSection>
  );

  const renderSpinners = () => (
    <ComponentSection title="Spinners">
      <ExampleGroup title="Tamanhos" description="Diferentes tamanhos de spinner">
        <Spinner size="sm" />
        <Spinner size="default" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </ExampleGroup>

      <ExampleGroup title="Variantes" description="Diferentes cores de spinner">
        <Spinner variant="default" />
        <Spinner variant="secondary" />
        <Spinner variant="muted" />
        <div className="bg-slate-800 p-4 rounded-lg">
          <Spinner variant="white" />
        </div>
      </ExampleGroup>

      <ExampleGroup title="Em Botões" description="Spinners integrados em botões">
        <Button disabled>
          <Spinner size="sm" className="mr-2" />
          Carregando...
        </Button>
        <Button variant="outline" disabled>
          <Spinner size="sm" className="mr-2" />
          Processando
        </Button>
        <Button variant="secondary" disabled>
          <Spinner size="sm" className="mr-2" />
          Salvando
        </Button>
      </ExampleGroup>

      <ExampleGroup title="Estados de Loading" description="Diferentes contextos de uso">
        <div className="space-y-4 w-full max-w-sm">
          <div className="flex items-center space-x-3 p-4 border rounded-lg">
            <Spinner size="sm" />
            <span className="text-sm">Carregando dados...</span>
          </div>
          <div className="flex items-center justify-center p-8 border rounded-lg">
            <div className="text-center space-y-2">
              <Spinner size="lg" />
              <p className="text-sm text-muted-foreground">Processando pagamento</p>
            </div>
          </div>
        </div>
      </ExampleGroup>
    </ComponentSection>
  );

  const renderToasts = () => (
    <ComponentSection title="Toasts">
      <ExampleGroup title="Tipos de Toast" description="Diferentes tipos de notificação">
        <Button onClick={() => toast.success('Operação realizada com sucesso!')}>
          Sucesso
        </Button>
        <Button 
          variant="destructive" 
          onClick={() => toast.error('Erro ao processar solicitação')}
        >
          Erro
        </Button>
        <Button 
          variant="outline" 
          onClick={() => toast.info('Informação importante')}
        >
          Info
        </Button>
        <Button 
          variant="secondary" 
          onClick={() => toast.warning('Atenção: verifique os dados')}
        >
          Aviso
        </Button>
      </ExampleGroup>

      <ExampleGroup title="Toast com Ação" description="Toasts interativos com botões de ação">
        <Button 
          onClick={() => toast.message('Item removido', {
            action: {
              label: 'Desfazer',
              onClick: () => toast.success('Ação desfeita!')
            }
          })}
        >
          Com Ação
        </Button>
        <Button 
          variant="outline"
          onClick={() => toast.promise(
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
              loading: 'Salvando...',
              success: 'Dados salvos com sucesso!',
              error: 'Erro ao salvar dados'
            }
          )}
        >
          Promise Toast
        </Button>
      </ExampleGroup>

      <ExampleGroup title="Personalização" description="Toasts com diferentes durações e posições">
        <Button 
          onClick={() => toast('Toast rápido', { duration: 1000 })}
        >
          Rápido (1s)
        </Button>
        <Button 
          variant="outline"
          onClick={() => toast('Toast longo', { duration: 5000 })}
        >
          Longo (5s)
        </Button>
        <Button 
          variant="secondary"
          onClick={() => toast('Toast persistente', { duration: Infinity })}
        >
          Persistente
        </Button>
        <Button 
          variant="ghost"
          onClick={() => toast.dismiss()}
        >
          Fechar Todos
        </Button>
      </ExampleGroup>

      <ExampleGroup title="Toast Rica" description="Toasts com conteúdo personalizado">
        <Button 
          onClick={() => toast(
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Nova mensagem</p>
                <p className="text-sm text-muted-foreground">João Silva te enviou uma mensagem</p>
              </div>
            </div>
          )}
        >
          Toast Rica
        </Button>
      </ExampleGroup>
    </ComponentSection>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'buttons':
        return renderButtons();
      case 'cards':
        return renderCards();
      case 'badges':
        return renderBadges();
      case 'avatars':
        return renderAvatars();
      case 'inputs':
        return renderInputs();
      case 'headers':
        return renderHeaders();
      case 'spinners':
        return renderSpinners();
      case 'toasts':
        return renderToasts();
      default:
        return renderButtons();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">UI Kit</h1>
                <p className="text-sm text-muted-foreground">Componentes padronizados</p>
              </div>
            </div>
            <Badge variant="outline">v1.0.0</Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <h2 className="font-semibold text-foreground mb-4">Componentes</h2>
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{section.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default UIKitShowcase;
