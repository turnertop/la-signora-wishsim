import React from 'react';
import './App.css';
import { TestExport, VideoBackground, GachaBanner, GachaBannerContainer } from './components';

function App() {

  return (
    <div className="w-screen h-screen">
      <VideoBackground />
      <GachaBannerContainer />
    </div>
  )
}

export default App
