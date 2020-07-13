import React from "react";
import ReactDOM from "react-dom";
import DataUserInterface from "./DataUserInterface";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Nutrition facts</h1>
        <DataUserInterface />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
