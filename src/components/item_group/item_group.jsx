import React from "react";
import "./item_group.scss";

const ItemGroup = ({ item, itemName }) => {
  const imgs = [];
  const src = `../../../icon/${itemName}.png`;

  for (let i = 0; i < item.amount; i++) {
    imgs.push(<img src={src} alt="" />);
  }
  return <div className="item-group">{imgs}</div>;
};

export default ItemGroup;
