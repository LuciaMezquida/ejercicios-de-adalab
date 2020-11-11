import React from "react";
import PropTypes from "prop-types";

class Club extends React.Component {
  render() {
    return (
      <div className="club">
        <i className={this.props.class + " icon"}></i>
        <div className="text">
          <h2 className="title">{this.props.name}</h2>
          <h3 className="members">Members:</h3>
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
Club.propTypes = {
  class: PropTypes.string,
  name: PropTypes.string,
  members: PropTypes.arrayOf(PropTypes.string),
};

export default Club;
