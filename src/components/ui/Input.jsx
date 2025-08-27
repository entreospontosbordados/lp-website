import React from 'react';

const Input = ({ 
  label,
  error,
  className = '',
  type = 'text',
  ...props 
}) => {
  const baseClasses = 'w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const normalClasses = 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500';
  const errorClasses = 'border-red-500 focus:border-red-500 focus:ring-red-500';
  
  const inputClasses = `${baseClasses} ${error ? errorClasses : normalClasses} ${className}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <input 
        type={type}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;
