import clsx from "clsx";
import React from "react";

import "./styles/SearchInput.custom.scss";

export type TSearchInput = {
  onChangeValue?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  className?: string;
};

export const SearchInput: React.FC<TSearchInput> = ({
  onChangeValue,
  placeholder,
  style,
  className,
}) => {
  return (
    <section className={clsx("search-input", className)} style={style}>
      <input
        placeholder={placeholder}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => onChangeValue && onChangeValue(e)}
      />
    </section>
  );
};
