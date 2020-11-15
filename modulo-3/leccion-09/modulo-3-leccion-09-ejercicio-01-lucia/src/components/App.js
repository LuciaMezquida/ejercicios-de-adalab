import "../styleSheets/App.css";
import React from "react";

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNumbers: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handleInput(ev) {
    const itemInput = ev.currentTarget.value;
    const listNumbers = numbers
      .filter((item) => item > itemInput)
      .map((item) => <li key={item}>{item}</li>);
    this.setState({
      listNumbers: listNumbers,
    });
  }
  handleCheck(ev) {
    if (ev.currentTarget.checked === true) {
      const listFiltered = this.state.listNumbers;
      const listNumbers = listFiltered.filter((item) => item.key % 2 === 0);

      this.setState({
        listNumbers: listNumbers,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <form action="">
          <input onChange={this.handleInput} type="text" />
          <label htmlFor="even">
            <input
              onClick={this.handleCheck}
              id="even"
              type="checkbox"
              value="chooseeven"
              name="even"
            />
            Seleccionar sólo los pares
          </label>
        </form>
        <ul>{this.state.listNumbers}</ul>
      </div>
    );
  }
}

export default App;
