import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import ReactModal from "react-modal";
import Moment from "react-moment";
import "./item_group.scss";
import moment from "moment";
import ItemGroupMonitor from "../item_group_monitor/item_group_monitor";

const ItemGroup = ({ item, itemName, properties }) => {
  const [showModal, setShowModal] = useState(false);
  const [expClass, setExpClass] = useState("");
  const [icons, setIcons] = useState([]);

  const handleOpenEditor = () => {
    setShowModal(true);
  };
  const handleCloseEditor = () => {
    setShowModal(false);
  };

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
    <>
      <div
        className={expClass}
        data-tip="React-tooltip"
        onClick={handleOpenEditor}
      >
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
      <ReactModal
        isOpen={showModal}
        onRequestClose={handleCloseEditor}
        style={{
          overlay: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            margin: "auto",
            border: "2px solid #000",
            borderRadius: "15px",
            background: "#fff",
            overflow: "auto",
            width: "75%",
            height: "60%",
            WebkitOverflowScrolling: "touch",
            padding: "5px 20px",
          },
        }}
      >
        <ItemGroupMonitor item={item} properties={properties} />
      </ReactModal>
    </>
  );
};

export default ItemGroup;
