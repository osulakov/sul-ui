import clsx from "clsx";
import React from "react";

import "./styles/TwoColumns.custom.scss";

export type TTwoColumns = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  separator?: React.ReactNode;
  className?: string;
  offsetFromTitle?: boolean;
  alignItems?: "center" | "flex-start" | "flex-end";
  leftControlSpace?: boolean;
  rightControlSpace?: boolean;
  offsetFromRow?: boolean;
  style?: React.CSSProperties;
};

export const TwoColumns: React.FC<TTwoColumns> = ({
  left = <div />,
  right = <div />,
  separator,
  className,
  offsetFromTitle,
  alignItems,
  leftControlSpace,
  rightControlSpace,
  offsetFromRow,
  style,
}) => {
  return (
    <div
      className={clsx(
        "two-columns",
        `two-columns--align-items-${alignItems}`,
        className,
        {
          "two-columns--offset-from-title": offsetFromTitle,
          "two-columns--offset-from-row": offsetFromRow,
        }
      )}
      style={style}
    >
      <div
        className={clsx("two-columns--child-wrapper", {
          "two-columns--child-wrapper-control-space": leftControlSpace,
        })}
      >
        {left}
      </div>
      {separator ? separator : <div className="two-columns--separator" />}
      <div
        className={clsx("two-columns--child-wrapper", {
          "two-columns--child-wrapper-control-space": rightControlSpace,
        })}
      >
        {right}
      </div>
    </div>
  );
};
