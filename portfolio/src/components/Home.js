import React, { useEffect } from "react";
import "./HomeStyle.css";
import photo from "../assets/code.png";
import Typed from "typed.js";

function Home() {
  useEffect(() => {
    const typed = new Typed("#second", {
      strings: ["Ronak Bagri", "Web Developer", "MERN Stack"],
      typeSpeed: 110,
      backSpeed: 50,
      loop: true,
      showCursor: false, // Hides the cursor
    });

    // Cleanup function to destroy the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
    link.download = 'Ronak_Bagri_Resume.pdf';
    link.click();
  };
  //to navigate to pdf
  // const handleResumeNavigate= () => {
  //   // Directly navigate to the resume file's URL
  //   window.location.href = `${process.env.PUBLIC_URL}/resume.pdf`;
  // };
  

  return (
    <div>
      <div className="sections">
        <div className="left">
          <p className="first">Hi I'm</p>
          <span id="second"></span>
          <p className="third">
            A passionate and dedicated developer specializing in{" "}
            <span className="focus">
              Web Development with the MERN stack (MongoDB, Express.js, React, Node.js)
            </span>
            . With a strong foundation in{" "}
            <span className="focus">Data Structures and Algorithms (DSA) in C++</span>.
          </p>
          <div className="buttons">
            <button className="resume" onClick={handleResumeDownload}>Get Resume</button>
          </div>
          <p className="message">*For more details explore Navigations...</p>
        </div>
        <div className="right">
          <img src={photo} alt="developer" />
        </div>
      </div>
    </div>
  );
}

export default Home;
