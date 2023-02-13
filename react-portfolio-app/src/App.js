import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Discover from './pages/Discover';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
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
            <Route path="/discover" element={<Discover/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
