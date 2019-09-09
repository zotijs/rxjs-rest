import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="ui four item menu">
      <Link to="/" className="item">
        <i className="home icon"></i>
      </Link>
      <Link to="/users" className="item">
        People
      </Link>
      <Link
        to="/cats"
        style={{ pointerEvents: "none" }}
        className="disabled item"
      >
        Cats
      </Link>
      <Link
        to="/plants"
        style={{ pointerEvents: "none" }}
        className="disabled item"
      >
        Plants
      </Link>
    </div>
  );
};

export default Menu;
