import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="list-container">
        <li className="list">
          <Link className="link" to="/counter">
            Counter
          </Link>
        </li>
        <li className="list">
          <Link className="link" to="/relax">
            Relax
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Header.propTypes = {};
export default Header;
