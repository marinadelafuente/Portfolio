import React from "react";
import pattern from "../img/pattern1.png";
import pattern2 from "../img/pattern3.png";

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
          <img
            src={window.innerWidth >= 540 ? pattern : pattern2}
            alt="tech-icons"
            className="mx-auto pattern"
          />
        </div>
      </div>
    </section>
  );
}

export default Technologies;
