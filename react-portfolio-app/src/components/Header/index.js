import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } >Home</NavLink>   
                    </li>
                    <li className="nav-item">
                        <NavLink to="/ProjectGallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } >Project Gallery</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } >Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <a href="./assets" className="nav-link">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;