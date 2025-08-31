import React from 'react';
import { Button } from '../ui/button';

interface SectionSplitProps {
  // Layout
  imagePosition?: 'left' | 'right';
  backgroundColor?: 'background' | 'muted' | 'secondary/10' | 'accent/10' | 'primary';
  
  // Content
  title: string;
  subtitle?: string;
  description: string;
  
  // Image/Media
  image?: {
    src: string;
    alt: string;
  };
  
  // CTA
  cta?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  };
  
  // Additional content (can be list, form, etc.)
  children?: React.ReactNode;
  
  // Styling
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function SectionSplit({
  imagePosition = 'right',
  backgroundColor = 'background',
  title,
  subtitle,
  description,
  image,
  cta,
  children,
  className = '',
  containerSize = 'lg',
  padding = 'lg'
}: SectionSplitProps) {
  
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
  
  const textColorClass = backgroundColor === 'primary' ? 'text-primary-foreground' : 'text-foreground';
  const subtitleColorClass = backgroundColor === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground';
  
  const contentSection = (
    <div className="flex flex-col justify-center space-y-6">
      <div className="space-y-4">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-means-web-medium ${textColorClass}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`subtitle text-lg md:text-xl ${subtitleColorClass}`}>
            {subtitle}
          </p>
        )}
        <p className={`font-means-web-light text-base md:text-lg leading-relaxed ${subtitleColorClass}`}>
          {description}
        </p>
      </div>
      
      {children && (
        <div className="space-y-4">
          {children}
        </div>
      )}
      
      {cta && (
        <div className="pt-2">
          <Button
            variant={cta.variant || 'default'}
            size="lg"
            onClick={cta.onClick}
            className="font-means-web-medium"
          >
            {cta.text}
          </Button>
        </div>
      )}
    </div>
  );
  
  const imageSection = image && (
    <div className="flex items-center justify-center">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg"
      />
    </div>
  );
  
  return (
    <section className={`min-h-screen flex items-center ${bgClasses[backgroundColor]} ${paddingClasses[padding]} ${className}`}>
      <div className={`mx-auto px-6 w-full ${containerSizes[containerSize]}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {imagePosition === 'left' ? (
            <>
              {imageSection}
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
