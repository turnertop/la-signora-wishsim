import React from 'react';
import './App.css';
import { TestExport, VideoBackground, GachaBanner, GachaBannerContainer, BackgroundMusic } from './components';

function App() {

  return (
    <div className="w-screen h-screen">
      <VideoBackground />
      <BackgroundMusic />
      <GachaBannerContainer />
    </div>
  )
}

export default App
