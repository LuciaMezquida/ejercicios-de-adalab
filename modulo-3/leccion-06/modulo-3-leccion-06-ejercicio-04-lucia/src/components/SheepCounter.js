import React from "react";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState, props) => {
      prevState = prevState.counter + 1;
      return {
        counter: prevState,
      };
    });
  }

  render() {
    console.log(this.state.counter);
    return (
      <>
        <p className="text">{this.state.counter}</p>
        <button className="btn" onClick={this.handleClick} value="sheep">
          Más ovejas
        </button>
      </>
    );
  }
}

export default SheepCounter;
