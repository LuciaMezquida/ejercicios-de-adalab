import React from "react";

class Destiny extends React.Component {
  handleChange(event) {
    const city = event.currentTarget.value;
    alert("Tu destino es viajar a " + city);
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

export default Destiny;
