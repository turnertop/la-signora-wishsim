import React from 'react';
import '../App.css';
import cewStar from '../assets/cewStar.png';
import primogem from '../assets/primogem.webp';
import acquaint from '../assets/acquaint-fate.webp';
import placeholder from '../assets/placeholder.png';

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
        <span style={{
        color: "#fff",
        textTransform: "capitalize",
        fontSize: "110%",
        fontWeight: "400",
        }}>Character Event Wish</span>
      <button style={{
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      border: "0.15rem solid #fff",
      borderRadius: "50px",
      borderTopColor: "rgb(255, 255, 255)",
      borderTopStyle: "solid",
      borderTopWidth: "0.15rem",
      borderRightColor: "rgb(255, 255, 255)",
      borderRightStyle: "solid",
      borderRightWidth: "0.15rem",
      borderBottomColor: "rgb(255, 255, 255)",
      borderBottomWidth: "0.15rem",
      borderLeftColor: "rgb(255, 255, 255)",
      borderLeftStyle: "solid",
      borderLeftWidth: "0.15rem",
      borderImageSource: "initial",
      borderImageSlice: "initial",
      borderImageWidth: "initial",
      borderImageWidth: "initial",
      borderImageOutset: "initial",
      borderImageRepeat: "initial",
      color: "#fff",
      marginLeft: "1rem",
      width: "1.7rem",
      height: "1.7rem",
      lineHeight: "0",
      transition: "all .2s",
      backgroundColor: "transparent",
      outline: "0",
      

      }}>?</button>
      </div>
      <div className="nb-middle">
      <button id="nb-middle-banner-buttons" style={{
      borderRadius: "0.4rem",
      display: "block",
      width: "90px",
      minWidth: "50px",
      aspectRatio: "2.4/1",
      margin: "0.6em",
      border: "0",
      outline: "0",
      }}>
        <img src={placeholder} alt="placeholder zero two" style={{
          width: "50px", 
        }}/> 
      </button>
      </div>
      <div className="nb-right-side">
      <button id="nb-right-side-primogem" style={{
      display: "inline-block",
      position: "relative",
      maxWidth: "112px",
      height: "25px",
      overflow: "hidden",
      backgroundColor: "#0000004d",
      borderRadius: "50px",
      color: "#fff",
      verticalAlign: "middle",
      textAlign: "center",
      margin: "0 8px",
      padding: "0 15px 0 30px",
      }}>
      <img src={primogem} alt="primogem" style={{
      width: "auto",
      height: "80%",
      }}/>
      <span id="icon">696969</span>
      </button>
      <button id="nb-right-side-aquaint" style={{
      display: "inline-block",
      position: "relative",
      maxWidth: "112px",
      height: "25px",
      overflow: "hidden",
      backgroundColor: "#0000004d",
      borderRadius: "50px",
      color: "#fff",
      verticalAlign: "middle",
      textAlign: "center",
      margin: "0 8px",
      padding: "0 15px 0 30px",
      }}>
        <img src={acquaint} alt="acquaint fate currency" style={{
      width: "auto",
      height: "80%",
        }}/>
      <span>0</span>
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






