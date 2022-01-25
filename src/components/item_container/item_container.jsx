import React from "react";
import ItemGroup from "../item_group/item_group";
import "./item_container.scss";

const ItemContainer = ({ items }) => {
  const groups = [];

  for (const id in items) {
    groups.push(<ItemGroup item={items[id]} />);
  }

  return <div className="item-container">{groups}</div>;
};

export default ItemContainer;
