import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const container = document.querySelector(".container");
    if (event.currentTarget.value.toLowerCase().includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
      container.classList.add("red");
      this.isHating = true;
    } else {
      container.classList.remove("red");
      this.isHating = false;
    }
    this.forceUpdate();
  }
  render() {
    return (
      <div className="container">
        <textarea className="App" onChange={this.handleChange}></textarea>;
      </div>
    );
  }
}

export default OnionHater;
