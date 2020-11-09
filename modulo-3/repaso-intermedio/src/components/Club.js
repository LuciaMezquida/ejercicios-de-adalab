import React from "react";
import PropTypes from "prop-types";

class Club extends React.Component {
  render() {
    return (
      <div className="club">
        <i className={this.props.class}></i>
        <p className="title">{this.props.name}</p>
        <p className="members">Members:</p>
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
