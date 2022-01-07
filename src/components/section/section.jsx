import React, { useEffect, useState } from "react";
import Table from "../table/table";
import Top from "../top/top";
import "./section.scss";

const Section = ({ storage, storageType }) => {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    const stopSync = storage.syncStocksByStorageType((stock) => {
      setStock(stock);
    }, storageType);
    return () => {
      stopSync();
    };
  }, []);

  console.log(
    storage.readProperty("strawberryCake").then((result) => console.log(result))
  );

  const updateStockItem = (itemType, item) => {
    setStock((stock) => {
      const updated = { ...stock };
      updated[itemType] = { ...updated[itemType], item };
      return updated;
    });
    storage.updateStock(itemType, item);
  };

  return (
    <section className="section">
      <Top />
      <Table stock={stock} />
    </section>
  );
};

export default Section;
