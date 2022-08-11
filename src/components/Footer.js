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
    <span style={{
      color: "#fff",
    }}>0</span>
  <img src={stardust} id="masterless stardust" alt="masterless stardust" style={{
  width: "20px",
  height: "20px",
  }}/>
    <span style={{
    color: "#fff",
    }}>0</span> 
  </div>
  <div id="footer-left-side-buttons">
    <button style={{
      border: "solid transparent",
      fontSize: "100%",
      margin: "2px 5px",
      padding: "0.19rem 1.3rem",
      transition: "all .2s",
      boxShadow: "0 2px 2px #64646430",
      backgroundColor: "#e0ddd4",
      borderRadius: "50px",
      outline: "0",
      letterSpacing: "-.03rem",
      boxSizing: "border-box",
      appearance: "auto",
      writingMode: "horizontal-tb !important",
      textRendering: "auto",
      color: "buttontext",
      wordSpacing: "normal",
      lineHeight: "normal",
      textTransform: "none",
      textIndent: "0px",
      textShadow: "none",
      display: "inline-block",
      textAlign: "center",
      alignItems: "flex-start",
    }}>Shop</button>
    <button style={{
      border: "solid transparent",
      fontSize: "100%",
      margin: "2px 5px",
      padding: "0.19rem 1.3rem",
      transition: "all .2s",
      boxShadow: "0 2px 2px #64646430",
      backgroundColor: "#e0ddd4",
      borderRadius: "50px",
      outline: "0",
      letterSpacing: "-.03rem",
      boxSizing: "border-box",
      appearance: "auto",
      writingMode: "horizontal-tb !important",
      textRendering: "auto",
      color: "buttontext",
      wordSpacing: "normal",
      lineHeight: "normal",
      textTransform: "none",
      textIndent: "0px",
      textShadow: "none",
      display: "inline-block",
      textAlign: "center",
      alignItems: "flex-start",
    }}>Inventory</button>
    <button style={{
      border: "solid transparent",
      fontSize: "100%",
      margin: "2px 5px",
      padding: "0.19rem 1.3rem",
      transition: "all .2s",
      boxShadow: "0 2px 2px #64646430",
      backgroundColor: "#e0ddd4",
      borderRadius: "50px",
      outline: "0",
      letterSpacing: "-.03rem",
      boxSizing: "border-box",
      appearance: "auto",
      writingMode: "horizontal-tb !important",
      textRendering: "auto",
      color: "buttontext",
      wordSpacing: "normal",
      lineHeight: "normal",
      textTransform: "none",
      textIndent: "0px",
      textShadow: "none",
      display: "inline-block",
      textAlign: "center",
      alignItems: "flex-start",
    }}>History</button>
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



