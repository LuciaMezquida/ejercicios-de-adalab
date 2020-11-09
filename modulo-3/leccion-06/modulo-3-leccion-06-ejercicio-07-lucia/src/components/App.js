import "../styleSheets/App.css";
import React from "react";
import FruitBasket from "./FruitBasket";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <FruitBasket />;
  }
}

export default App;
