import React from "react";

import Searchbox from "./Searchbox";
import Button from "./Button";

import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <ul className="nav-list">
          <li>
            <h1>Dockt</h1>
          </li>
          <li>
            <Searchbox />
          </li>
          <li>
            <Button text="Sign in"></Button>
          </li>
          <li>
            <Button text="Sign up"></Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
