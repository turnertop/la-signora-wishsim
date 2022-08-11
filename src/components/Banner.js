import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css';
import laSignoraCharacterBanner from '../assets/SignoraBanner.png';

export default function Banner() {
  return(
    <div id="banner" style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    }}>
      <img src={laSignoraCharacterBanner} alt="la signora character banner" style= {{
        width: "65%",
        marginTop: "60px",
      }}/>
    </div>
  );
}
