import clsx from "clsx";
import React from "react";
import "./styles/Button.custom.scss";

export type TButton = {
  title?: string;
  color?: "primary" | "secondary" | "additional" | "default" | "none";
  type?: "save" | "cancel" | "delete" | "back" | "main-stroke";
  onClick?(): void;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

export const Button: React.FC<TButton> = ({
  title,
  color,
  onClick,
  style,
  className,
  type,
  size = "medium",
  children,
}) => {
  return (
    <div
      className={clsx(
        className,
        `custom-button--color${color}`,
        `custom-button--${size}`,
        `custom-button--${type}`
      )}
      onClick={onClick}
      style={style}
    >
      {title}
      {children}
    </div>
  );
};
