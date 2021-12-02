import React from "react";

import "./styles/SearchInput";

export type TSearchInput = {
  onChangeValue?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
};

export const SearchInput: React.FC<TSearchInput> = ({
  onChangeValue,
  placeholder,
}) => {
  return (
    <section className="search-input">
      <input
        placeholder={placeholder}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => onChangeValue && onChangeValue(e)}
      />
    </section>
  );
};
