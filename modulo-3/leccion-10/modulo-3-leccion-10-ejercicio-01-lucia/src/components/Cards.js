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
          <img src="" alt="" />
        </div>
        <div className="text-container">
          <h2 className="name"></h2>
          <p className="city"></p>
          <p className="age"></p>
        </div>
      </>
    );
  }
}
Cards.propTypes = {};
export default Cards;
