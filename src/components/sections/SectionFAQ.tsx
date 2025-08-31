import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface SectionFAQProps {
  // Layout
  layout?: 'accordion' | 'grid' | 'list';
  columns?: 1 | 2;
  backgroundColor?: 'background' | 'muted' | 'secondary/10' | 'accent/10' | 'primary';
  
  // Content
  title: string;
  subtitle?: string;
  description?: string;
  faqs: FAQItem[];
  
  // Features
  searchable?: boolean;
  categorized?: boolean;
  
  // Styling
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function SectionFAQ({
  layout = 'accordion',
  columns = 1,
  backgroundColor = 'background',
  title,
  subtitle,
  description,
  faqs,
  searchable = false,
  categorized = false,
  className = '',
  containerSize = 'lg',
  padding = 'lg'
}: SectionFAQProps) {
  
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const bgClasses = {
    'background': 'bg-background',
    'muted': 'bg-muted',
    'secondary/10': 'bg-secondary/10',
    'accent/10': 'bg-accent/10',
    'primary': 'bg-primary'
  };
  
  const containerSizes = {
    'sm': 'max-w-4xl',
    'md': 'max-w-5xl',
    'lg': 'max-w-6xl',
    'xl': 'max-w-7xl',
    'full': 'max-w-full'
  };
  
  const paddingClasses = {
    'sm': 'py-12',
    'md': 'py-16',
    'lg': 'py-20',
    'xl': 'py-24'
  };
  
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2'
  };
  
  const textColorClass = backgroundColor === 'primary' ? 'text-primary-foreground' : 'text-foreground';
  const subtitleColorClass = backgroundColor === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground';
  
  // Filter FAQs
  const categories = categorized ? [...new Set(faqs.map(faq => faq.category).filter(Boolean))] : [];
  
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = !searchTerm || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };
  
  const AccordionItem = ({ faq }: { faq: FAQItem }) => {
    const isOpen = openItems.includes(faq.id);
    
    return (
      <Card className="border transition-all duration-200 hover:shadow-md">
        <CardHeader 
          className="cursor-pointer p-6 hover:bg-muted/50"
          onClick={() => toggleItem(faq.id)}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-means-web-medium text-lg text-card-foreground pr-4">
              {faq.question}
            </h3>
            <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </CardHeader>
        
        {isOpen && (
          <CardContent className="px-6 pb-6 pt-0">
            <p className="font-means-web-light text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </CardContent>
        )}
      </Card>
    );
  };
  
  const GridItem = ({ faq }: { faq: FAQItem }) => (
    <Card className="border h-full">
      <CardContent className="p-6 space-y-4">
        <h3 className="font-means-web-medium text-lg text-card-foreground">
          {faq.question}
        </h3>
        <p className="font-means-web-light text-muted-foreground leading-relaxed">
          {faq.answer}
        </p>
      </CardContent>
    </Card>
  );
  
  const ListItem = ({ faq }: { faq: FAQItem }) => (
    <div className="border-b border-border pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0">
      <h3 className="font-means-web-medium text-lg text-card-foreground mb-3">
        {faq.question}
      </h3>
      <p className="font-means-web-light text-muted-foreground leading-relaxed">
        {faq.answer}
      </p>
    </div>
  );
  
  const renderFAQs = () => {
    switch (layout) {
      case 'accordion':
        return (
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredFAQs.map((faq) => (
              <AccordionItem key={faq.id} faq={faq} />
            ))}
          </div>
        );
        
      case 'grid':
        return (
          <div className={`grid ${gridClasses[columns]} gap-6 lg:gap-8`}>
            {filteredFAQs.map((faq) => (
              <GridItem key={faq.id} faq={faq} />
            ))}
          </div>
        );
        
      case 'list':
        return (
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((faq) => (
              <ListItem key={faq.id} faq={faq} />
            ))}
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <section className={`min-h-screen flex items-center ${bgClasses[backgroundColor]} ${paddingClasses[padding]} ${className}`}>
      <div className={`mx-auto px-6 w-full ${containerSizes[containerSize]}`}>
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-means-web-medium mb-4 ${textColorClass}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`subtitle text-lg md:text-xl mb-4 ${subtitleColorClass}`}>
              {subtitle}
            </p>
          )}
          {description && (
            <p className={`font-means-web-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto ${subtitleColorClass}`}>
              {description}
            </p>
          )}
        </div>
        
        {/* Filters */}
        {(searchable || categorized) && (
          <div className="max-w-2xl mx-auto mb-12 space-y-4">
            {searchable && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar perguntas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            )}
            
            {categorized && categories.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-full text-sm font-means-web-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  Todas
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-means-web-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* FAQs */}
        {filteredFAQs.length > 0 ? (
          renderFAQs()
        ) : (
          <div className="text-center py-12">
            <p className={`font-means-web-light text-lg ${subtitleColorClass}`}>
              Nenhuma pergunta encontrada.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
