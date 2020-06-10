import React from "react";

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-left">
            Copyright © Marina de la Fuente 2020
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
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
            <a
              className="btn btn-dark btn-social mx-2"
              href="mailto:mdelafuente18@gmail.com"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
