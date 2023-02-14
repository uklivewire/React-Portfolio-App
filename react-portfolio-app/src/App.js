import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './pages/Projects'
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Wrapper from './components/Wrapper/Wrapper';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
