import React from "react";

function Footer() {
  return (
    <footer className="footer pt-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 my-3">
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
          <div className="col-lg-12 mb-2 my-sm-2">
            Copyright © Marina de la Fuente 2020
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
