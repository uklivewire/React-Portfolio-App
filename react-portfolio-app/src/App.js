import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import ProjectGallery from './components/ProjectGallery/ProjectGallery';
import Project from './components/Projects';
import Contact from './components/Contact/Contact';
import projects from "./data/projects.json"
import "./App.css";


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
          <Routes>

          <Route exact path="/" component={Home} />
          <Route exact path='/projects' component={ProjectGallery} />
          {projects.map((project) => (
          <Route key={project.id} path={`/projects/${project.id}`} render={(props) => <Project {...props} project={project}/>}/>))}
          <Route exact path="/contact" component={Contact} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
