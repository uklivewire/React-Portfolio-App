import React from "react";
import { Link } from "react-router-dom";

function Project(props) {
    const { title, livelink, repolink, image} = props.projects;

    return (
        <div className="card">
           <img src={image} className="card-img-top" alt={title} />
           <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    <Link to={`/project/${title}`} className="btn btn-primary">
                        View Details
                    </Link>
                </p>
           </div> 
           <div className="card-footer">
            <small className="text-muted float-end">
                <a href={repolink} target="_blank" rel="noopener noreferrer">
                    Github Repository
                </a>
            </small>
           </div>
        </div>
    );
}

export default Project;