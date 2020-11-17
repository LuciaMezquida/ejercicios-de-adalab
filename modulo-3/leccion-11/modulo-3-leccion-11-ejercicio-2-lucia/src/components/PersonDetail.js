import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class PersonDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="detail">
        <div>
          <div className="detail-image">
            <img
              src={this.props.personInfo.picture.medium}
              alt={this.props.personInfo.name.first + " " + this.props.personInfo.name.last}
            />
          </div>
          <h2 className="detail name">
            {this.props.personInfo.name.first + " " + this.props.personInfo.name.last}
          </h2>
          <p className="detail-city">{this.props.personInfo.location.city}</p>
          <p className="detail-age">{this.props.personInfo.dob.age}</p>
        </div>
        <Link to="/">
          <button className="detail__button">Back</button>
        </Link>
      </section>
    );
  }
}
PersonDetail.propTypes = {};
export default PersonDetail;
