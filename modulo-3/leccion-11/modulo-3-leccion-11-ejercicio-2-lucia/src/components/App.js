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
    this.renderPersonDetail = this.renderPersonDetail.bind(this);
  }
  newApiComponent() {
    fetchPeople().then((data) => {
      this.setState({
        personInfo: data.results,
      });
    });
  }
  handleFilter(ev) {
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

  renderPersonDetail(props) {
    const routeCharacterId = props.match.params.userId;
    const person = this.state.personInfo.find((user) => user.login.uuid === routeCharacterId);
    if (person) {
      return (
        <PersonDetail
          image={person.picture.large}
          name={person.name.first}
          lastName={person.name.last}
          city={person.location.city}
          age={person.dob.age}
        />
      );
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <button onClick={this.newApiComponent}>Click</button>
            <FilterList handleFilter={this.handleFilter} personInfo={this.state.personInfo} />
            <CardsList personInfo={this.state.personInfo} />
          </Route>
          <Route path="/user/:userId" render={this.renderPersonDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
