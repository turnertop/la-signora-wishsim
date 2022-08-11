import React from 'react';
import '../App.css';
import cewStar from '../assets/cewStar.png';
import primogem from '../assets/primogem.webp';
import acquaint from '../assets/acquaint-fate.webp';
import placeholder from '../assets/zerotwo.png';

function Navbar() {
  return (
    <div className="Navbar" style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    }}>
      <div className="nb-left-side">
        <img src={cewStar} alt="character event wish star" style= {{
          width: "30px",
          marginRight: "15px",
        }}/>
        <span>Character Event Wish</span>
      </div>
      <div className="nb-middle">
      <button id="nb-middle-banner-buttons">
        <img src={placeholder} alt="placeholder zero two" style={{
          width: "100px", 
        }}/> 
      </button>
      </div>
      <div className="nb-right-side">
      <button id="nb-right-side-primogem">
      <img src={primogem} alt="primogem"/>
      <span id="icon"></span>
      </button>
      <button id="nb-right-side-aquaint">
        <img src={acquaint} alt="acquaint fate currency"/>
      </button>
      </div>
    </div>

// need to incorporate state counter for currencies
// need to find a middle banner button
// need to incorporate font for icons and text
// need to css to make it pretty




  )
}
export default Navbar;






