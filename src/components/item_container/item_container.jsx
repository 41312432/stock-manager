import React from "react";
import ItemGroup from "../item_group/item_group";
import "./item_container.scss";

const ItemContainer = () => (
  <div className="item-container">
    <ItemGroup />
    <ItemGroup />
  </div>
);

export default ItemContainer;
