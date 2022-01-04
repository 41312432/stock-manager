import React, { useMemo } from "react";
import "./table.scss";
import { useTable } from "react-table";

const Table = (props) => {
  const data = useMemo(
    () => [
      {
        col1: "케이크",
        col2: "생크림",
        col3: <button></button>,
        col4: <button></button>,
      },
      {
        col1: "케이크",
        col2: "딸기",
        col3: <button></button>,
        col4: <button></button>,
      },
      {
        col1: "케이크",
        col2: "딸기",
        col3: <button></button>,
        col4: <button></button>,
      },
      {
        col1: "케이크",
        col2: "치즈",
        col3: <button></button>,
        col4: <button></button>,
      },
      {
        col1: "마카롱",
        col2: "유자",
        col3: <button></button>,
        col4: <button></button>,
      },
      {
        col1: "마카롱",
        col2: "흑임자",
        col3: <button></button>,
        col4: <button></button>,
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "분류",
        accessor: "col1",
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
