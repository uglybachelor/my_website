import React, { Component } from "react";

import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-section">
        <p className="navtitle">Amateur Hour</p>
      </nav>
    );
  }
}

export default Nav;
