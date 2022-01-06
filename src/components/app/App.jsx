import { useState } from "react";
import "./App.scss";
import Header from "../header/header";
import TabContainer from "../tab/tab_container";
import Footer from "../footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <TabContainer />
      <Footer />
    </div>
  );
}

export default App;
