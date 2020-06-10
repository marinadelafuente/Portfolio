import React from 'react';
import {Link} from 'react-router-dom';

function ProjectDetail (props) {
   const { title, description, img, alt, tags, url, urlGithub } = props.project;
return (
  <div className="container">
    <Link to={"/"}>
      <button className="btn btn-primary"> Return to Home</button>
    </Link>
    <div className="project-container">
      <img className="img" src={img} alt={alt}></img>
      <div className="">
        <h3 className="">{title.toUpperCase()}</h3>
        <p className="">{description}</p>
        <p className="">{tags}</p>
        <a href={url}>Website</a>
        <a href={urlGithub}>GitHub</a>
      </div>
    </div>
  </div>
);
}

export default ProjectDetail;