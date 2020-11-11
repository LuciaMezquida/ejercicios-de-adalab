import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
  render() {
    return (
      <form action="" className="form">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" />
        <label htmlFor="description">Descripción</label>
        <textarea name="description" id="description" cols="30" rows="10"></textarea>
        <select name="language" id="language">
          <option value="default" disabled>
            Elige un idioma
          </option>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Portugués">Portugués</option>
        </select>
      </form>
    );
  }
}
Form.propTypes = {};
export default Form;
