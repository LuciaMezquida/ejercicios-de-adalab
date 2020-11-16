import React from "react";
import PropTypes from "prop-types";

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="image-container">
          <img src={this.props.image} alt={this.props.name + " " + this.props.lastName} />
        </div>
        <div className="text-container">
          <h2 className="name">{this.props.name + " " + this.props.lastName}</h2>
          <p className="city">{this.props.city}</p>
          <p className="age">{this.props.age}</p>
        </div>
      </>
    );
  }
}
Cards.propTypes = {};
export default Cards;
