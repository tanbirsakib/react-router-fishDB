import React from "react";
import { NavLink } from "react-router-dom";
import "./Heade.css";
const Header = () => {
  return (
    <div className="nav-bar">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/fishes">Fishes</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Header;
