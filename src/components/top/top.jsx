import React from "react";
import "./top.scss";
import Moment from "react-moment";

const Top = (props) => {
  const nowTime = Date.now();

  return (
    <header className="top">
      <p>아이템 종류</p>
      <Moment format="MM월 DD일" withTitle>
        {nowTime}
      </Moment>
    </header>
  );
};

export default Top;
