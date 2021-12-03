import { Button } from "../Button/Button";
import { SearchInput } from "../SearchInput/SearchInput";
import React from "react";

import "./styles/TableTopControls.custom.scss";

export type TTableTopControls = {
  showAddButton?: boolean;
  addButtonTitle?: string;
  onClickAdd?: () => void;
  showDeleteButton?: boolean;
  showChangeStatusButton?: boolean;
  searchInputProps?: {
    placeholder: string;
    onChangeValue?: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
  };
  showRightControls?: boolean;
  rightControls?: React.ReactNode;
};

export const TableTopControls: React.FC<TTableTopControls> = ({
  showAddButton,
  addButtonTitle,
  onClickAdd,
  searchInputProps,
  showRightControls,
  rightControls,
}) => {
  return (
    <div className="table-top-controls">
      <div className="table-top-controls--left-side">
        <SearchInput
          onChangeValue={searchInputProps?.onChangeValue}
          placeholder={searchInputProps?.placeholder}
        />
      </div>
      <div className="table-top-controls--right-side">
        {showRightControls && <>{rightControls}</>}
        {showAddButton && (
          <Button
            title={addButtonTitle}
            onClick={onClickAdd}
            type="main-stroke"
          />
        )}
      </div>
    </div>
  );
};
