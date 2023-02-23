// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./style.css";

// function Header() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light">
//             <div>
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } >Home</NavLink>   
//                     </li>
//                     <li className="nav-item">
//                         <NavLink to="/ProjectGallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } >Project Gallery</NavLink>
//                     </li>
//                     <li className="nav-item">
//                         <NavLink to="/Contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link' } >Contact</NavLink>
//                     </li>
//                     <li className="nav-item">
//                         <a href="../assets/Ricky_Bryans_CV.pdf" className="nav-link">Resume</a>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          My Portfolio
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleNavbar}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ProjectGallery"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleNavbar}
              >
                Project Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={toggleNavbar}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="../assets/Ricky_Bryans_CV.pdf" className="nav-link">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
