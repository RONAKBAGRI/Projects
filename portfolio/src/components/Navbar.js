import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavStyle.css";
import photo from "../assets/dp.jpg";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#151414" : "#333333",
    fontSize: isActive ? "1.5rem" : "1rem",
  });

  return (
    <div className="header">
      <div className="logo">
        <img src={photo} alt="Ronak" />
        <p>Ronak's Portfolio</p>
      </div>
      <div className={`navbar ${isOpen ? "active" : ""}`}>
        <NavLink style={navLinkStyle} to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink style={navLinkStyle} to="/about" onClick={() => setIsOpen(false)}>
          About
        </NavLink>
        <NavLink style={navLinkStyle} to="/skills" onClick={() => setIsOpen(false)}>
          Skills
        </NavLink>
        <NavLink style={navLinkStyle} to="/experience" onClick={() => setIsOpen(false)}>
          Experience
        </NavLink>
        <NavLink style={navLinkStyle} to="/projects" onClick={() => setIsOpen(false)}>
          Projects
        </NavLink>
        <NavLink style={navLinkStyle} to="/contact" onClick={() => setIsOpen(false)}>
          <button className="contact-button">Contact</button>
        </NavLink>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FaBars size={24} />
      </div>
    </div>
  );
}

export default Navbar;
