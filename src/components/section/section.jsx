import React, { useEffect, useState } from "react";
import Table from "../table/table";
import Top from "../top/top";
import "./section.scss";

const Section = ({ storage, storageType, itemProperties }) => {
  const [stock, setStock] = useState({});

  useEffect(() => {
    const stopSync = storage.syncStocksByStorageType((stock) => {
      setStock(stock);
    }, storageType);
    return () => {
      stopSync();
    };
  }, []);

  return (
    <section className="section">
      <Top storageType={storageType} />
      <Table storage={storage} stock={stock} itemProperties={itemProperties} />
    </section>
  );
};

export default Section;
