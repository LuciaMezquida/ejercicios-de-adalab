import "../styleSheets/App.css";
import React from "react";
import SheepCounter from "./SheepCounter";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SheepCounter />;
  }
}

export default App;
