import React from 'react';

interface InputProps {
  type: string;
  name?: string;
  className?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ type, name, className, placeholder }) => {
  return (
    <input type={type} name={name} className={className} placeholder={placeholder} />
  );
}
