import React from "react";

import "./styles/Checkbox.custom.scss";

export type TCheckbox = {
  defaultValue?: boolean;
  style?: React.CSSProperties;
};

export const Checkbox: React.FC<TCheckbox> = ({ defaultValue, style }) => {
  return <input type="checkbox" defaultChecked={defaultValue} style={style} />;
};
