import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import loadingscreenfigure from '../assets/LoadingScreen.gif';
import githublogo from '../assets/genshin-logo.webp';

function LoadingScreen() {
  return(
    <section style={{
    backgroundColor: "#C7DCF9",
    width: "100vw",
    height: "100vw",
    }}>
    <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
    flexDirection: "column",
    }}>
      <img src={loadingscreenfigure} alt="gura shark figure"/>
      <div style={{

        }}>
      <span style={{
      color: "white",
      fontWeight: "bolder",
      fontSize: "large",
      }}>
      Loading . . .
      </span>
      </div>
      </div>
    </section>
  );
}


export default function Loading() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return(
  <>
  {loading === false ? ( <div className="Loading">
  <div style={{
    display: "flex",
    justifyContent: "center",
  }}>
  </div>

  {/*  <div>
      This is a fan-made web application to simulate wishing in the video game, Genshin Impact. All assets used are owned by Mihoyo, or Hoyoverse as that's what they refer to themselves now. This web application was specifically made to be dedicated to La Signora, the Fair Lady. Hoyoverse decided to kill the character off and not release a playable character, with what I deemed lazy writing and lazy business. Thus, I quit Genshin Impact with 36000 primogems unused. I would've swiped my credit card for C6 and R5 weapon as well. Their decision led to one of many factors that influenced my decision to learn computer science and drop outta school. "wHy WoUlD yOu qUiT sChOoL bEcAuSe oF a ViDeO gAmE?" It is one of the small changes in a complex system that is insignificant on its own, but paired with many small undesirable changes lead to a significant butterfly effect. Thus, the complex system erodes from the accumulation of undesirable small seemingly insignificant small changes. It marks the end of an era, a coming-to-age story, where I quit video games that serve as an escape from reality. Instead of escaping from reality, I face it head-on with an undying resolve. 
    </div>
  <div>
    Made by 
  <a href="https://github.com/turnertop">
  turnertop 
  </a>
</div>
*/}
  </div>) : (<LoadingScreen/>)}</>
  );
}
