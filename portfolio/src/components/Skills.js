import React from "react";
import "./SkillsStyle.css";
import mern from "../assets/mern.png";
import cplus from "../assets/cplus.svg";
import pythonlogo from "../assets/python.svg";
import jslogo from "../assets/JavaScript-logo.png";
import htmllogo from "../assets/html.png";
import csslogo from "../assets/css.png";
import tailwindlogo from "../assets/tailwind.png";
import reactlogo from "../assets/react.png";
import explogo from "../assets/express.png";
import nodelogo from "../assets/nodejs.png";
import mongologo from "../assets/mongodb.png";
import gitlogo from "../assets/git.png";
import conlogo from "../assets/conversation.png";
import solvelogo from "../assets/solution.png";
import timelogo from "../assets/time-management.png";
import onlogo from "../assets/onshape.png";
import adaplogo from "../assets/adaptation.png";

function Skills() {
  return (
    <div className="Skills-Page">
      <h2 className="skills-heading">Skills</h2>
      <div className="left-skill">
        <div className="lang">
          <div className="languages">
            <h4>Programming Languages :</h4>
          </div>
          <div className="languages">
            <img className="image" src={cplus} alt="c++" />
            <p> : C++</p>
          </div>
          <div className="languages">
            <img src={pythonlogo} alt="python" className="image" />
            <p> : Python</p>
          </div>
          <div className="jslang">
            <img src={jslogo} alt="js" className="image2 " />
            <p> : JavaScript</p>
          </div>
        </div>
        <div className="web">
          <div className="languages">
            <h4>Web Development Technologies:</h4>
          </div>
          <div className="languages">
            <img src={htmllogo} alt="html" className="image2" />
            <p> : HTML</p>
          </div>
          <div className="languages">
            <img src={csslogo} alt="css" className="image2" />
            <p> : CSS</p>
          </div>
        </div>
        <div className="frame">
          <div className="languages">
            <h4>Frameworks and Libraries:</h4>
          </div>
          <div className="languages">
            <img src={tailwindlogo} alt="TailwindCSS" className="image2" />
            <p> : TailwindCSS</p>
          </div>
          <div className="languages">
            <img src={reactlogo} alt="react" className="image2" />
            <p> : React</p>
          </div>
          <div className="languages">
            <img src={explogo} alt="express" className="image2" />
            <p> : ExpressJs</p>
          </div>
        </div>
        <div className="back">
          <div className="languages">
            <h4>Back-End Technologies:</h4>
          </div>
          <div className="languages">
            <img src={nodelogo} alt="Node.js" className="image2" />
            <p> : Node.js</p>
          </div>
          <div className="languages">
            <img src={mongologo} alt="mongoDB" className="image2" />
            <p> : MongoDB</p>
          </div>
        </div>
      </div>
      <div className="mid-skill">
        <div className="version">
          <div className="languages">
            <h4>Version Control and Collaboration Tools:</h4>
          </div>
          <div className="languages">
            <img src={gitlogo} alt="git" className="image" />
            <p> : Git and GitHub</p>
          </div>
          <div className="languages">
            <img src={onlogo} alt="OnShape" className="image" />
            <p> : OnShape</p>
          </div>
        </div>
        <div className="soft-skills">
          <div className="languages">
            <h4>Soft-Skills:</h4>
          </div>
          <div className="languages">
            <img src={conlogo} alt="conversation" className="image" />
            <p> : Communication</p>
          </div>
          <div className="languages">
            <img src={solvelogo} alt="Problem Solving" className="image" />
            <p> : Problem Solving</p>
          </div>
          <div className="languages">
            <img src={timelogo} alt="Time Management" className="image" />
            <p> : Time Management</p>
          </div>
          <div className="languages">
            <img src={adaplogo} alt="Adaptability" className="image" />
            <p> : Adaptability</p>
          </div>
        </div>
      </div>
      <div className="right-skill">
        <img src={mern} alt="developer" />
      </div>
    </div>
  );
}

export default Skills;
