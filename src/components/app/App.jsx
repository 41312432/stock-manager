import "./App.scss";
import Header from "../header/header";
import TabContainer from "../tab/tab_container";
import Footer from "../footer/footer";
import { useState, useEffect } from "react";

function App({ storage }) {
  const [itemProperties, setItemProperties] = useState({});

  useEffect(() => {
    const stopSync = storage.syncItemProperties((properties) => {
      setItemProperties(properties);
    });
    return () => {
      stopSync();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <TabContainer storage={storage} itemProperties={itemProperties} />
      <Footer />
    </div>
  );
}

export default App;
