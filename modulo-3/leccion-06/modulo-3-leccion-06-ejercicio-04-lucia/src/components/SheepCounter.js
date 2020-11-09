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
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon Sheep.svg.hi.png"
    );
    const container = document.querySelector(".container");
    container.appendChild(img);
  }

  render() {
    console.log(this.state.counter);
    return (
      <div className="container">
        <p className="text">{this.state.counter}</p>
        <button className="btn" onClick={this.handleClick} value="sheep">
          Más ovejas
        </button>
      </div>
    );
  }
}

export default SheepCounter;
