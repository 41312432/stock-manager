import React from "react";
import "./top.scss";
import moment from "moment";
import "moment/locale/ko";
import Moment from "react-moment";

const Top = ({ storageType }) => {
  const nowTime = moment();

  return (
    <header className="top">
      <p>{storageType}</p>
      <Moment format="MMM DDD dddd hh:mm" withTitle>
        {nowTime}
      </Moment>
    </header>
  );
};

export default Top;
