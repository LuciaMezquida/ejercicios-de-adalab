import React from "react";
import CityImage from "./CityImage";
import CitySelector from "./CitySelector";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.destiny = "Praga";
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.destiny = value;
    alert("Tu destino es viajar a " + this.destiny);
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <CitySelector handleChange={this.handleChange} />
        <CityImage city={this.destiny} />
      </div>
    );
  }
}

export default Destiny;
