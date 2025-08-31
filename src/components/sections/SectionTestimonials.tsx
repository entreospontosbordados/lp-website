import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    role: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  featured?: boolean;
}

interface SectionTestimonialsProps {
  // Layout
  layout?: 'grid' | 'carousel' | 'featured' | 'list';
  columns?: 1 | 2 | 3;
  backgroundColor?: 'background' | 'muted' | 'secondary/10' | 'accent/10' | 'primary';
  
  // Content
  title: string;
  subtitle?: string;
  description?: string;
  testimonials: Testimonial[];
  
  // Styling
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  showRating?: boolean;
}

export default function SectionTestimonials({
  layout = 'grid',
  columns = 2,
  backgroundColor = 'background',
  title,
  subtitle,
  description,
  testimonials,
  className = '',
  containerSize = 'lg',
  padding = 'lg',
  showRating = true
}: SectionTestimonialsProps) {
  
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
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };
  
  const textColorClass = backgroundColor === 'primary' ? 'text-primary-foreground' : 'text-foreground';
  const subtitleColorClass = backgroundColor === 'primary' ? 'text-primary-foreground/80' : 'text-muted-foreground';
  
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  
  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <Card className={`${testimonial.featured ? 'border-primary shadow-lg' : 'border'} transition-all duration-300 hover:shadow-lg`}>
      <CardContent className="p-6 space-y-4">
        
        {showRating && testimonial.rating && (
          <div className="flex items-center justify-between">
            {renderStars(testimonial.rating)}
            {testimonial.featured && (
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                Destaque
              </span>
            )}
          </div>
        )}
        
        <blockquote className="font-means-web-light text-base md:text-lg leading-relaxed text-muted-foreground">
          "{testimonial.content}"
        </blockquote>
        
        <div className="flex items-center space-x-3 pt-2">
          <Avatar className="w-12 h-12">
            <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
            <AvatarFallback className="bg-primary/10 text-primary font-means-web-medium">
              {testimonial.author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <h4 className="font-means-web-medium text-card-foreground">
              {testimonial.author.name}
            </h4>
            <p className="text-sm text-primary">
              {testimonial.author.role}
              {testimonial.author.company && `, ${testimonial.author.company}`}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
  
  const renderTestimonials = () => {
    switch (layout) {
      case 'grid':
        return (
          <div className={`grid ${gridClasses[columns]} gap-6 lg:gap-8`}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        );
        
      case 'featured':
        const featured = testimonials.find(t => t.featured) || testimonials[0];
        const others = testimonials.filter(t => t.id !== featured.id).slice(0, 4);
        
        return (
          <div className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <TestimonialCard testimonial={featured} />
            </div>
            {others.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {others.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            )}
          </div>
        );
        
      case 'list':
        return (
          <div className="space-y-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        );
        
      default:
        return (
          <div className={`grid ${gridClasses[columns]} gap-6 lg:gap-8`}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        );
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
        
        {/* Testimonials */}
        {renderTestimonials()}
      </div>
    </section>
  );
}
