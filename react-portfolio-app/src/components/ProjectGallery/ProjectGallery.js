import React from "react";
import "./style.css";
import projects from "./projects.json";
import Projects from "../Projects";


function ProjectGallery () {
    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col-10">
      <h3>Examples of Work</h3>
      <p>Here are a few examples of my work from projects completed in the Front End Web Developer Bootcamp.
      </p>
      </div>
 
      {projects.map(project => (
          <Projects
            key={project.id}
            title={project.title}
            description={project.description}
            deployedLink={project.deployedLink}
            gitHubLink={project.repoLink}
            image={project.screenshot}

          />
        
      ))}  
      </div>   
       </div> 
     
  );
}

export default ProjectGallery;