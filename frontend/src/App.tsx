import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import AITools from './components/AITools';
import Daw from './pages/Daw';

const App = () => {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#111' }}>
        <Link to="/" style={{ marginRight: '1rem', color: '#ff6a00' }}>Home</Link>
        <Link to="/daw" style={{ color: '#ff6a00' }}>DAW</Link>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <AITools />
          </>
        } />
        <Route path="/daw" element={<Daw />} />
      </Routes>
    </Router>
  );
};

export default App;
