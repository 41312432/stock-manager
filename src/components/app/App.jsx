import { useState } from "react";
import Content from "../content/content";
import Header from "../header/header";
import styles from "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
