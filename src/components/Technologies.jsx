import React from "react";
// import htmlIcon from "../assets/img/icons/html5.svg";
import pattern from "../assets/img/pattern1.png";
// import cssIcon from '../assets/img/icons/css3.svg';

function Technologies() {
  return (
    <section className="page-section" id="technologies">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Technical Skills</h2>
          <h3 className="section-subheading text-muted">
            Some of the technologies I have worked with:
          </h3>
        </div>
        <div className="row text-center">
          <img src={pattern} alt="tech-icons" className="mx-auto pattern" />    
        </div>
      </div>
    </section>
  );
}

export default Technologies;
