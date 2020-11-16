import "../styleSheets/App.css";
import React from "react";
import apiComponent from "../services/apiComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: "",
    };
    this.newApiComponent = this.newApiComponent.bind(this);
  }
  newApiComponent() {
    apiComponent().then((data) => {
      this.setState({
        personInfo: data.results,
      });
    });
  }

  render() {
    const { personInfo } = this.state;
    console.log(this.state.personInfo);
    return (
      <div className="App">
        <button onClick={this.newApiComponent}>Click</button>
      </div>
    );
  }
}

export default App;
