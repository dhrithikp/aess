import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import SolarSystem from './components/SolarSystem';

function App() {
  useEffect(() => {
    const createStars = () => {
      const container = document.body;
      for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = Math.random() * 2 + "px";
        star.style.height = star.style.width;
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        // Add random animation delay for twinkling effect
        star.style.animationDelay = Math.random() * 5 + "s";
        container.appendChild(star);
      }
    };
    
    createStars();
    
    return () => {
      const stars = document.querySelectorAll('.star');
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <>
      <SolarSystem />
      <div className="content-container">
        <Navbar />
        <main className="pt-20 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;