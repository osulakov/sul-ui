import clsx from "clsx";
import React from "react";

import "./styles/Text.custom.scss";

export type TText = {
  size?: "small" | "medium" | "large";
  color?: "default" | "grey" | "success" | "warning" | "error";
  type?: "title" | "normal" | "underlabel";
  className?: string;
  style?: React.CSSProperties;
};

export const Text: React.FC<TText> = ({
  children,
  className,
  size,
  color,
  type,
  style,
}) => {
  return (
    <div
      style={style}
      className={clsx(
        "text",
        className,
        `text--${size}`,
        `text--${color}`,
        `text--${type}`
      )}
    >
      {children}
    </div>
  );
};
