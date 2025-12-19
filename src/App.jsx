import React from 'react';
import './App.css';

// section imports
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Whatiwok from '../components/Whatiwok';
import CaseStudy from '../components/CaseStudy';
import Mainprojects from '../components/Mainprojects';
import Contact from '../components/Contact';
import CreativeWork from '../components/CreativeWork';
import Experience from '../components/Experience';
import Process from '../components/Process';
import SEOHighlights from '../components/SEOHighlights';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services/>
        <Skills/>
        <Whatiwok/>
        
        <CaseStudy/>
        <Mainprojects/>
        
        <SEOHighlights/>
        <Experience/>
        <About /> 

        <CreativeWork/>
        <Process/>
        <Testimonials/>

        <Team/>

        <Contact/>
      </main>
    </>
  );
}

export default App;
