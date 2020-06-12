import React from "react";
import { Link } from "react-router-dom";

function ProjectDetail(props) {
  const {
    id,
    title,
    description,
    img,
    alt,
    url,
    urlGithub,
  } = props.project;

  const prevProject = () => {
    if (id > 1) {
      return `/project/${id - 1}`;
    }
  };
  const nextProject = () => {
    if (id < 9) {
      return `/project/${id + 1}`;
    }
  };

  return (
    <React.Fragment>
      <div className="container project-container">
        <div className="links">
          <Link to={prevProject}>
            <i
              className={`fas fa-chevron-left ${
                id === 1 ? "disabled" : "link"
              }`}
            ></i>
            <span className={`${id === 1 ? "pr-3 disabled" : "pr-3"}`}>
              {" "}
              Previous
            </span>
          </Link>
          <span>|</span>
          <Link to={"/"} className="p-3">
            Home
          </Link>
          <span>|</span>
          <Link to={nextProject}>
            <span className={`${id === 9 ? "pl-3 disabled" : "pl-3"}`}>
              Next{" "}
            </span>
            <i
              className={`fas fa-chevron-right ${id === 9 ? "disabled" : ""}`}
            ></i>
          </Link>
        </div>
        <div className="item-container">
          <h3>
            <span>&#123;</span>
            {title.toUpperCase()}
            <span>&#125;</span>
          </h3>
          <img className="img" src={img} alt={alt}></img>
          <p className="">{description}</p>
          <div className="web-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              className="btn btn-primary mr-5"
            >
              Website
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={urlGithub}
              className="btn btn-primary mr-0"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectDetail;
