import React from 'react';
import '../app/globals.css';

import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen max-w-full bg-gray-900">
      <Hero />
    </div>
  );
};

export default Home;

