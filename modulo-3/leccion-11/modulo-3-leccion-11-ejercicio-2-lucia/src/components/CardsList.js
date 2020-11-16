import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";
import { Link } from "react-router-dom";

class CardsList extends React.Component {
  render() {
    const peopleList = this.props.personInfo.map((item, index) => (
      <li className="list" key={index}>
        <link to={"/ + item"}>
          <Cards
            image={item.picture.medium}
            name={item.name.first}
            lastName={item.name.last}
            city={item.location.city}
            age={item.dob.age}
          />
        </link>
      </li>
    ));
    return <ul className="people-list">{peopleList}</ul>;
  }
}
CardsList.propTypes = {};
export default CardsList;
