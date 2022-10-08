import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Link to="/" className="navbar-brand">Beer-Home</Link>
        </a>
      </div>
    </nav>
  );
};

export default Header;
