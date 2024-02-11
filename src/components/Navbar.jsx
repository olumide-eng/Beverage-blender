import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">Beverage Blender</span>
        <div className="nav-link">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
