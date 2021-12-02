import React from "react";
import { Button } from "../Button/Button";

import "./styles/SectionWithTitle.custom.scss";

export type TSectionWithTitle = {
  title?: string;
  rightButtonProps?: {
    title: string;
    onClick?: () => void;
  };
};

export const SectionWithTitle: React.FC<TSectionWithTitle> = ({
  children,
  title,
  rightButtonProps,
}) => {
  return (
    <div className="section-with-title">
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
