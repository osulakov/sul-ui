import clsx from "clsx";
import React from "react";
import { Button } from "../Button/Button";

import "./styles/SaveBackCancelControls.custom.scss";

export type TSaveBackCancelControls = {
  showBackButton?: boolean;
  backButtonProps?: {
    onBack: () => void;
  };
  showCancelButton?: boolean;
  cancelButtonProps?: {
    onCancel: () => void;
  };
  showSaveButton?: boolean;
  saveButtonProps?: {
    onSave: () => void;
    type?: "save" | "delete";
  };
  style?: React.CSSProperties;
  className?: string;
};

export const SaveBackCancelControls: React.FC<TSaveBackCancelControls> = ({
  showSaveButton = true,
  showCancelButton = true,
  showBackButton = true,
  backButtonProps,
  cancelButtonProps,
  saveButtonProps,
  style,
  className,
}) => {
  return (
    <div className={clsx("save-back-cancel-controls", className)} style={style}>
      {showBackButton && (
        <Button
          title="Back"
          type="back"
          onClick={backButtonProps?.onBack}
          style={{ margin: "0 auto 0 0" }}
        />
      )}
      {showCancelButton && (
        <Button
          title="Cancel"
          type="cancel"
          onClick={cancelButtonProps?.onCancel}
          style={{ margin: "0 0 0 auto" }}
        />
      )}
      {showSaveButton && (
        <Button
          title={saveButtonProps?.type === "delete" ? "Delete" : "Save"}
          type={saveButtonProps?.type === "delete" ? "delete" : "save"}
          onClick={saveButtonProps?.onSave}
          style={{ margin: "0 0 0 10px" }}
        />
      )}
    </div>
  );
};
