import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import AITools from './components/AITools';

const App = () => {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      <Hero />
      <Features />
      <AITools />
    </div>
  );
};

export default App;
