import "../styleSheets/App.css";
import React from "react";
import Collapsible from "./Collapsible";
import Show from "./Show";
import ships from "./data/ships.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shipNames: ships.palettes,
    };
  }

  render() {
    console.log(this.state.shipNames);
    const listShipNames = this.state.shipNames.map((item, index) => (
      <li key={index}>
        <Collapsible name={item.name}>
          <Show showName={item.from} />
        </Collapsible>
      </li>
    ));
    return (
      <div>
        <ul>{listShipNames}</ul>
      </div>
    );
  }
}

export default App;
