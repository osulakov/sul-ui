import clsx from "clsx";
import React from "react";

import "./styles/Page.custom.scss";

export type TPage = {
  title?: string;
  style?: React.CSSProperties;
  className?: string;
};

export const Page: React.FC<TPage> = ({
  children,
  title,
  style,
  className,
}) => {
  return (
    <div className={clsx("page", className)} style={style}>
      <div className="page--head-container" id="page-head-container">
        <div className="page--head-container--title">{title}</div>
      </div>
      {children}
    </div>
  );
};
