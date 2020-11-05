import React from "react";
import CityImage from "./CityImage";

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.myCity = "...";
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.destiny = event.currentTarget.value;
    alert("Tu destino es viajar a " + this.destiny);
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <label htmlFor="destiny">Selecciona un destino</label>
        <select name="destinies" id="destiny" onChange={this.handleChange}>
          <option value="" disabled selected>
            Elige destino
          </option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokio">Tokio</option>
        </select>
        <CityImage city={this.destiny} />
      </div>
    );
  }
}

export default Destiny;
