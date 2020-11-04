import React from "react";

class OnionHater extends React.Component {
  handleChange(event) {
    if (event.currentTarget.value.includes("cebolla")) {
      alert("Odio la cebolla");
    }
  }
  render() {
    return <textarea className="App" onChange={this.handleChange}></textarea>;
  }
}

export default OnionHater;
