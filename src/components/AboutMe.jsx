import React from "react";

function AboutMe() {
  return (
    <section className="page-section bg-white" id="about">
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
              {/* <div></div> */}
              <div className="avatar-container">
                {/* <img className="mx-auto rounded-circle" src={avatar} alt="" /> */}
              </div>
              <h4>Marina de la Fuente</h4>
              <p className="text-muted">Web Developer</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://twitter.com/marinadlaf"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://github.com/marinadelafuente"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.linkedin.com/in/marinadelafuentegomeztavira/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              Front-end developer junior new to the industry, with 5+ years
              international experience in marketing and tourism in Australia,
              New Zealand, Canada and Spain. Hard working, proactive,
              detail-oriented professional with strong interpersonal &
              problem-solving skills and a can-do attitude, ready to show of
              what I am capable of, and keep learning in this exciting industry.
              I love traveling, cooking experimenting and photographing things.
            </p>
          </div>
        </div>
      </div>
      <a
        href="./static/media/Marina-de-la-Fuente-CV.pdf"
        download="CV_Marina-de-la-Fuente"
        className="btn btn-primary btn-xl text-uppercase"
        id="downloadCV"
      >
        Download CV
      </a>
    </section>
  );
}

export default AboutMe;
