import React from "react";
import "./edit_button.scss";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditButton = () => (
  <button className="edit-button">
    <FontAwesomeIcon icon={faPen} />
  </button>
);

export default EditButton;
