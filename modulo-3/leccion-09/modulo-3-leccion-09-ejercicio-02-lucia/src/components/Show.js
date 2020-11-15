import React from "react";
import PropTypes from "prop-types";

class Show extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.showName}</div>;
  }
}
export default Show;
