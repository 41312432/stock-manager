import "./App.scss";
import Header from "../header/header";
import TabContainer from "../tab/tab_container";
import Footer from "../footer/footer";

function App({ storage }) {
  return (
    <div className="App">
      <Header />
      <TabContainer storage={storage} />
      <Footer />
    </div>
  );
}

export default App;
