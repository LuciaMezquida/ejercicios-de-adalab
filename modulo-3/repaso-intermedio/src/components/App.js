import "../styleSheets/App.css";
import React from "react";
import data from "../data/data.json";
import ClubList from "./ClubList";

class App extends React.Component {
  render() {
    return <ClubList data={data} />;
  }
}

export default App;
