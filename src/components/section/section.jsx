import moment from "moment";
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

  //어차피 stock은 storageType으로 걸러져서 들어온 stock이니까 그리는데는 문제가 없고...

  return (
    <section className="section">
      <Top />
      <Table stock={stock} itemProperties={itemProperties} />
    </section>
  );
};

export default Section;
