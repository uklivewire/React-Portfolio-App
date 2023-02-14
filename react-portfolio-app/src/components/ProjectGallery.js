import React from "react";
import projects from "../data/projects.json";
import Project from "./Project";

function ProjectGallery() {
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                { projects.map((project) =>(
                    <div key={project}>
                        <Project project={project}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectGallery;