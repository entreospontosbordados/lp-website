import React from 'react';
import { Button } from '../ui/button';

interface SectionCenteredProps {
  // Layout
  backgroundColor?: 'background' | 'muted' | 'secondary/10' | 'accent/10' | 'primary';
  
  // Content
  title: string;
  subtitle?: string;
  description?: string;
  
  // Media
  image?: {
    src: string;
    alt: string;
    position?: 'above' | 'below' | 'background';
  };
  
  video?: {
    src: string;
    poster?: string;
    position?: 'above' | 'below' | 'background';
  };
  
  // CTA
  primaryCta?: {
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
  textAlign?: 'left' | 'center';
}

export default function SectionCentered({
  backgroundColor = 'background',
  title,
  subtitle,
  description,
  image,
  video,
  primaryCta,
  secondaryCta,
  children,
  className = '',
  containerSize = 'lg',
  padding = 'lg',
  textAlign = 'center'
}: SectionCenteredProps) {
  
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
  
  const alignmentClass = textAlign === 'center' ? 'text-center' : 'text-left';
  const itemsAlignment = textAlign === 'center' ? 'items-center' : 'items-start';
  
  const backgroundMedia = (image?.position === 'background' || video?.position === 'background') && (
    <div className="absolute inset-0 z-0">
      {image?.position === 'background' && (
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      )}
      {video?.position === 'background' && (
        <video
          src={video.src}
          poster={video.poster}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );
  
  const mediaAbove = (image?.position === 'above' || video?.position === 'above') && (
    <div className="mb-8">
      {image?.position === 'above' && (
        <img
          src={image.src}
          alt={image.alt}
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      )}
      {video?.position === 'above' && (
        <video
          src={video.src}
          poster={video.poster}
          controls
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      )}
    </div>
  );
  
  const mediaBelow = (image?.position === 'below' || video?.position === 'below') && (
    <div className="mt-8">
      {image?.position === 'below' && (
        <img
          src={image.src}
          alt={image.alt}
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      )}
      {video?.position === 'below' && (
        <video
          src={video.src}
          poster={video.poster}
          controls
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      )}
    </div>
  );
  
  return (
    <section className={`min-h-screen flex items-center relative ${bgClasses[backgroundColor]} ${paddingClasses[padding]} ${className}`}>
      {backgroundMedia}
      
      <div className={`mx-auto px-6 w-full ${containerSizes[containerSize]} relative z-10`}>
        <div className={`flex flex-col ${itemsAlignment} space-y-8`}>
          
          {mediaAbove}
          
          {/* Content */}
          <div className={`space-y-6 ${alignmentClass}`}>
            <div className="space-y-4">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-means-web-medium ${textColorClass}`}>
                {title}
              </h1>
              
              {subtitle && (
                <p className={`subtitle text-xl md:text-2xl lg:text-3xl ${subtitleColorClass}`}>
                  {subtitle}
                </p>
              )}
              
              {description && (
                <p className={`font-means-web-light text-lg md:text-xl leading-relaxed max-w-3xl ${textAlign === 'center' ? 'mx-auto' : ''} ${subtitleColorClass}`}>
                  {description}
                </p>
              )}
            </div>
            
            {children && (
              <div className="space-y-6">
                {children}
              </div>
            )}
            
            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${textAlign === 'center' ? 'justify-center' : 'justify-start'}`}>
                {primaryCta && (
                  <Button
                    variant={primaryCta.variant || 'default'}
                    size="lg"
                    onClick={primaryCta.onClick}
                    className="font-means-web-medium"
                  >
                    {primaryCta.text}
                  </Button>
                )}
                
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
            )}
          </div>
          
          {mediaBelow}
          
        </div>
      </div>
    </section>
  );
}
