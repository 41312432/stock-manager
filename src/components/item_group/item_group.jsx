import React from "react";
import ReactTooltip from "react-tooltip";
import Moment from "react-moment";
import "./item_group.scss";

const ItemGroup = ({ item, itemName, properties }) => {
  const imgs = [];
  const src = `../../../icon/${itemName}.png`;

  for (let i = 0; i < item.amount; i++) {
    imgs.push(<img src={src} alt="" />);
  }

  return (
    <div className="item-group" data-tip="React-tooltip">
      {imgs}
      <ReactTooltip place="top" type="info" effect="float">
        <Moment add={{ days: properties.expDate }} format="LL" locale="ko">
          {item.createDate}
        </Moment>
      </ReactTooltip>
    </div>
  );
};

export default ItemGroup;
