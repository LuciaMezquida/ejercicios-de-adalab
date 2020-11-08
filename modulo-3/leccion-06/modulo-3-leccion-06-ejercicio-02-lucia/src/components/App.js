import "../styleSheets/App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "red",
    };
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }
  handleChangeColor() {
    console.log("click");
    this.setState((prevState, props) => {
      let nextBackground;
      if (prevState.background === "red") {
        nextBackground = "green";
      } else {
        nextBackground = "red";
      }
      return {
        background: nextBackground,
      };
    });
  }

  render() {
    return <div className={"App " + this.state.background} onClick={this.handleChangeColor}></div>;
  }
}

export default App;
