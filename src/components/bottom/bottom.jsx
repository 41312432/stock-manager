import React from "react";
import Setting_button from "../setting_button/setting_button";
import "./bottom.scss";

const Bottom = ({ storage, properties, storageType }) => {
  return (
    <footer className="bottom">
      <Setting_button
        storage={storage}
        properties={properties}
        storageType={storageType}
      />
    </footer>
  );
};
export default Bottom;
