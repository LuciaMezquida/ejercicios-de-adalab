import "../styleSheets/App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "red",
    };
  }

  render() {
    return <div className={"App " + this.state.background}></div>;
  }
}

export default App;
