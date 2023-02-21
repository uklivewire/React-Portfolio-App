import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectGallery from './components/ProjectGallery/ProjectGallery';
// import Project from './components/Projects';
import Contact from './components/Contact';
// import projects from "./components/ProjectGallery";
// import "./App.css";
// import Resume from "./components/Resume";


function App() {
  return (
    <Router>
      <div>
        <Header />
          <Routes>

          <Route path="/" element={<Home />} />
          <Route path='/projects' element={<ProjectGallery />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route excat path='/contact' element={<Contact />} */}
          {/* <Route  path='/resume'element={<Resume />} */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
