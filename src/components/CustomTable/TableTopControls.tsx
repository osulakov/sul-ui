import { Button } from "../Button/Button";
import { SearchInput } from "../SearchInput/SearchInput";
import React from "react";

import "./styles/TableTopControls.custom.scss";
import clsx from "clsx";

export type TTableTopControls = {
  showAddButton?: boolean;
  addButtonTitle?: string;
  onClickRightButton?: () => void;
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
  style?: React.CSSProperties;
  className?: string;
};

export const TableTopControls: React.FC<TTableTopControls> = ({
  showAddButton,
  addButtonTitle,
  onClickRightButton,
  searchInputProps,
  showRightControls,
  rightControls,
  style,
  className,
}) => {
  return (
    <div className={clsx("table-top-controls", className)} style={style}>
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
            onClick={onClickRightButton}
            type="main-stroke"
          />
        )}
      </div>
    </div>
  );
};
