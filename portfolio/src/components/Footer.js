import React from "react";
import { NavLink } from "react-router-dom";
import "./FooterStyle.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Links</h2>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experience</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h2>Platforms</h2>
          <ul>
            <li>
              <a href="https://leetcode.com/u/RONAK_BAGRI/" target="_blank" rel="noopener noreferrer">LeetCode</a>
            </li>
            <li>
              <a href="https://www.naukri.com/code360/profile/RONAK_BAGRI" target="_blank" rel="noopener noreferrer">Coding Ninjas</a>
            </li>
            <li>
              <a href="https://www.geeksforgeeks.org/user/2023umsnss/" target="_blank" rel="noopener noreferrer">GeeksforGeeks</a>
            </li>
            <li>
              <a href="https://codeforces.com/profile/RONAK_BAGRI" target="_blank" rel="noopener noreferrer">Codeforces</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Other Links</h2>
          <ul>
            <li>
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Thank You</h2>
          <p>
            Thank you for visiting my portfolio! I appreciate your time and
            interest. If you have any questions or feedback, feel free to reach
            out.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>www.ronakportfolio.example.com || ©️ All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
