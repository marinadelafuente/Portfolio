import React from "react";


function TechItem(props) {
  const { id, icon, alt } = props.tech;

  return (
    <React.Fragment>
      <li className="li mb-4" key={id}>
          <div className="portfolio-link">
            <img className="tech-icon" src={icon} alt={alt}/>
          </div>
      </li>
    </React.Fragment>
  );
}

export default TechItem;
