import React from "react";
import { Link } from "react-router-dom";
class PersonDetail extends React.Component {
  render() {
    return (
      <section className="detail">
        <div>
          <div className="detail-image">
            <img src={this.props.image} alt={this.props.name + " " + this.props.lastName} />
          </div>
          <h2 className="detail name">{this.props.name + " " + this.props.lastName}</h2>
          <p className="detail-city">{this.props.city}</p>
          <p className="detail-age">{this.props.age}</p>
        </div>
        <Link to="/">
          <button className="detail__button">Back</button>
        </Link>
      </section>
    );
  }
}
export default PersonDetail;
