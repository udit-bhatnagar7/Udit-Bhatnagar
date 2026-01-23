import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import './App.css';

import Home from './pages/Home';
import FullGallery from './pages/FullGallery';
import Resume from './pages/Resume';

// ScrollToTop component to reset scroll on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<FullGallery />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </AnimatePresence>
      </LazyMotion>
    </Router>
  );
}

export default App;
