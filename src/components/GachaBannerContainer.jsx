import React from 'react';
import GachaBanner from './GachaBanner.jsx';
import laSignora from '../assets/SignoraBanner.png';
import { useState, useEffect } from 'react';

const BannerData = [
  {
    id: 1,
    imageSrc: laSignora,
    title: 'La Signora Wish Banner',

  },
  {
    id: 2,
    imageSrc: '',
    title: 'Placeholder',
  }
  
];

const GachaBannerContainer = () => {

  const [currentBanner, setCurrentBanner] = useState(0);

  const handleNextBannerClick = () => {
    setCurrentBanner(currentBanner => (currentBanner + 1) % bannerData.length);
  };

  const { imageSrc, title } = bannerData[currentBanner];

  return (

    <div>
      <GachaBanner imageSrc={imageSrc} title={title} description={description} />
      <button onClick={handleNextBannerClick}>Next Banner</button>
    </div>
  ); 

};


export default GachaBannerContainer;






