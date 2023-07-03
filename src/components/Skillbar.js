import React from "react";
import "./Skillbar.css";

function SkillsBar() {
  return (
    <div className="container">
      <h1 className="title-text">Skills</h1>

      <div className="skill-box">
        <span className="title">HTML/CSS/STYLESHEETS</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="tooltip">95%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">JAVASCRIPT/TYPESCRIPT</span>
        <div className="skill-bar">
          <span className="skill-per js">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">
          FRAMEWORKS-ANGULAR,REACT,REACT-NATIVE
        </span>
        <div className="skill-bar">
          <span className="skill-per frameworks">
            <span className="tooltip">60%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">NODEJS, EXPRESSJS, NPM</span>
        <div className="skill-bar">
          <span className="skill-per nodejs">
            <span className="tooltip">40%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">GIT,TESTING TOOLS</span>
        <div className="skill-bar">
          <span className="skill-per other">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">AWS SERVICES</span>
        <div className="skill-bar">
          <span className="skill-per aws">
            <span className="tooltip">75%</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillsBar;
