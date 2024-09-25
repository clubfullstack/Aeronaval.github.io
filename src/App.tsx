import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Services from './components/Services';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import TechInfo from './components/TechInfo';

function App() {
  return (
    <div>
      <Header />
      <main>
          <Home idName="home"/>
          <About idName="about" />
          <Services idName="services" />
          <Projects idName="projects" />
          {/* <TechInfo idName="techInfo" /> */}
          <Contact idName="contact" />
          <Footer idName="footer" />
      </main>
    </div>
  );
}

export default App;
