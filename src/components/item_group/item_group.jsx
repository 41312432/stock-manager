import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import Moment from "react-moment";
import "./item_group.scss";
import moment from "moment";

const ItemGroup = ({ item, itemName, properties }) => {
  const [expClass, setExpClass] = useState("");
  const imgs = [];
  const src = `../../../icon/${itemName}.png`;

  for (let i = 0; i < item.amount; i++) {
    imgs.push(<img src={src} alt="" />);
  }

  useEffect(() => {
    const dueDate = moment(item.createDate)
      .add(properties.expDate, "days")
      .endOf("day")
      .diff(moment(), "days");

    if (dueDate == 0) {
      setExpClass("item-group eve");
    } else if (dueDate < 0) {
      setExpClass("item-group expired");
    } else {
      setExpClass("item-group");
    }
  });

  return (
    <div className={expClass} data-tip="React-tooltip">
      {imgs}
      <ReactTooltip place="top" type="info" effect="float">
        <ul>
          <li>
            생성 날짜 :{" "}
            <Moment format="MMM Do dddd" locale="ko">
              {item.createDate}
            </Moment>
          </li>
          <li>
            폐기 날짜 :{" "}
            <Moment
              add={{ days: properties.expDate }}
              format="MMM Do dddd"
              locale="ko"
            >
              {item.createDate}
            </Moment>
          </li>
          <li>
            폐기 :{" "}
            <Moment fromNow locale="ko">
              {moment(item.createDate)
                .add(properties.expDate + 1, "days")
                .endOf("day")
                .format("YYYY-MM-DD")}
            </Moment>
          </li>
        </ul>
      </ReactTooltip>
    </div>
  );
};

export default ItemGroup;
