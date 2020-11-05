import React from "react";

class OtherHalfPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="HalfPage">{this.props.children}</div>;
  }
}

export default OtherHalfPage;
