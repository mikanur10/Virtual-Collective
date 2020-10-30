import React from "react";
import "./UniversalNav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLink className="logo" to="/">
        VIRTUAL COLLECTIVE
      </NavLink>
      <div className="links">
        <NavLink className="link" to="/upcoming">
          Upcoming
        </NavLink>
        <NavLink className="link" to="/favorites">
          Favorites
        </NavLink>
        <NavLink className="link" to="/search">
          Search
        </NavLink>
        <NavLink className="link" to="/account">
          Account
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
