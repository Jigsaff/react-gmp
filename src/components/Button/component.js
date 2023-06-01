import React from "react";

export const Button = ({ children, type, className, onClick }) => {
  return (
      <button className={`button ${className}`} type={type} onClick={onClick}>
        {children}
      </button>
  );
};