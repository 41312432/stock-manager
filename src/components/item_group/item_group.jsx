import React from "react";
import "./item_group.scss";

const ItemGroup = ({ item }) => {
  const imgs = [];

  for (let i = 0; i < item.amount; i++) {
    imgs.push(<img src="../../../icon/sliceCake.png" alt="" />);
  }
  return <div className="item-group">{imgs}</div>;
};

export default ItemGroup;
