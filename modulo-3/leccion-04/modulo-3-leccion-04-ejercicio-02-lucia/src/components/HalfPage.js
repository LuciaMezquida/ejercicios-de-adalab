import React from "react";

class HalfPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="OtherHalfPage">{this.props.children}</div>;
  }
}

export default HalfPage;
