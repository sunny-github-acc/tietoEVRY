import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TravelInfo from "./components/TravelInfo";
import Context from "./globalState/Context";

function App() {
  const [start, setStart] = useState("");
  const [finish, setFinish] = useState("");
  const [distance, setDistance] = useState(100);
  const [lengthStay, setLengthStay] = useState(20);

  const globalState = {
    start,
    setStart,
    finish,
    setFinish,
    distance,
    setDistance,
    lengthStay,
    setLengthStay,
  };

  return (
    <Context.Provider value={globalState}>
      <div className="App">
        <Header />
        <TravelInfo />
      </div>
    </Context.Provider>
  );
}

export default App;
