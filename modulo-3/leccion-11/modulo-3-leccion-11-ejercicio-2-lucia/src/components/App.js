import "../styleSheets/App.css";
import React from "react";
import fetchPeople from "../services/ApiComponent";
import CardsList from "./CardsList";
import FilterList from "./FilterList";
import { Route, Switch } from "react-router-dom";
import PersonDetail from "./PersonDetail";

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
    if (ev.currentTarget.name === "male" && ev.currentTarget.checked === true) {
      const male = this.state.personInfo.filter((item) => item.gender === "male");
      this.setState({
        personInfo: male,
      });
    }
    if (ev.currentTarget.name === "female" && ev.currentTarget.checked === true) {
      const female = this.state.personInfo.filter((item) => item.gender === "female");
      this.setState({
        personInfo: female,
      });
    }
    if (ev.currentTarget.name === "Inverness" && ev.currentTarget.checked === true) {
      const Inverness = this.state.personInfo.filter((item) => item.location.city === "Inverness");
      this.setState({
        personInfo: Inverness,
      });
    }
    if (ev.currentTarget.name === "Ballina" && ev.currentTarget.checked === true) {
      const Ballina = this.state.personInfo.filter((item) => item.location.city === "Ballina");
      this.setState({
        personInfo: Ballina,
      });
    }
    if (ev.currentTarget.name === "Sydney" && ev.currentTarget.checked === true) {
      const Sydney = this.state.personInfo.filter((item) => item.location.city === "Sydney");
      this.setState({
        personInfo: Sydney,
      });
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
          <Switch>
            <Route path="/">
              <CardsList personInfo={this.state.personInfo} />
            </Route>
            <Route path="/user">
              <PersonDetail personInfo={this.state.personInfo} />
            </Route>
          </Switch>
        )}
      </div>
    );
  }
}

export default App;
