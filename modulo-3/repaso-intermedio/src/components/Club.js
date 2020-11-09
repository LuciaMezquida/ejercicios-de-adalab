import React from "react";
import PropTypes from "prop-types";

class Club extends React.Component {
  render() {
    return (
      <div className="App">
        <i className={this.props.class}></i>
        <p>{this.props.name}</p>
        <ul>
          {this.props.members.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Club;
