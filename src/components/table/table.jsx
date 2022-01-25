import React, { useMemo, useEffect, useState } from "react";
import "./table.scss";
import { useTable } from "react-table";
import ItemContainer from "../item_container/item_container";
import EditButton from "../edit_button/edit_button";

const Table = ({ storage, stock, itemProperties }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const updated = [...data];
    for (const item in stock) {
      updated.push({
        col1: storage.getItemLargeType(item),
        col2: itemProperties[item] ? itemProperties[item].koShortName : " ",
        col3: (
          <ItemContainer
            items={stock[item]}
            itemName={storage.getItemLargeType(item)}
          />
        ),
        col4: <EditButton />,
      });
    }
    setData(updated);
  }, [stock]);

  const columns = useMemo(
    () => [
      {
        Header: "분류",
        accessor: "col1",
        enableRowSpan: true,
      },
      {
        Header: "제품명",
        accessor: "col2",
      },
      {
        Header: "재고",
        accessor: "col3",
      },
      {
        Header: "수정",
        accessor: "col4",
      },
    ],
    []
  );

  function useInstance(instance) {
    const { allColumns } = instance;
    let rowSpanHeaders = [];
    allColumns.forEach((column) => {
      const { id, enableRowSpan } = column;
      if (enableRowSpan) {
        rowSpanHeaders.push({ id, topCellValue: null, topCellIndex: 0 });
      }
    });
    Object.assign(instance, { rowSpanHeaders });
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    rowSpanHeaders,
  } = useTable({ columns, data }, (hooks) => {
    hooks.useInstance.push(useInstance);
  });

  return (
    <div className="table-border">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);

            for (let j = 0; j < row.allCells.length; j++) {
              let cell = row.allCells[j];
              let rowSpanHeader = rowSpanHeaders.find(
                (x) => x.id === cell.column.id
              );

              if (rowSpanHeader) {
                if (
                  rowSpanHeader.topCellValue === null ||
                  rowSpanHeader.topCellValue !== cell.value
                ) {
                  cell.isRowSpanned = false;
                  rowSpanHeader.topCellValue = cell.value;
                  rowSpanHeader.topCellIndex = i;
                  cell.rowSpan = 1;
                } else {
                  rows[rowSpanHeader.topCellIndex].allCells[j].rowSpan++;
                  cell.isRowSpanned = true;
                }
              }
            }
            return null;
          })}
          {rows.map((row) => {
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  if (cell.isRowSpanned) return null;
                  else
                    return (
                      <td rowSpan={cell.rowSpan} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
