import "../styleSheets/App.css";
import React from "react";
import data from "../data/data.json";
import ClubList from "./ClubList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    console.log(this.state.data);
    return <ClubList data={this.state.data} />;
  }
}

export default App;
