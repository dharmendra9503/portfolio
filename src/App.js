import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import CP_Profile from './components/CP-profile/CP_Profile';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import ScrollUp from './components/scrollUp/ScrollUp';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      <Header />

      <div className="main">
        <Home />
        <About />
        <Education />
        <CP_Profile />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
