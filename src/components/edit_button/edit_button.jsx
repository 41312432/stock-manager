import React, { useState } from "react";
import "./edit_button.scss";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactModal from "react-modal";
import Editor from "../editor/editor";

const EditButton = ({ storage, item, stock, itemProperty }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenEditor = () => {
    setShowModal(true);
  };
  const handleCloseEditor = () => {
    setShowModal(false);
  };
  return (
    <>
      <button className="edit-button" onClick={handleOpenEditor}>
        <FontAwesomeIcon icon={faPen} />
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
        <Editor
          storage={storage}
          item={item}
          stock={stock}
          itemProperty={itemProperty}
        />
      </ReactModal>
    </>
  );
};

export default EditButton;
