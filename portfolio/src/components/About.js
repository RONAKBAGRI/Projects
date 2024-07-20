import React from "react";
import photo from "../assets/photo.jpg";
import Education from "../assets/Education-Download-PNG.png";
import personal from '../assets/personal-information-icon.png'
import hobby from '../assets/hobby.jpg'
import "./AboutStyle.css";

function About() {
  return (
    <div className="about-page">
      <div className="left-page">
        <img src={photo} alt="ronak" />
      </div>
      <div className="right-page">
        <div className="Personal">
          <h3 className="personal-box"><img src={personal} alt="personal-logo" />Personal Information</h3>
          <p><span className="bold">Name</span> : Ronak Bagri</p>
          <p><span className="bold">DOB </span>: 13-08-2005</p>
          <p><span className="bold">Hometown</span> : Bulandshahr</p>
          <p><span className="bold">Nationality</span> : Indian</p>
        </div>
        <div className="Education">
          <h3 className="educ-box">
            <img src={Education} alt="Education" />
            Education
          </h3>
          <div className="edu-content">
          <p>• Currently Pursuing <span className="bold">B.Tech (Mathematics and Computing Branch)</span></p>
          <p>  From <span className="bold">Indian Institute of Technology ,Jammu (IIT Jammu).</span></p>
          <span className="bold">Currently CGPA-8.32</span>
          <br />
          <br />
          <p>• I completed my Class 10th and 12th education at <span className="bold">Kendriya Vidyalaya, Bulandshahr</span> </p>
          <p>under the CBSE board. In 12th grade, I specialized in the <span className="bold">Science stream with Computer Science.</span></p>
          <span className="bold">Scored 92.4% in 10th Board</span>
          <br />
          <span className="bold">Scored 94.2% in 12th Board with 100/100 in Chemistry</span>
          </div>

          <div className="hobby">
            <h3 className="hobby-box"><img src={hobby} alt="hobby" />Hobbies</h3>
            <div className="hobby-content">
              <p>In my free time, I enjoy playing cricket, watching movies, </p>
              <p>and trying new things. These activities help me stay active,</p>
              <p>relax, and continuously explore new interests.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
