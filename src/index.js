import React from "react";
import ReactDOM from "react-dom";

import TrafficLight from "./TrafficLight";
// import Message from "./Message";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <TrafficLight initialValue={0} />
      {/* <TrafficLight initialValue={1} /> */}
      {/* <Message /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
