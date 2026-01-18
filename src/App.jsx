import React, { Suspense } from 'react';
import { LazyMotion, domAnimation } from "framer-motion";
import './App.css';

// Eager load for above-the-fold content
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load for below-the-fold content
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Services = React.lazy(() => import('./components/Services'));
const Whatiwok = React.lazy(() => import('./components/Whatiwok'));
const ProjectHighlights = React.lazy(() => import('./components/ProjectHighlights'));
const CaseStudy = React.lazy(() => import('./components/CaseStudy'));
const Contact = React.lazy(() => import('./components/Contact'));
const CreativeWork = React.lazy(() => import('./components/CreativeWork'));
const Experience = React.lazy(() => import('./components/Experience'));
const Process = React.lazy(() => import('./components/Process'));
const SEOHighlights = React.lazy(() => import('./components/SEOHighlights'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const Team = React.lazy(() => import('./components/Team'));

// Loading fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Navbar />
      <main>
        <Hero />

        <Suspense fallback={<LoadingFallback />}>
          <Services />
          <Skills />
          <Whatiwok />

          <ProjectHighlights />
          <CaseStudy />

          <SEOHighlights />
          <Experience />
          <About />

          <CreativeWork />
          <Process />
          <Testimonials />

          <Team />

          <Contact />
        </Suspense>
      </main>
    </LazyMotion>
  );
}

export default App;
