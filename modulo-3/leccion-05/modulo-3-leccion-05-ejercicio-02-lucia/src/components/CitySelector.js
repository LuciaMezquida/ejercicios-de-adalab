import React from "react";

class CitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.myDestination = "Praga";
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.props.handleChange(value);
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
      </div>
    );
  }
}

export default CitySelector;
