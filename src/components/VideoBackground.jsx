import React from 'react';
import bg from '../assets/bg.webm';

export default function VideoBackground() {
  return (
    <div>
      <video className="absolute inset-0 z-0 w-full h-full object-cover" autoPlay muted loop>
        <source src={bg} type="video/webm" />
      </video>

    </div>
  );
};


