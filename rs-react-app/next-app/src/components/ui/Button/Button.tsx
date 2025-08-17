"use client";

import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
  className?: string;
}

export default function Button({
  type = "button",
  disabled = false,
  onClick,
  children,
  ariaLabel,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}
