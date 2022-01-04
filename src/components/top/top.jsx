import React from "react";
import "./top.scss";
import moment from "moment";
import "moment/locale/ko";
import Moment from "react-moment";

const Top = (props) => {
  const nowTime = moment();

  return (
    <header className="top">
      <p>아이템 종류</p>
      <Moment format="MMM DDD dddd" withTitle>
        {nowTime}
      </Moment>
    </header>
  );
};

export default Top;
