import "../styleSheets/App.css";
import React from "react";
import fetchPeople from "../services/ApiComponent";
import CardsList from "./CardsList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: "",
    };
    this.newApiComponent = this.newApiComponent.bind(this);
  }
  newApiComponent() {
    fetchPeople().then((data) => {
      this.setState({
        personInfo: data.results,
      });
    });
  }

  render() {
    // const { personInfo } = this.state;
    console.log(this.state.personInfo);
    return (
      <div className="App">
        <button onClick={this.newApiComponent}>Click</button>
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
