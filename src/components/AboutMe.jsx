import React from "react";

function AboutMe() {
  return (
    <section className="page-section page-section__about bg-white" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About Me</h2>
          <h3 className="section-subheading text-muted">
            Scroll down and get to know me better.
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 mx-auto">
            <div className="avatar">
              <div className="avatar-container"></div>
              <h4>Marina de la Fuente</h4>
              <p className="text-muted">Web Developer</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-social mx-2"
                href="https://twitter.com/marinadlaf"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-social mx-2"
                href="https://github.com/marinadelafuente"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-social mx-2"
                href="https://www.linkedin.com/in/marinadelafuentegomeztavira/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-social mx-2"
                href="mailto:mdelafuente18@gmail.com"
              >
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              Former marketing and avertising professional, now web developer
              junior with a new-found passion for front-end developing and the
              ability of getting my ideas come into life through a screen.
              Having lived and work in different countries such as Spain,
              Canada, New Zealand and now Australia has taught me that
              everything is possible with a proactive, can-do attitude and hard
              work. Outside the coding world, I spend my time travelling, photographing sceneries and trying my best at healthy cooking.
            </p>
          </div>
        </div>
      </div>
      <a
        href="./static/media/Marina-de-la-Fuente-CV.pdf"
        download="CV_Marina-de-la-Fuente"
        className="btn btn-primary btn-xl text-uppercase mt-3"
        id="downloadCV"
      >
        Download CV
      </a>
    </section>
  );
}

export default AboutMe;
