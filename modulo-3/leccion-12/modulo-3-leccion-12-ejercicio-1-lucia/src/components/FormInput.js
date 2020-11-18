import React from "react";
import PropTypes from "prop-types";
class FormInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <label htmlFor="text">Escribe arrrgo</label>
        <input onKeyUp={this.props.handleInput} type="text" id="text" />
      </div>
    );
  }
}
FormInput.propTypes = {};
export default FormInput;
