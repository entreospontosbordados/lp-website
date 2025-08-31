import React from 'react';

interface Stat {
  id: string;
  number: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
  suffix?: string;
  prefix?: string;
}

interface SectionStatsProps {
  // Layout
  layout?: 'horizontal' | 'grid';
  backgroundColor?: 'background' | 'muted' | 'secondary/10' | 'accent/10' | 'primary';
  
  // Content
  title?: string;
  subtitle?: string;
  description?: string;
  stats: Stat[];
  
  // Styling
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  statStyle?: 'default' | 'minimal' | 'card' | 'highlighted';
}

export default function SectionStats({
  layout = 'horizontal',
  backgroundColor = 'background',
  title,
  subtitle,
  description,
  stats,
  className = '',
  containerSize = 'lg',
  padding = 'lg',
  statStyle = 'default'
}: SectionStatsProps) {
  
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
  
  const layoutClasses = {
    'horizontal': stats.length <= 4 
      ? `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${stats.length} gap-8`
      : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8',
    'grid': 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
  };
  
  const statStyleClasses = {
    'default': 'text-center',
    'minimal': 'text-center',
    'card': 'text-center bg-card border rounded-lg p-6 shadow-sm',
    'highlighted': 'text-center bg-primary/5 border border-primary/20 rounded-lg p-6'
  };
  
  const textColorClass = backgroundColor === 'primary' ? 'text-primary-foreground' : 'text-foreground';
  const subtitleColorClass = backgroundColor === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground';
  const numberColorClass = backgroundColor === 'primary' ? 'text-primary-foreground' : 'text-primary';
  
  return (
    <section className={`min-h-screen flex items-center ${bgClasses[backgroundColor]} ${paddingClasses[padding]} ${className}`}>
      <div className={`mx-auto px-6 w-full ${containerSizes[containerSize]}`}>
        
        {/* Header */}
        {(title || subtitle || description) && (
          <div className="text-center mb-12 lg:mb-16">
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
        
        {/* Stats Grid */}
        <div className={layoutClasses[layout]}>
          {stats.map((stat) => (
            <div key={stat.id} className={`${statStyleClasses[statStyle]} transition-all duration-300 hover:scale-105`}>
              
              {stat.icon && (
                <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full ${backgroundColor === 'primary' ? 'bg-primary-foreground/10 text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                  {stat.icon}
                </div>
              )}
              
              <div className="space-y-2">
                <div className={`text-4xl md:text-5xl lg:text-6xl font-means-web-medium ${numberColorClass}`}>
                  {stat.prefix && <span className="text-2xl md:text-3xl">{stat.prefix}</span>}
                  {stat.number}
                  {stat.suffix && <span className="text-2xl md:text-3xl">{stat.suffix}</span>}
                </div>
                
                <h3 className={`text-lg md:text-xl font-means-web-medium ${textColorClass}`}>
                  {stat.label}
                </h3>
                
                {stat.description && (
                  <p className={`font-means-web-light text-sm md:text-base ${subtitleColorClass}`}>
                    {stat.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
