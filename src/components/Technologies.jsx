import React from "react";
// import htmlIcon from "../assets/img/icons/html5.svg";
import pattern from "../assets/img/pattern2.png";
// import cssIcon from '../assets/img/icons/css3.svg';

function Technologies() {
  return (
    <section className="page-section" id="technologies">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Technical Skills</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div className="row text-center">
          {/* <div className="col-md-4 mx-auto"> */}
            <img src={pattern} alt="tech-icons" className="mx-auto" />
            {/* <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span> */}
            {/* <h4 className="my-3">E-Commerce</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p> */}
          {/* </div> */}
         
        </div>
      </div>
    </section>
  );
}

export default Technologies;
