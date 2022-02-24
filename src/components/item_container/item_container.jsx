import React from "react";
import ItemGroup from "../item_group/item_group";
import "./item_container.scss";

const ItemContainer = ({ items, itemName, properties }) => {
  const groups = [];

  for (const id in items) {
    groups.push(
      <ItemGroup item={items[id]} itemName={itemName} properties={properties} />
    );
  }

  return <div className="item-container">{groups}</div>;
};

export default ItemContainer;
