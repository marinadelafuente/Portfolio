import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <div className="col-lg-4 my-3 my-lg-0">
          <a
            className="btn btn-nav btn-social mx-2"
            href="https://twitter.com/marinadlaf"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn btn-nav btn-social mx-2"
            href="https://github.com/marinadelafuente"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a
            className="btn btn-nav btn-social mx-2"
            href="https://www.linkedin.com/in/marinadelafuentegomeztavira/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="btn btn-nav btn-social mx-2"
            href="mailto:mdelafuente18@gmail.com"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </a>
        </div>
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <img src="assets/img/navbar-logo.svg" alt="" />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars ml-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">
                Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#technologies">
                Technical Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
