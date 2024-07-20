import React from "react";
import { NavLink } from "react-router-dom";
import "./NavStyle.css";
import photo from '../assets/dp.jpg';
function Navbar() {
  const navLinkstyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#151414" : "#333333",
      fontSize:isActive ?"1.5rem":"1rem",
    };
  };
  return (
    <div className="header">
        <div className="logo">
            <img src={photo} alt="Ronak" />
            <p>Ronak's Portfolio</p>
        </div>
      <div className="navbar">
        <NavLink style={navLinkstyle} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkstyle} to="/about">
          About
        </NavLink>
        <NavLink style={navLinkstyle} to="/skills">
          Skills
        </NavLink>
        <NavLink style={navLinkstyle} to="/experience">
          Experience
        </NavLink>
        <NavLink style={navLinkstyle} to="/projects">
          Projects
        </NavLink>
        <NavLink style={navLinkstyle} to="/contact">
          <button className="contact-button">Contact</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
