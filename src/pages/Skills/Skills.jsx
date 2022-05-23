import React from "react";
import "./Skills.scss";
import skillHolder from "../../components/skillHolder/skillHolder";
import html from "../../components/Images/html.svg";
import sass from "../../components/Images/sass.svg";
import js from "../../components/Images/js.svg";
import java from "../../components/Images/java.svg";
import flutter from "../../components/Images/flutter_logo.svg";
import react from "../../components/Images/react.svg";
import ps from "../../components/Images/ps.svg";
import prem from "../../components/Images/premiere.svg";

const Skills = () => {
  return (
    <div className="final">
      <h1 className="skill">Skills</h1>
      <div className="columns">
        <div className="col1">
          <div className="skillHolder">
            <img src={html} alt="" />
            <div className="cont">
              <h4>HTML/CSS</h4>
              <div className="bar">
                <div className="qty html">80%</div>
              </div>
            </div>
          </div>
          
          <div className="skillHolder">
            <img src={js} alt="" />
            <div className="cont">
              <h4>Javascript</h4>
              <div className="bar">
                <div className="qty js">80%</div>
              </div>
            </div>
          </div>

          <div className="skillHolder">
            <img src={sass} alt="" />
            <div className="cont">
              <h4>Sass</h4>
              <div className="bar">
                <div className="qty sass">80%</div>
              </div>
            </div>
          </div>

          <div className="skillHolder">
            <img src={java} alt="" />
            <div className="cont">
              <h4>Java</h4>
              <div className="bar">
                <div className="qty java">70%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col2">
          <div className="skillHolder">
            <img src={flutter} alt="" />
            <div className="cont">
              <h4>Flutter/Dart</h4>
              <div className="bar">
                <div className="qty flutter">90%</div>
              </div>
            </div>
          </div>

          <div className="skillHolder">
            <img src={react} alt="" />
            <div className="cont">
              <h4>React</h4>
              <div className="bar">
                <div className="qty react">80%</div>
              </div>
            </div>
          </div>

          <div className="skillHolder">
            <img src={ps} alt="" />
            <div className="cont">
              <h4>Photoshop</h4>
              <div className="bar">
                <div className="qty ps">90%</div>
              </div>
            </div>
          </div>

          <div className="skillHolder">
            <img src={prem} alt="" />
            <div className="cont">
              <h4>Premiere Pro</h4>
              <div className="bar">
                <div className="qty prem">90%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
