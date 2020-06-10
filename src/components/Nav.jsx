import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
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
          Menu<i className="fas fa-bars ml-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">
            <li className="nav-item">
              <Link to={"/AboutMe"} className="nav-link js-scroll-trigger">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link to={"/ProjectList"} className="nav-link js-scroll-trigger">
                Portfolio
              </Link> */}
              {/* <a href={`#${child.get("contact")}`}>{child.get("contact")}</a> */}
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link js-scroll-trigger">
                Technical Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/#Contact"} className="nav-link js-scroll-trigger">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
