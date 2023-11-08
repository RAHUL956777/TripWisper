import Header from "./Components/Header/Header";
import "./App.css";
import Map from "./Components/Map/Map";
import List from "./Components/List/List";
import dotenv from "dotenv";

dotenv.config();

function App() {
  return <>
    <Header />
    <div className="container">
      <div className="left">
        <Map />
      </div>
      <div className="right">
        <List />
      </div>
    </div>
  </>;
}

export default App;
