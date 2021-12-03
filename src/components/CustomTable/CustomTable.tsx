import clsx from "clsx";
import { Checkbox } from "../Checkbox/Checkbox";
import React, { useEffect, useMemo, useState } from "react";

import "./styles/CustomTable.custom.scss";
import { TablePagination, TRowsPerPage } from "./TablePagination";

export type TCustomTableHeaders = {
  title: React.ReactNode;
  width: number;
  height?: number;
  renderItem: (item: any) => React.ReactNode;
  contentCellPadding?: number;
  align?: "left" | "center" | "right";
  clickCell?: (item: any) => void;
  className?: string;
  onHoverCell?: "highlight" | "underline";
};

export type TCustomTable = {
  headers: TCustomTableHeaders[];
  items: any[];
  showCheckBoxes?: boolean;
  notShowPagination?: boolean;
  noPadding?: boolean;
  cellProps?: {
    noCellPaddingLeft?: boolean;
  };
  rowProps?: {
    doubledBottomBorder?: boolean;
  };
  defaultPagesCount?: TRowsPerPage;
  hasInputRow?: boolean;
};

export const CustomTable: React.FC<TCustomTable> = ({
  headers,
  items,
  showCheckBoxes = false,
  notShowPagination = false,
  noPadding = false,
  cellProps,
  rowProps,
  defaultPagesCount = 14,
  hasInputRow,
}) => {
  const [rowsPerPage, setRowsPerPage] = useState<TRowsPerPage>(
    notShowPagination ? 50 : defaultPagesCount
  );
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  // calculate total pages
  useEffect(() => {
    let pagesCount: number =
      (items.length / rowsPerPage) % 1 > 0
        ? Math.floor(items.length / rowsPerPage) + 1
        : Math.floor(items.length / rowsPerPage);
    if (pagesCount !== totalPages) {
      setTotalPages(pagesCount);
    }
    if (currentPageNumber > pagesCount) {
      setCurrentPageNumber(pagesCount);
    }
  }, [rowsPerPage, items.length]);

  const mappedItemsToPage = useMemo(() => {
    const startSliceIndex = (currentPageNumber - 1) * rowsPerPage;
    const secondSliceValue =
      currentPageNumber === totalPages
        ? undefined
        : startSliceIndex + rowsPerPage;
    return items.length > rowsPerPage
      ? items.slice(startSliceIndex, secondSliceValue)
      : items;
  }, [rowsPerPage, totalPages, currentPageNumber, items]);

  const mapHead = useMemo(() => {
    return (
      <div className="custom-table--head-row" style={{ display: "flex" }}>
        {showCheckBoxes && (
          <div className="custom-table--checkbox-cell">
            <Checkbox />
          </div>
        )}
        {headers.map((column: TCustomTableHeaders, index: number) => {
          return (
            <div
              key={index}
              className="custom-table--head-cell"
              style={{ width: column.width, maxWidth: column.width }}
            >
              {column.title}
            </div>
          );
        })}
      </div>
    );
  }, [headers]);

  const mapInputRow = useMemo(() => {
    return <div>Input row</div>;
  }, [headers]);

  const mapRows = useMemo(() => {
    return (
      <>
        {mappedItemsToPage?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className={clsx("custom-table--row", {
                "custom-table--row--is-last-row":
                  index === mappedItemsToPage?.length - 1,
              })}
            >
              {showCheckBoxes && (
                <div className="custom-table--checkbox-cell">
                  <Checkbox />
                </div>
              )}
              {headers.map((el: TCustomTableHeaders, ind: number) => {
                return (
                  <div
                    key={ind}
                    style={{
                      width: el.width,
                      maxWidth: el.width,
                      height: el.height ? `${el.height}px` : "45px",
                    }}
                    className={clsx(
                      el.className,
                      "custom-table--content-cell",
                      `custom-table--on-hover-cell-${el.onHoverCell}`,
                      {
                        "custom-table--content-cell--no-padding-left":
                          cellProps?.noCellPaddingLeft,
                        "custom-table--content-cell--doubled-bottom":
                          rowProps?.doubledBottomBorder,
                      }
                    )}
                    onClick={() => el.clickCell && el.clickCell(item)}
                  >
                    {el.renderItem(item)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }, [mappedItemsToPage, headers]);

  return (
    <section
      className={clsx("custom-table", {
        "custom-table--no-padding": noPadding,
      })}
    >
      {mapHead}
      {hasInputRow && mapInputRow}
      {items.length > 0 ? (
        mapRows
      ) : (
        <div className="custom-table--no-items-row">No Items</div>
      )}
      {!notShowPagination && (
        <TablePagination
          itemsCount={items?.length}
          totalPages={totalPages}
          currentPageNumber={currentPageNumber}
          setCurrentPageNumber={setCurrentPageNumber}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      )}
    </section>
  );
};
