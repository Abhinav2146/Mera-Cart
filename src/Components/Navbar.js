import React from "react";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            Mera Cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
