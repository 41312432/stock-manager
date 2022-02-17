import React, { useState } from "react";
import ReactModal from "react-modal";
import "./setting_button.scss";
import Setting from "../setting/setting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Setting_button = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenEditor = () => {
    setShowModal(true);
  };
  const handleCloseEditor = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="setting-button" onClick={handleOpenEditor}>
        <FontAwesomeIcon icon={faCog} />
      </button>
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
        <Setting />
      </ReactModal>
    </>
  );
};

export default Setting_button;
