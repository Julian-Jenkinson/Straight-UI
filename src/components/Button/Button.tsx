import React from 'react';
import styles from './Button.module.css'; // ✅ Import the module


export type ButtonProps = {
  label: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export const Button: React.FC<ButtonProps> = ({ label, primary = true, onClick, ariaLabel }) => {
  const typeClass = primary ? styles.primary : styles.secondary;
  const className = `${styles.button} ${typeClass}`;

  return (
    <button
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
};
