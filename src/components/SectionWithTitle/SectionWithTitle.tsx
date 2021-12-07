import clsx from "clsx";
import React from "react";
import { Button } from "../Button/Button";

import "./styles/SectionWithTitle.custom.scss";

export type TSectionWithTitle = {
  title?: string;
  rightButtonProps?: {
    title: string;
    onClick?: () => void;
  };
  style?: React.CSSProperties;
  className?: string;
};

export const SectionWithTitle: React.FC<TSectionWithTitle> = ({
  children,
  title,
  rightButtonProps,
  style,
  className,
}) => {
  return (
    <div className={clsx("section-with-title", className)} style={style}>
      <div className="section-with-title--top">
        <div>
          <b>{title}</b>
        </div>
        <div className="section-with-title--top--right">
          {rightButtonProps && (
            <Button
              title={rightButtonProps.title}
              size="medium"
              type="main-stroke"
              onClick={rightButtonProps.onClick}
            >
              {""}
            </Button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
