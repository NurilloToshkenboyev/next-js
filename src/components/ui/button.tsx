import React from 'react';

interface ButtonProps {
  type: "button" | "submit";
  children: React.ReactNode;
  className: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type, children, className, startIcon, endIcon }) => {
  return (
    <button className={className} type={type}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};
