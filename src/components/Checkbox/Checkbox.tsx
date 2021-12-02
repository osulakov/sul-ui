import React from "react";

import "./styles/Checkbox";

export type TCheckbox = {
  defaultValue?: boolean;
};

export const Checkbox: React.FC<TCheckbox> = ({ defaultValue }) => {
  return <input type="checkbox" defaultChecked={defaultValue} />;
};
