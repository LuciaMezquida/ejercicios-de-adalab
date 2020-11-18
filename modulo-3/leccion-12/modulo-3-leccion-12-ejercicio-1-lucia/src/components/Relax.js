import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Relax = () => {
  return (
    <section className="relax">
      <p className="text">Te queda poco para dormir una semana entera</p>
      <Link to="/">
        <button>Back</button>
      </Link>
    </section>
  );
};
Relax.propTypes = {};
export default Relax;
