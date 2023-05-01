import React from 'react';
import './App.css';
import { TestExport, VideoBackground, GachaBanner, GachaBannerContainer, BackgroundMusic, WishButton } from './components';

function App() {

  return (
    <div className="w-screen h-screen">
      <VideoBackground />
      <BackgroundMusic />
      <GachaBannerContainer />
      <WishButton />
    </div>
  )
}

export default App
