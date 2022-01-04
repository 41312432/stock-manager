import React from "react";
import Table from "../table/table";
import Top from "../top/top";
import "./section.scss";

const Section = (props) => (
  <section className="section">
    <Top />
    <Table />
  </section>
);

export default Section;
