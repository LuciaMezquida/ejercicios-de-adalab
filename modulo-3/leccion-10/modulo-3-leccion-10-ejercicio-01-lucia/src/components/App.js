import "../styleSheets/App.css";
import React from "react";
import fetchPeople from "../services/ApiComponent";
import CardsList from "./CardsList";
import FilterList from "./FilterList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: "",
    };
    this.newApiComponent = this.newApiComponent.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  newApiComponent() {
    fetchPeople().then((data) => {
      this.setState({
        personInfo: data.results,
      });
    });
  }
  handleFilter(ev) {
    console.log(ev.currentTarget.name);
    if (ev.currentTarget.name === "gender") {
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.newApiComponent}>Click</button>
        <FilterList handleFilter={this.handleFilter} personInfo={this.state.personInfo} />
        {this.state.personInfo.length === 0 ? (
          <img src="//s.svgbox.net/loaders.svg?fill=805ad5#hearts" />
        ) : (
          <CardsList personInfo={this.state.personInfo} />
        )}
      </div>
    );
  }
}

export default App;
