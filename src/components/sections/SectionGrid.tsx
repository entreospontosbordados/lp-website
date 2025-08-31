import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GridItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  badge?: string;
  link?: {
    href: string;
    text: string;
  };
}

interface SectionGridProps {
  // Layout
  columns?: 2 | 3 | 4;
  backgroundColor?: 'background' | 'muted' | 'secondary/10' | 'accent/10' | 'primary';
  
  // Content
  title: string;
  subtitle?: string;
  description?: string;
  items: GridItem[];
  
  // Card styling
  cardStyle?: 'default' | 'minimal' | 'elevated' | 'bordered';
  
  // Styling
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function SectionGrid({
  columns = 3,
  backgroundColor = 'background',
  title,
  subtitle,
  description,
  items,
  cardStyle = 'default',
  className = '',
  containerSize = 'lg',
  padding = 'lg'
}: SectionGridProps) {
  
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
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };
  
  const cardStyleClasses = {
    'default': 'bg-card border',
    'minimal': 'bg-transparent',
    'elevated': 'bg-card border shadow-lg',
    'bordered': 'bg-card border-2'
  };
  
  const textColorClass = backgroundColor === 'primary' ? 'text-primary-foreground' : 'text-foreground';
  const subtitleColorClass = backgroundColor === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground';
  
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
        
        {/* Grid */}
        <div className={`grid ${gridClasses[columns]} gap-6 lg:gap-8`}>
          {items.map((item) => (
            <Card key={item.id} className={`${cardStyleClasses[cardStyle]} transition-all duration-300 hover:shadow-lg`}>
              <CardHeader className="space-y-4">
                {item.image && (
                  <div className="w-full h-48 overflow-hidden rounded-lg">
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {item.icon && (
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                )}
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl font-means-web-medium">
                      {item.title}
                    </CardTitle>
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="font-means-web-light text-base leading-relaxed">
                  {item.description}
                </CardDescription>
                
                {item.link && (
                  <a
                    href={item.link.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-means-web-medium text-sm transition-colors"
                  >
                    {item.link.text}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
