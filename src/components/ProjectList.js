import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectItems = projects.map(project => (
    <ProjectItem 
      key={project.id} 
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ));

  return (
    <div id="project">
      <h3>My Projects</h3>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
