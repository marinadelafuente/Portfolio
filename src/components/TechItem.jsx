import React from "react";
import { Link } from "react-router-dom";


function TechItem(props) {
  const { id, icon, alt } = props.tech;
  const routeId = `./tech/${id}`;

  return (
    <React.Fragment>
      <li className="li mb-4" key={id}>
        <Link key={id} to={routeId}>
          <div className="portfolio-link">
            <img className="tech-icon" src={icon} alt={alt}/>
          </div>
        </Link>
      </li>
    </React.Fragment>
  );
}

export default TechItem;
