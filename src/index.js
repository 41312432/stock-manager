import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import { firebaseApp } from "./service/firebase";
import Storage from "./service/storage";

const storage = new Storage();

ReactDOM.render(
  <React.StrictMode>
    <App storage={storage} />
  </React.StrictMode>,
  document.getElementById("root")
);
