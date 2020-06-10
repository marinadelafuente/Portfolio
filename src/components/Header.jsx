import React from "react";
import Typical from "react-typical";
import Typing from "react-typing-animation";

function Header() {
  return (
    <header className="masthead">
      <div className="container">
        <Typical
          steps={["Hello!", 500, "Welcome to my portfolio", 500]}
          loop={1}
          wrapper="p"
        />
        <Typing startDelay={2700}>
          <div>
            <p className="masthead-heading"> I am Marina de la Fuente.</p>
            <Typing.Delay ms={1000} />
            <p className="masthead-subheading"> Front-End Developer.</p>
          </div>
        </Typing>
      </div>
      {/* <i className="fas fa-angle-double-down"></i> */}
      <div className="arrow">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
