import React, { useState } from 'react';

const WishButton = ({ onWish }) => {
  const [isWishing, setIsWishing] = useState(false);

  const handleClick = () => {
    setIsWishing(true);

    // Simulate the outcome of the wish using probabilities
    const randomNum = Math.random() * 100;
    let result = null;
    if (randomNum < 0.6) {
      result = '5 star';
    } else if (randomNum < 5.7) {
      result = '4 star';
    } else {
      result = '3 star';
    }

    // Wait for a brief moment to simulate loading
    setTimeout(() => {
      setIsWishing(false);
      onWish(result);
    }, 1000);
  };

  return (
    <button onClick={handleClick} disabled={isWishing}>
      {isWishing ? 'Wishing...' : 'Make a Wish'}
    </button>
  );
};

export default WishButton;



// if result = 5 star or 4 star or 3 star , leads to video playing of the corresponding thing
