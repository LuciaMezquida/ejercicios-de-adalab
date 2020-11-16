import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";

class CardsList extends React.Component {
  render() {
    const peopleList = this.props.personInfo.map((item, index) => (
      <li className="list" key={index}>
        <Cards
          image={item.picture.medium}
          name={item.name.first}
          lastName={item.name.last}
          city={item.location.city}
          age={item.dob.age}
        />
      </li>
    ));
    return <ul className="people-list">{peopleList}</ul>;
  }
}
CardsList.propTypes = {};
export default CardsList;
