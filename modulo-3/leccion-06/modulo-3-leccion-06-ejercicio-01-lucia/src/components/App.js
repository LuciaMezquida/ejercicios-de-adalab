import "../styleSheets/App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
    this.handleKeyup = this.handleKeyup.bind(this);
  }
  handleKeyup(ev) {
    this.setState({
      inputText: ev.currentTarget.value,
    });
  }

  render() {
    return (
      <div className="App">
        <form action="">
          <label htmlFor="text">Expresa tu opinión</label>
          <input type="text" id="text" onKeyUp={this.handleKeyup} />
        </form>
        <p>{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
