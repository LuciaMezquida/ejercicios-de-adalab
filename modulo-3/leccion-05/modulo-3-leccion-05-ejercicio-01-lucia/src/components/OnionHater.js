import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = "";
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    if (event.currentTarget.value.toLowerCase().includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
      this.isHating = "red";
    } else {
      this.isHating = "";
    }
    this.forceUpdate();
  }
  render() {
    return (
      <div className={"container " + this.isHating}>
        <textarea className="App" onChange={this.handleChange}></textarea>;
      </div>
    );
  }
}

export default OnionHater;
