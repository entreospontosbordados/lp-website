import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface SectionCTAProps {
  // Layout
  style?: 'simple' | 'with-benefits' | 'with-urgency' | 'with-guarantee' | 'dual';
  backgroundColor?: 'background' | 'muted' | 'secondary/10' | 'accent/10' | 'primary';
  
  // Content
  title: string;
  subtitle?: string;
  description?: string;
  
  // Benefits (for 'with-benefits' style)
  benefits?: string[];
  
  // Urgency (for 'with-urgency' style)
  urgency?: {
    text: string;
    countdown?: {
      endDate: Date;
    };
  };
  
  // Guarantee (for 'with-guarantee' style)
  guarantee?: {
    text: string;
    icon?: React.ReactNode;
    badge?: string;
  };
  
  // CTAs
  primaryCta: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  };
  
  secondaryCta?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  };
  
  // Additional content
  children?: React.ReactNode;
  
  // Styling
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function SectionCTA({
  style = 'simple',
  backgroundColor = 'primary',
  title,
  subtitle,
  description,
  benefits,
  urgency,
  guarantee,
  primaryCta,
  secondaryCta,
  children,
  className = '',
  containerSize = 'lg',
  padding = 'lg'
}: SectionCTAProps) {
  
  const bgClasses = {
    'background': 'bg-background',
    'muted': 'bg-muted',
    'secondary/10': 'bg-secondary/10',
    'accent/10': 'bg-accent/10',
    'primary': 'bg-primary'
  };
  
  const containerSizes = {
    'sm': 'max-w-2xl',
    'md': 'max-w-4xl',
    'lg': 'max-w-5xl',
    'xl': 'max-w-6xl',
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
  
  const renderContent = () => {
    switch (style) {
      case 'simple':
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-means-web-medium ${textColorClass}`}>
                {title}
              </h2>
              {subtitle && (
                <p className={`subtitle text-lg md:text-xl ${subtitleColorClass}`}>
                  {subtitle}
                </p>
              )}
              {description && (
                <p className={`font-means-web-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto ${subtitleColorClass}`}>
                  {description}
                </p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant={primaryCta.variant || 'default'}
                size="lg"
                onClick={primaryCta.onClick}
                className="font-means-web-medium"
              >
                {primaryCta.text}
              </Button>
              
              {secondaryCta && (
                <Button
                  variant={secondaryCta.variant || 'outline'}
                  size="lg"
                  onClick={secondaryCta.onClick}
                  className="font-means-web-medium"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        );
        
      case 'with-benefits':
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-means-web-medium ${textColorClass}`}>
                {title}
              </h2>
              {subtitle && (
                <p className={`subtitle text-lg md:text-xl ${subtitleColorClass}`}>
                  {subtitle}
                </p>
              )}
            </div>
            
            {benefits && benefits.length > 0 && (
              <div className="max-w-2xl mx-auto">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className={`flex items-center justify-center space-x-3 font-means-web-light ${subtitleColorClass}`}>
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant={primaryCta.variant || 'default'}
                size="lg"
                onClick={primaryCta.onClick}
                className="font-means-web-medium"
              >
                {primaryCta.text}
              </Button>
              
              {secondaryCta && (
                <Button
                  variant={secondaryCta.variant || 'outline'}
                  size="lg"
                  onClick={secondaryCta.onClick}
                  className="font-means-web-medium"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        );
        
      case 'with-urgency':
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              {urgency && (
                <Badge variant="secondary" className="text-sm font-means-web-medium mb-4">
                  {urgency.text}
                </Badge>
              )}
              
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-means-web-medium ${textColorClass}`}>
                {title}
              </h2>
              {subtitle && (
                <p className={`subtitle text-lg md:text-xl ${subtitleColorClass}`}>
                  {subtitle}
                </p>
              )}
              {description && (
                <p className={`font-means-web-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto ${subtitleColorClass}`}>
                  {description}
                </p>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant={primaryCta.variant || 'default'}
                size="lg"
                onClick={primaryCta.onClick}
                className="font-means-web-medium"
              >
                {primaryCta.text}
              </Button>
              
              {secondaryCta && (
                <Button
                  variant={secondaryCta.variant || 'outline'}
                  size="lg"
                  onClick={secondaryCta.onClick}
                  className="font-means-web-medium"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        );
        
      case 'with-guarantee':
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-means-web-medium ${textColorClass}`}>
                {title}
              </h2>
              {subtitle && (
                <p className={`subtitle text-lg md:text-xl ${subtitleColorClass}`}>
                  {subtitle}
                </p>
              )}
              {description && (
                <p className={`font-means-web-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto ${subtitleColorClass}`}>
                  {description}
                </p>
              )}
            </div>
            
            {guarantee && (
              <div className="flex items-center justify-center space-x-3 p-4 bg-card/10 rounded-lg border border-card/20 max-w-md mx-auto">
                {guarantee.icon && (
                  <div className="text-green-400">
                    {guarantee.icon}
                  </div>
                )}
                <div className="text-left">
                  <p className={`font-means-web-medium text-sm ${textColorClass}`}>
                    {guarantee.text}
                  </p>
                  {guarantee.badge && (
                    <Badge variant="secondary" className="text-xs mt-1">
                      {guarantee.badge}
                    </Badge>
                  )}
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant={primaryCta.variant || 'default'}
                size="lg"
                onClick={primaryCta.onClick}
                className="font-means-web-medium"
              >
                {primaryCta.text}
              </Button>
              
              {secondaryCta && (
                <Button
                  variant={secondaryCta.variant || 'outline'}
                  size="lg"
                  onClick={secondaryCta.onClick}
                  className="font-means-web-medium"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        );
        
      case 'dual':
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-means-web-medium ${textColorClass}`}>
                {title}
              </h2>
              {subtitle && (
                <p className={`subtitle text-lg md:text-xl ${subtitleColorClass}`}>
                  {subtitle}
                </p>
              )}
              {description && (
                <p className={`font-means-web-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto ${subtitleColorClass}`}>
                  {description}
                </p>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="p-6 bg-card/10 rounded-lg border border-card/20">
                <Button
                  variant={primaryCta.variant || 'default'}
                  size="lg"
                  onClick={primaryCta.onClick}
                  className="w-full font-means-web-medium"
                >
                  {primaryCta.text}
                </Button>
              </div>
              
              {secondaryCta && (
                <div className="p-6 bg-card/10 rounded-lg border border-card/20">
                  <Button
                    variant={secondaryCta.variant || 'outline'}
                    size="lg"
                    onClick={secondaryCta.onClick}
                    className="w-full font-means-web-medium"
                  >
                    {secondaryCta.text}
                  </Button>
                </div>
              )}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <section className={`min-h-screen flex items-center ${bgClasses[backgroundColor]} ${paddingClasses[padding]} ${className}`}>
      <div className={`mx-auto px-6 w-full ${containerSizes[containerSize]}`}>
        {renderContent()}
        
        {children && (
          <div className="mt-12 text-center">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
