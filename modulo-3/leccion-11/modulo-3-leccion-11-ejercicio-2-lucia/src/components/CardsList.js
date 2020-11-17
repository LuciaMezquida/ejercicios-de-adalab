import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";

class CardsList extends React.Component {
  render() {
    const peopleList = this.props.personInfo.map((item, index) => (
      <Cards
        key={index}
        id={index}
        image={item.picture.medium}
        name={item.name.first}
        lastName={item.name.last}
        city={item.location.city}
        age={item.dob.age}
      />
    ));
    return <ul className="people-list">{peopleList}</ul>;
  }
}
CardsList.propTypes = {};
export default CardsList;
