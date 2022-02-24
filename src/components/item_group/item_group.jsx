import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import Moment from "react-moment";
import "./item_group.scss";
import moment from "moment";

const ItemGroup = ({ item, itemName, properties }) => {
  const [expClass, setExpClass] = useState("");
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const src = `../../../icon/${itemName}.png`;

    const temp = [];
    const box = parseInt(item.amount / properties.numPerBox);
    const remain = item.amount % properties.numPerBox;

    if (box) {
      temp.push(<img src="../../../icon/Box.png" alt="" />);

      if (box > 1) {
        temp.push(<p> x {box}</p>);
      }
    }

    if (remain <= 3) {
      for (let i = 0; i < remain; i++) {
        temp.push(<img src={src} alt="" />);
      }
    } else {
      temp.push(<img src={src} alt="" />);
      temp.push(<p> x {remain}</p>);
    }

    console.log(temp);

    setIcons(temp);
  }, []);

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
  }, []);

  return (
    <div className={expClass} data-tip="React-tooltip">
      {icons}
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
