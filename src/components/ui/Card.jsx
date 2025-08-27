import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'md',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-md border border-neutral-200 transition-all duration-200';
  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };
  
  const classes = `${baseClasses} ${hoverClasses} ${paddings[padding]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
