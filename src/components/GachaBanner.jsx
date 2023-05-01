import React from 'react';


const GachaBanner = ({ imageSrc, title, onClick }) => {

  return (
    <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-lg">
      <img src={imageSrc} alt={title} className="w-full" />
      {console.log(imageSrc)}
      {console.log(title)}
    </div>

  );
};

export default GachaBanner;


