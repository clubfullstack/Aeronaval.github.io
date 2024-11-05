import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Services from './components/Services';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import ConsultingDetails from './components/ConsultingDetails';

function App() {
  return (
    <div>
      <Header />
      <main>
          <Home idName="home"/>
          <About idName="about" />
          <Projects idName="projects" />
          <Services idName="services" />
          <ConsultingDetails idName="consulting" />
          <Contact idName="contact" />
          <Footer idName="footer" />
      </main>
    </div>
  );
}

export default App;
