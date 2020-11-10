import "../styleSheets/App.css";
import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: 0,
      minutos: 0,
      segundos: 0,
    };
    this.updateClock = this.updateClock.bind(this);
    setInterval(this.updateClock, 1000);
  }
  updateClock() {
    let date = new Date();
    this.setState({
      hora: date.getHours(),
      minutos: date.getMinutes(),
      segundos: date.getSeconds(),
    });
  }
  render() {
    return (
      <div className="container">
        <p className="clock">{`${this.state.hora} : ${this.state.minutos
          .toString()
          .padStart(2, "0")} : ${this.state.segundos.toString().padStart(2, "0")}`}</p>
      </div>
    );
  }
}

export default Clock;
