import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="ui four item menu">
      <Link to="/" className="item">
        <i className="home icon"></i>
      </Link>
      <Link to="/users" className="item">
        Users
      </Link>
      <Link
        to="/posts"
        style={{ pointerEvents: "none" }}
        className="disabled item"
      >
        Posts
      </Link>
      <Link
        to="/groups"
        style={{ pointerEvents: "none" }}
        className="disabled item"
      >
        Groups
      </Link>
    </div>
  );
};

export default Menu;
