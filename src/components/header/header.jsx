import React from "react";
import styles from "./header.module.css";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => (
  <div className={styles.header}>
    <h1 className={styles.logo}>Cafe Julieve</h1>
    <button className={styles.helper}>
      <FontAwesomeIcon icon={faQuestion} />
    </button>
  </div>
);

export default Header;
