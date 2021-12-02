import React from "react";

import "./styles/Page.custom.scss";

export type TPage = {
  title?: string;
};

export const Page: React.FC<TPage> = ({ children, title }) => {
  return (
    <div className="page">
      <div className="page--head-container" id="page-head-container">
        <div className="page--head-container--title">{title}</div>
      </div>
      {children}
    </div>
  );
};
