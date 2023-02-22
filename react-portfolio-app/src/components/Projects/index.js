import React from "react";
import "./style.css";

function Projects(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={ process.env.PUBLIC_URL + props.image } className="card-img-top card-img-top-with-margin" alt={props.title}></img>
                </div>
                <div className="jumbotron col-7 text-center">
                    <h5 className="JumboTitle">{props.title}</h5>
                    <br></br>
                    <p className="card-text">{props.description}</p>
                    <a href={props.deployedLink} class="btn btn-secondary">View Project</a>
                    <a href={props.gitHubLink} class="btn btn-secondary">View Repo</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;