import React from 'react';
import { useEffect } from 'react';
import wishMusic from '../assets/background-music.mp3';


const BackgroundMusic = () => {
  
  const audioRef = React.createRef();
  const handleKeydown = (event) => {
    if (event.repeat) {
      return;

  }
    audioRef.current.play();  
  }

  useEffect(() => {
    document.addEventListener("mousedown", (event) => handleKeydown(event));
    return () => {



    }

  })

  return (
    <audio src={wishMusic} ref={audioRef} />
  );

};


export default BackgroundMusic;


