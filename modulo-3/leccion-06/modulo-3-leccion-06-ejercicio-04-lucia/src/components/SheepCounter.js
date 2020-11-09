import React from "react";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p className="text"></p>
        <button className="btn">Más ovejas</button>
      </>
    );
  }
}

export default SheepCounter;
