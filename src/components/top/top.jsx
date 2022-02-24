import React from "react";
import "./top.scss";
import "moment/locale/ko";
import Moment from "react-moment";

const Top = ({ storageType }) => {
  return (
    <header className="top">
      <p>{storageType}</p>
      <Moment format="MMM DD dd hh:mm" locale="ko" />
    </header>
  );
};

export default Top;
