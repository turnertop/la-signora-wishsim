import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import starglitter from '../assets/masterless-starglitter.webp';
import stardust from '../assets/masterless-stardust.webp';
import wishButton from '../assets/button.webp';


export default function Footer() {
  return (
  <div id="footer" style={{
    display: "flex",
    justifyContent: "space-between",
  }}>
  <div id="footer-left-side" style={{

  }}>
  <div id="footer-left-side-currency">
  <img src={starglitter} id="masterless starglitter" alt="masterless starglitter" style={{
  width: "20px",
  height: "20px",
  }}/>
    0
  <img src={stardust} id="masterless stardust" alt="masterless stardust" style={{
  width: "20px",
  height: "20px",
  }}/>
    0 
  </div>
  <div id="footer-left-side-buttons">
    <button>Shop</button>
    <button>Inventory</button>
    <button>History</button>
  </div>
  </div>


  <div id="footer-right-side" style={{
    }}>
    <button><img src={wishButton} alt="wish button"/></button>
    <button><img src={wishButton} alt="wish button"/></button>
  </div>

  </div>
  );
}

// fix button, perhaps use input or an img onClick



