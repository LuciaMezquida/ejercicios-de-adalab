import React from "react";
import PropTypes from "prop-types";

class Club extends React.Component {
  render() {
    return (
      <div className="club">
        <i className={this.props.class + " icon"}></i>
        <div className="text">
          <p className="title">{this.props.name}</p>
          <p className="members">Members:</p>
          <ul className="list-container">
            {this.props.members.map((item) => (
              <li className="list list-members" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Club;
