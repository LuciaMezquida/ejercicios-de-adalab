import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  render() {
    return (
      <Link className="link" to={`/user/${this.props.id}`}>
        <li className="list">
          <div className="image-container">
            <img src={this.props.image} alt={this.props.name + " " + this.props.lastName} />
          </div>
          <div className="text-container">
            <h2 className="name">{this.props.name + " " + this.props.lastName}</h2>
            <p className="city">{this.props.city}</p>
            <p className="age">{this.props.age}</p>
          </div>
        </li>
      </Link>
    );
  }
}
Cards.propTypes = {};
export default Cards;
