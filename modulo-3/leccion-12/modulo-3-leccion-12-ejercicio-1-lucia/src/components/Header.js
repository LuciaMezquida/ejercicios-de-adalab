import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "react-router-dom";
import Counter from "./Counter";
import Relax from "./Relax";
const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link>
            <Counter />
          </Link>
        </li>
        <li>
          <Link>
            <Relax />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
Header.propTypes = {};
export default Header;
