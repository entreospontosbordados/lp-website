import React from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface AlternatingItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  icon?: React.ReactNode;
  badge?: string;
  cta?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  };
  list?: string[];
}

interface SectionAlternatingProps {
  // Layout
  backgroundColor?: 'background' | 'muted' | 'secondary/10' | 'accent/10' | 'primary';
  
  // Content
  title?: string;
  subtitle?: string;
  description?: string;
  items: AlternatingItem[];
  
  // Styling
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  itemSpacing?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function SectionAlternating({
  backgroundColor = 'background',
  title,
  subtitle,
  description,
  items,
  className = '',
  containerSize = 'lg',
  padding = 'lg',
  itemSpacing = 'lg'
}: SectionAlternatingProps) {
  
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
  
  const spacingClasses = {
    'sm': 'space-y-16',
    'md': 'space-y-20',
    'lg': 'space-y-24',
    'xl': 'space-y-32'
  };
  
  const textColorClass = backgroundColor === 'primary' ? 'text-primary-foreground' : 'text-foreground';
  const subtitleColorClass = backgroundColor === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground';
  
  const AlternatingItemComponent = ({ item, index }: { item: AlternatingItem; index: number }) => {
    const isEven = index % 2 === 0;
    
    const contentSection = (
      <div className="flex flex-col justify-center space-y-6">
        <div className="space-y-4">
          {item.badge && (
            <Badge variant="secondary" className="w-fit">
              {item.badge}
            </Badge>
          )}
          
          {item.icon && (
            <div className={`flex items-center justify-start w-16 h-16 rounded-lg ${backgroundColor === 'primary' ? 'bg-primary-foreground/10 text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
              {item.icon}
            </div>
          )}
          
          <div className="space-y-3">
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-means-web-medium ${textColorClass}`}>
              {item.title}
            </h3>
            
            {item.subtitle && (
              <p className={`subtitle text-lg md:text-xl ${subtitleColorClass}`}>
                {item.subtitle}
              </p>
            )}
            
            <p className={`font-means-web-light text-base md:text-lg leading-relaxed ${subtitleColorClass}`}>
              {item.description}
            </p>
          </div>
        </div>
        
        {item.list && item.list.length > 0 && (
          <ul className="space-y-3">
            {item.list.map((listItem, listIndex) => (
              <li key={listIndex} className={`flex items-start space-x-3 font-means-web-light ${subtitleColorClass}`}>
                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>{listItem}</span>
              </li>
            ))}
          </ul>
        )}
        
        {item.cta && (
          <div className="pt-2">
            <Button
              variant={item.cta.variant || 'default'}
              size="lg"
              onClick={item.cta.onClick}
              className="font-means-web-medium"
            >
              {item.cta.text}
            </Button>
          </div>
        )}
      </div>
    );
    
    const imageSection = item.image && (
      <div className="flex items-center justify-center">
        <img
          src={item.image.src}
          alt={item.image.alt}
          className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg"
        />
      </div>
    );
    
    return (
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {isEven ? (
          <>
            {contentSection}
            {imageSection}
          </>
        ) : (
          <>
            {imageSection}
            {contentSection}
          </>
        )}
      </div>
    );
  };
  
  return (
    <section className={`min-h-screen flex items-center ${bgClasses[backgroundColor]} ${paddingClasses[padding]} ${className}`}>
      <div className={`mx-auto px-6 w-full ${containerSizes[containerSize]}`}>
        
        {/* Header */}
        {(title || subtitle || description) && (
          <div className="text-center mb-16 lg:mb-20">
            {title && (
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-means-web-medium mb-4 ${textColorClass}`}>
                {title}
              </h2>
            )}
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
        )}
        
        {/* Alternating Items */}
        <div className={spacingClasses[itemSpacing]}>
          {items.map((item, index) => (
            <AlternatingItemComponent key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
