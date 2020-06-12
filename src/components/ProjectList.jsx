import React from 'react';
// import {Link} from  'react-router-dom';
import ProjectItem from './ProjectItem';

function ProjectList (props) {
    const {projects} = props;
    
    return (
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Check my front-end projects:
            </h3>
          </div>
          <ul className="row portfolio-list">
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </ul>
        </div>
      </section>
    );
}

export default ProjectList;