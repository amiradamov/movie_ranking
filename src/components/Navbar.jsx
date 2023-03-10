import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="menu">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/product">Movies page</NavLink>
        {/* <NavLink to="/about">About</NavLink> */}
        {/* <NavLink to="/contact">Contact</NavLink> */}
      </nav>
    </div>
  );
}
