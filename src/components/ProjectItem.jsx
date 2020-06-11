import React from 'react';
import {Link} from 'react-router-dom';

function ProjectItem (props) {
    const {id, demo, title, tags} = props.project;
    const routeId = `./project/${id}`;
return (
  <React.Fragment>
    <li className="li col-lg-4 col-sm-6 mb-4 portfolio-item" key={id}>
      <Link key={id} to={routeId}>
        <div className="portfolio-link">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="img-fluid img" src={demo} alt="" />
        </div>
      </Link>
      <div className="portfolio-caption d-flex flex-column justify-content-center">
        <Link key={id} to={routeId}>
          <p className="portfolio-caption-heading">
            <span>&#123;</span>
            {title}
            <span>&#125;</span>
          </p>
        </Link>
        <div className="portfolio-caption-subheading text-muted tags">
          {tags.map((tag, index) => (
            <span className="" key={index}>
              {index === tag.length - 1 ? tag : `${tag} |`}
            </span>
          ))}
        </div>
      </div>
    </li>
  </React.Fragment>
);
}

export default ProjectItem;