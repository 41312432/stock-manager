import React from "react";
import styles from "./header.scss";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => (
  <div className="header">
    <h1 className="logo">Cafe Julieve</h1>
    <button className="helper">
      <FontAwesomeIcon icon={faQuestion} />
    </button>
  </div>
);

export default Header;
