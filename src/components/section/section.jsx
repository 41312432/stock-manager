import React, { useEffect, useState } from "react";
import Table from "../table/table";
import Top from "../top/top";
import Bottom from "../bottom/bottom";
import "./section.scss";

const Section = ({ storage, storageType }) => {
  const [stock, setStock] = useState({});
  const [properties, setProperties] = useState({});

  useEffect(() => {
    const stopSync = storage.syncPropertiesByStorageType((properties) => {
      setProperties(properties);
    }, storageType);

    return () => {
      stopSync();
    };
  }, []);

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
      <Table storage={storage} stock={stock} properties={properties} />
      <Bottom
        storage={storage}
        properties={properties}
        storageType={storageType}
      />
    </section>
  );
};

export default Section;
