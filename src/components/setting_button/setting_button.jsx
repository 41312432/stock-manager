import React, { useState } from "react";
import ReactModal from "react-modal";
import Setting from "../setting/setting";

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
      <button className="setting-button" onClick={handleOpenEditor}></button>
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
