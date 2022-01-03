import { useState } from "react";
import "./App.scss";
import Header from "../header/header";
import TabContainer from "../tab/tab_container";

function App() {
  return (
    <div className="App">
      <Header />
      <TabContainer />
    </div>
  );
}

export default App;
