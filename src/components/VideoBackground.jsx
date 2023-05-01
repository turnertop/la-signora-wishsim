import React from 'react';
import bg from '../assets/bg.webm';

export default function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={bg} type="video/webm" />
      </video>

    </div>
  );
};


