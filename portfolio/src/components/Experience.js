import React from "react";
import "./ExperienceStyle.css";
import codeiox from "../assets/codeiox.png";

function Experience() {
  return (
    <div className="Experience-Page">
      <div className="card">
        <div className="left-exp">
          <div className="logo-exp">
            <img src={codeiox} alt="Codeiox" />
            <div className="logo-txt">
              <p className="heading">Codeiox</p>
              <p className="comp-message">For Future Generation</p>
            </div>
          </div>
          <div className="programme">
            <h2>Training and Internship Programme</h2>
            <p className="domain">Under the Domain of Web Development</p>
          </div>
        </div>
        <div className="right-exp">
          <p>
            As a participant in the training and internship program at Codeiox,
            I have gained comprehensive experience in Full Stack Development,
            focusing on the MERN stack (MongoDB, Express.js, React, Node.js) and
            the TailwindCSS framework. This program has provided me with a
            robust foundation in both front-end and back-end development,
            equipping me with the skills to build scalable and responsive web
            applications.
          </p>
          <br />
          <p className="summary">From June 2024 to August 2024
              <br />
              Mentored By Vaibhav Singh
            </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
