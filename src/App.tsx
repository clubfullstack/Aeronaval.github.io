import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Services from './components/Services';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <main>
          <Home idName="home"/>
          <Services idName="services" />
          <Projects idName="projects" />
          <Footer idName="footer" />
      </main>
    </div>
  );
}

export default App;
