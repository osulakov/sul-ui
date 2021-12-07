import clsx from "clsx";
import React from "react";

import "./styles/Flex.custom.scss";

export type TFlex = {
  smallMargin?: boolean;
  mediumMargin?: boolean;
  offsetFromTitle?: boolean;
  offsetFromRow?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const Flex: React.FC<TFlex> = ({
  children,
  smallMargin,
  mediumMargin,
  offsetFromTitle,
  offsetFromRow,
  className,
  style,
}) => {
  return (
    <div
      className={clsx("flex", className, {
        "flex--small-margin": smallMargin,
        "flex--medium-margin": mediumMargin,
        "flex--offset-from-title": offsetFromTitle,
        "flex--offset-from-row": offsetFromRow,
      })}
      style={style}
    >
      {children}
    </div>
  );
};
