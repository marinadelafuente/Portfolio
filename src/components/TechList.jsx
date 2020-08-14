import React from "react";
import TechItem from './TechItem';

function Technologies(props) {
  const { technologies } = props;
  return (
    <section className="page-section" id="technologies">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Technical Skills</h2>
          <h3 className="section-subheading text-muted">
            Some of the technologies I have worked with:
          </h3>
        </div>
          <ul className="row tech-list">
            {technologies.map((tech) => (
              <TechItem key={tech.id} tech={tech} alt={tech.alt}/>
            ))}
          </ul>
      </div>
    </section>
  );
}

export default Technologies;
