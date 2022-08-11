import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import wishBackground from './assets/wishBackground.webp';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Loading from './components/Loading';
import fourstarsinglewish from './assets/wishes/4star-single.mp4';

/*
import React, { useEffect } from 'react';
import wishBackground from './assets/wishBackground.webp';
import './App.css';
import wishMusic from './assets/wishMusic.mp3';
import laSignoraCharacterBanner from './assets/SignoraBanner.png';
import masterlessStardust from "./assets/masterless-stardust.webp";
import masterlessStarglitter from "./assets/masterless-starglitter.webp";
import AmeliaWatson from "./assets/AmeliaWatson.png";
import Senzawa from "./assets/button.webp";
//import Cursor from "./assets/Cursor.png";
import WeissSchnee from "./components/WeissSchnee";
import WishSimulate from "./assets/WishSimulate.mp4";
//import ErenYeager from "./components/GlimpseOfUs";
import { useState } from 'react';
//import Sharkgod from './components/Sharkgod';
//import test1 from './assets/test1.png';
//import test2 from './assets/test2.png';
import Navbar from "./components/Navbar";
*/
/*
import "./assets/Monkeysex.svg"
import { createRoot } from 'react-dom/client';
import { ReactSVG } from 'react-svg';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<ReactSVG src="Monkeysex.svg" />)
*/

// i was listening to: https://www.youtube.com/watch?v=0FP2m_8ka9I&ab_channel=KNIGHT
// when i coded this

// The very framework of this world will be adjusted. Justice is subject to dispute, but might is easily recognized and not disputed. So, we cannot give might to justice because might has denied justice and declared themselves as just. Thus, unable to make what is just might, we have now made what is might just.

// uwu onii chan uwu owo h-hi i-i a-am t-turner f-fool !!!! >< >< ><

// t-twere is twoo m-mwuch uwu --> UWU OVERLOAD
// uwu.js

/*
GURASHARK BUFF: CODING SPEED 200% BOOST, BUG RATE DECREASED BY 30%
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@&######&@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@&#GP55555555PG#&@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@&G?JYJ7!~^^~!7JYJJG&@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@BP5?~:...::::...:~?5PB@@@@@@@@@@@@@@
@@@@@@@@@@@@@BPJ^..:.^^:^^:^^.:..^J5B@@@@@@@@@@@@@
@@@@@@@@@@@@G5!.:::~^.^: ....~~:::.!5G@@@@@@@@@@@@
@@@@@@@@@&B5Y~ ^^?!..^7~.:::~..77^^ ~55B&@@@@@@@@@
@@@@@@@&G5Y5~ !7~~^^~!J7^^~^!^:!~~7! ~5Y5G&@@@@@@@
@@@@@@B5Y55? ^~..~^^:^~~^::::::~~..~^ ?55Y5B@@@@@@
@@@@&PYYY55:.!..:~UwU!......!UwU~:..!.:55YYYP&@@@@
@@@@&GGGBBY.:7..^^:7?!......7?7:^^..7:.5BBGGG&@@@@
@@@@@@@@@@5.:!..:^:::........:::^:..!:.5@@@@@@@@@@
@@@@@@@@@@G:.^:.:^^............^^:.:^.:G@@@@@@@@@@
@@@@@@@@@@#?..^.^~!!^:......:^!!~^.^..?#@@@@@@@@@@
@@@@@@@@@@@#!..^^!~77J7~^^~7J77~!^^..!#@@@@@@@@@@@
@@@@@@@@@@#Y~~:~^~~:.^.:::^.^.:~~^~:~~5#@@@@@@@@@@
@@@@@@@@&&#7.. .^^~^:...:^::.:^~^^. ..7#&&@@@@@@@@
@@@@@@@@@BJJ?~:.  ..::^^::^^::..  .:~?JJB@@@@@@@@@
@@@@@@@&#B#5555Y?!^:. :~~~~: .:^!?Y5555#B#&@@@@@@@
@@@@@@@@@@G55555555?J?!~77~!??J55555555B@@@@@@@@@@
@@@@@@@@@&5555555557Y55PP5P55Y7555555555&@@@@@@@@@
@@@@@@@@@G55555555Y!555P55555Y!Y55555555P@@@@@@@@@
@@@@@@@@&5555PP555Y!5555555555!Y555PP5555B@@@@@@@@
*/

/*
Lessons learned from this project:
- Style after, functionality first
- Don't have dumb component names, you won't remember
- States, Functional Components, useState hooks
- math fucking sucks and the rng section ain't even done
- having isolated components is good for organization, but for a newbie, it might be more detrimental since i don't know how to change states of a website that has global states and its various components have various states -- basically, when you're in app.jsi haven't learned how to modify a component like <Component/>'s state inside of App.js and can only modify App's state
- what differentiates great programmers from good programmers is the ability to search on google for what you need and being able to find it
- seems simple but it's the truth
- being able to break down the problem that you have into computer science or programmer language and tackling the problem by incorporating many different answers from google
- fundamentals > bruteforcing in the long term
- bruteforcing > fundamentals in the short term
- honestly, i didn't know much react before i started this shit
- i just bruteforced it but i guess i ended up learning quite a bit
- bruteforcing is the same as fighting bosses in elden ring at level 1 with club and buckler while learning fundamentals is using the level system provided 
- vim is god
- vim yank across tabs is cringe ( "+y and "+p , fuck me cringe ass macros)
- it might be better to just bruteforce into a business because it aligns gaining knowledge alongside what you want to do, which is a super powerful combo psychologically
- n-no m-more g-gurashark and u-uwu~~~~
- working smart + working hard = unstoppable
- i think if my first react project was like an ecommerce website or anything other than a wish simulator, it would've been so much easier to just use material ui and style a website and not be restricted to certain assets, but w.e that's just destiny.

*/

/*
TO DO LIST:
- styling
- incorporate rng in the wishes
- incorporate states for components that track how rng increases over the amount of wishes (fuck me this is aids!!!!)
- align states of components relative to the amount of wishes
*/




// what if it's an array for the useState and we set it
// with multiple numbers?

// 0.6% = 5 star, 5.1% = 4 star, 3 star = 94.3%
// what if it rolls 1/100
// and 0.6/100 is the 5 star
// 5.1/100 is the 4 star
// and the 94.3/100 is the 5 star
// if wish is < or equal to 0.6 then you get 5 star
// if wish is < or equal to 5.1 then you get 5 star and > 0.6
// if wish is > 5.1 and < or equal to 100 then u get 3 star
// need to have a math random property to the function or smth similar
// apparently js math random floor it'd be harder to use with decimals
// so if you scale it to 1000 instead
// what happens? 0.6 becomes 6
// 5.1 becomes 51
// and the 3 star becomes 943
// is that even allowed tho in stats?
// basically the rendition would run to enable 900 more counts
// thus making it harder? or is the stats the same because of
// the same percentage chance? what the fuck
// math is cringe as fuck
// why did i decide to make a wish rng simulator as my first
// react project fuck me

// what happens if rng returns the video output?
/*
function RNG() {
const [wishRNG, setWishRNG] = useState(0)
const yolorng = Math.floor(Math.random() * 1001); // returns random integer between 0 and 1000
return (
  <>
  </>


);
}
*/

export default function App() {
  const [globalstate, setGlobalState] = useState(0)
  const [wishRNG, setWishRNG] = useState(0)
  const yolorng = Math.floor(Math.random() * 1001); // returns random integer between 0 and 1000

// what happens if setWishRNG(yolorng)
  // that would theoretically set wishRNG's state = yolorng
  // thus we could do if statements involving wishRNG

  if (globalstate === 0) {
  return (
    <div>
      {console.log({yolorng})}
    <Loading/>
    <div style={{
    backgroundImage: `url(${wishBackground})`,
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    }}>
    <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    }}>
    <button onClick={()=> setGlobalState(globalstate + 1)}

    style={{
      width:"100px",
      height:"100px",
    }}> Go to Simulator</button>
    </div>
    </div>
    </div>
  );
  } else if (globalstate === 1) {
return (
  
  <div id="parent" style={{
    backgroundImage:  `url(${wishBackground})`,
    backgroundPosition: 'center',
    width: '100vw', 
    height: '100vh',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  }}>
  <Navbar/>
  <Banner/>
  <Footer/>
    <button onClick={()=> setGlobalState(globalstate + 1)}>
 test wish 
  </button>
  </div>
);
  } else if (globalstate === 2) {
  return(
    <video autoPlay onEnded={()=> setGlobalState(globalstate === 1)} style={{
    position: "fixed",
    right: "0",
    bottom: "0",
    minWidth: "100%",
    minHeight: "100%",
  }}>
  <source src={fourstarsinglewish} type="video/mp4" style={{
  }}/>
  </video>
  );
} else if (globalstate === 3) {
  return(
    <div></div> 
  );
}
}


// holy shit i broke the barrier
// i finally incorporated global state, shit looks simple, but i was stuck on it since forever...
// i had trouble wrapping my head around dealing with state in a website with many components that have state and a state for the website itself
// but i just see the framework




/*
function WishSingular() {
  const videoWish = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);
  const play
}
*/
/*
function WishSingular(props) {
  useHook();
you can't nest that hooker shit inside unless it's a custom hook
  const fun=()=> {
    useHook();
  }
  return <button onClick={()=>useHook()}></button>
}
*/
/*
function WishSingular() {
  useState(0);
  const [ws1, setWs1] = useState(0)
  return (
    <button onClick={()=>setWs1(ws1 + 1)}>>
    {ws1}
  </button>
  );
}
*/





/*
class Helpbutton extends React.Component {
  render() {
  return (
  <div>
    <button id="helpbutton" alt="helpbutton" style={{
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      border: "0.15rem solid #fff",
      borderRadius: "50px",
      borderTopColor:'rgb(255, 255, 255)',
      borderTopStyle: "solid",
      borderTopWidth: "0.15rem",
      borderRightColor: 'rgb(255, 255, 255)',
    borderRightStyle:"solid",
    borderRightWidth: "0.15rem",
    borderBottomColor: 'rgb(255, 255, 255)',
    borderBottomStyle: "solid",
    borderBottomWidth: "0.15rem",
    borderLeftColor: 'rgb(255, 255, 255)',
    borderLeftStyle: "solid",
    borderLeftWidth: "0.15rem",
    borderImageSource:"initial",
    borderImageSlice: "initial",
    borderImageWidth:"initial",
    borderImageOutset:"initial",
    borderImageRepeat:"initial",
    color: "#fff",
    marginLeft: "1rem",
    width: "1.7rem",
    height: "1.7rem",
    lineHeight: "0",
    transition: "all .2s",
      transitionProperty: "all",
      transitionDuration: "0.2s",
      transitionTimingFunction: "ease",
      transitionDelay: "0s",
    backgroundColor: "transparent",
    outline: "0",
      outlineColor: "initial",
      outlineStyle: "initial",
      outlineWidth: "0px",
      fontSize: "1rem",
      fontFamily: "inherit",
      letterSpacing: "-.03rem",
      appearance: "auto",
      writingMode: "horizontal-tb !important",
      textRendering: "auto",
      wordSpacing: "normal",
      textTransform: "none",
      textIndent: "0px",
      textShadow: "none",
      textAlign: "center",
      cursor: "default",
      }}>
      <i style={{
        fontFamily: "GenshinIcon",
        fontStyle: "normal!important",
        fontWeight: "400!important",
        fontVariant: "normal!important",
        fontVariantLigatures: "normal !important",
        fontVariantCaps: "normal !important",
        fontVariantNumeric: "normal !important",
        fontVariantEastAsian: "normal !important",
        textTransform: "none !important",
        speak: "none",
        lineHeight: "1",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
}}>
      </i>
</button>
  </div>
  )
  }
}

// button for Wishx1
class UWUOVERLOAD extends React.Component {
  render() {
  return( 
  <div>
    <video ref="video">
      <source src={WishSimulate} type="video/mp4" />
    </video>
  <button style={{
    backgroundImage: "./assets/button.webp",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundRepeat: "no-repeat",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    width: "230px",
    aspectRatio: "355/88",
    margin: "0 5px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#a49a90",
    transition: "all .2s",
    }}>
    <div>
Wish x1
    </div>
    <div>
      <img src={Senzawa} alt="intertwined" width="20px" height="auto"/>
      <span style={{
      marginLeft: "7px",
      }}>
      x 1
      </span>
    </div>
  </button>
  </div>
    )  
  }
}

// genshin logo at top left corner next to character event wish
class Oniichan extends React.Component {
  render() {
  return ( 
  <div>
    <img src={AmeliaWatson} alt="genshin wish logo" style={{
    height: "30px",  
    marginRight: "15px",
    }}/>
  </div>
  )
}
}

/*
class Killpatrickcollison extends React.Component {
  render() {
  return {
  }
  }
}
*/
/*
// class zerotwo doesne't really do anything except log to console
class Zerotwo extends React.Component {
  render() {
    const monkeysex = console.log("sex feels good!!!! :))))")
  return ( 
    <div>
    </div>
  ) }
}
*/
// Gurashark is supposed to store the currency of stardust, but the icons and numbers disappeared so have to fix this part!
/*
class Gurashark extends React.Component {
  render() {
    return <div className="gurashark">
      <p style={{
        color: "white",
        fontWeight: "bold",
        fontFamily: "GenshinFont",
      }}>0</p>    
      <p style={{
        color: "white",
        fontWeight: "bold",
        fontFamily: "GenshinFont",
      }}>69</p>
      </div>
  }
}
// fix functionality on amount of stardust currency in Gurashark component later
*/
/*
import Sound from 'react-sound';
*/
/*
class BackgroundMusic extends React.Component {
  render() {
    return ( <Sound 
        url={wishMusic}
        playStatus={Sound.status.PLAYING}
        volume = "100"
        loop = "true"
        autoLoad = "true"
      />
    );
  }
}
*/

// fix the CSS in class Startest later because it's not showing up!
/*
class Startest extends React.Component {
    render() {
      return <div style={{ 
        position: "flex",
        
        }}>
        <img src={masterlessStardust} alt="masterlessStardust" style={{
          position: "relative",
        height:"20px",
        width: "20px",
        transform: "translate(-100px, 20px)"
        }}/>
        <img src={masterlessStarglitter} alt="masterlessStarglitter" style={{
        position: "relative",
        height: "20px",
        width: "20px",
        }}/>
      </div>
  }
}
*/
/*
const starTest2 = <starTest />
*/
/*
class RubyRose extends React.Component {
  render() {
    return (
    <div>
      <img src={masterlessStardust} alt="masterlessStardust" style={{
        width: "25px",
        height: "25px",


      }}/>
      <span style={{
        color: "white",
        fontWeight: "bold",
        fontFamily: "GenshinFont",

      }}> 12</span>
      <img src={masterlessStarglitter} alt="masterlessStarglitter" style={{
        width: "25px",
        height: "25px",
      }}/>
      <span style= {{
        color: "white",
        fontWeight: "bold",
        fontFamily: "GenshinFont",
      }}> 69
      </span>
    </div>
  )
  }
}
/*
function Designingdataintensiveapplications (){
  const [hotnakedwoman, hotnakedman] = useState(false);

  const sexymonkey = () => {
  hotnakedman(hotnakedwoman => !hotnakedwoman);
  }
  return (
    <>
      <div className={hotnakedwoman ? 'test1' : 'test2'} />
      <button onClick={sexymonkey}>Sexymonkey</button>
    </>
  );
}
*/
// set the inside of loading === false as the introduction hover box and when they click that it renders new page?
/*
function Loading() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  return (
  <>
  {loading === false ? (
    <div className="Loading">

    </div>


  ) : (
    <UWUOVERLOAD/>
  )}  
  </>
  );
}
/*
function Music() {
 const audioRef = React.createRef();

 const handleKeydown = (event) => {
  if (event.repeat) {
  return;
  }
  audioRef.current.play();
  }


  useEffect(() => {
  document.addEventListener("mousedown", (event) => handleKeydown(event));

    return () => {
  <>
 <audio src={wishMusic} ref={audioRef}/> 
  </>
  }
})
}
*/
// react is so fucking cringe, when you use a ref in an outside component and activate the component inside your main app, it won't work because it can't read the properties of null sicne it's not in the dom, what the fuck is that cringe shit

//testing conditional rendering



// the app needs global states
// the components have its own states as well
// damn this is tough!

/*
function App(){
// audio using React Refs
  // react refs got me fucked up on god

  /*
   const audioRef = React.createRef();

  const handleKeydown = (event) => {
    if (event.repeat) {
      return;
    }
    audioRef.current.play();
  }

  useEffect(() => {
    document.addEventListener("mousedown", (event) => handleKeydown(event));
    //cleanup
    return () => {
    }
  })

  */


/* Review why Startest works but Starglitter didn't work - i think its cus it's outside of the app function so it works, you essentially pull it from outside as an isolated component
  class Starglitter extends React.Component {
    render() {
      return() => {
        <div className="starglitter">
          <img src={masterlessStardust} alt="masterlessStardust"/>
          <img src={masterlessStarglitter} alt="masterlessStarglitter"/>
          {console.log("it works")}
        </div>
    }
  }
}
*/
// implementing a cursor in css with react didn't work with inline styling apparently you have to change states and shit of the mouse which is cringe af1!!!!!!
/*
  return (   
    <>
<div className = "parent" style={{
    backgroundImage: `url(${wishBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
}}>
  {/*
      <div id="wishMusic"> 
       <audio src={wishMusic} ref={audioRef}/> 
       </div> 
       */ 
/*
    <div id={{
      backgroundImage: `url(${wishBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      }}>
      
     <img 
      src={laSignoraCharacterBanner} 
      alt="la-signora-character-banner"
      style={{
        display: "block",
        width: "65%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "180px",
        pointerEvents: "none",
      }}
    />
<RubyRose/>
    <div style={{
      bottom: "150",
      left: "150",
      position: "relative",
    }}>
<WeissSchnee style= {{}}/>
    <div style= {{
      position: "relative",
    }}>
  
    </div>
    </div>
    </div>
{/*
   <div id="flexGOD" style={{
      display: "flex",
      }}>
     <div id="cew" style={{ 
        position: "absolute",
        fontSize: "21px",
        margin: "0",
        padding: "0",
        top: "33px",
        left: "66px",
        color: "white",
        fontFamily: "GenshinFont",
        fontWeight: "bolder",
        }}>
        <h1 style={{
          textTransform: "capitalize",
          display: "flex",
          color: "#fff",
          alignItems: "center",
          textAlign: "left",
          fontSize: "110%",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
          fontWeight: "bold",
        }}>
          <Oniichan/>
          <span>Character Event Wish</span>
          <Helpbutton />
        </h1>
      </div>
    </div>
    */
/*
    <div className="StartestSEX" id="StartestSEX">
    </div>
      
    <div className="ZerotwoCUTE" id="ZerotwoCUTE">
    </div>
    
      <div className="Gurashark" id="Gurashark">
      </div>
  <div id="footer" style={{
    width: "100%",
    height: "100%",
    position: "relative",
    display: "block",
    userSelect: "none",
    MozUserSelect: "-moz-none",
    KhtmlUserSelect: "none",
    WebkitUserSelect: "none",
    Msuserselect: "none",
    WebkitUserDrag: "none",
    left: "0",
    bottom: "0",
    textAlign: "center",
  }}>
  <div id="bottomrow" style={{
    width: "5px",
    backgroundColor: "#d2c69c80",
    borderRadius: "5px",
  }}>
  <div id="rightsideofbuttons" style={{
    whiteSpace: "nowrap",
    textAlign: "right",
    display: "block",
    }}>
  </div>
  </div>
  </div>
</div>
</>
)
}
export default App

// FUCK I SHOULDVE NEVER NAMED MY COMPONETNS ZEROTWO AND GAWR GURA WHAT THE FUCK DO THEY EVENT MEAN??????
// kk maybe i should follow a better format so it makes it easier to work with
// ill just reference the competitor and use their inspect to evaluate their formatting
// i think initial <div></div>
// then <main></main> afterwards
// then <section></section> - host background here
// <div for header></div> - everything you host at the top
// <div for video output> - not implemented yet
// <div for banner>
// <div for footer>

// implement cursor later 

// look into webgl 3.js as alternative to unity when rendering 3d web browser game to play La Signora if you roll her
// fuck why is UWUOVERLOAD NOT WORKING OMGGGG FUCKING GOD!!!!!! I HATE DEBUGGGGGGGGINGGGGGGGGGGGG the wevels of uwu awe off the chawst!!!!!!!!!!!
// EDIT; it did work but it just wasn't visualized because background was covering it
// omg to implement functionality i have to learn more stuff that means i have to watch bideos and that sucks because i like building not learning omg omg omg omg omg omg omg omg omg im so madddddddd >< >< so much owo owo in this world!!!!!!!!!
// this website has been seized by the UWU police
//
//fuck maybe i shouldnt have named the variables degenerate names because i forgot what some of them do
// i think including the button and having it onclick play video
// and then use css to make video encompass entire app will simulate
// the video game effect or rolling and have it track the data to state like
// numbers of rolls - pity, 
// but that could be the cheating way out if i just have three videos that the web app
// cycles through depending on the result
// video 1 - one wish basic purple
// video 2 - one wish gold
// if isolating by wishes, then need videos for the result or assets for the result and play separately
// the even easier method would be just to play two videos, you either get it or dont
// one full video of a built in signora (purple)
// one full video of a sword (purple)
// and then id just assign probabilities somehow to those two videos onclick
// but it wouldn't be as resusable with other characters
// cus lets say this isnt just for signora and i want to add timmie god of birds inside the wish simulator, then it wouldn't be as easily edited unless i also make a timmie video too, so that it relies too much on videos vs on code, cus if you run a video background and code isolated components in the wish sequence, then you can just replace the coded isolated components when switching wishes
// fuck fuk fuck fufkffkkfkffkfkfkf monke monke oo ooh ooh awh awh awh
//GURA SHARK IS BASED GOD!!!!! uwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwuwu
/*
  [date redacted]:
    - Add all necessary objects for home page
    - Style using CSS
    - Start working on functionality afterwards
*/

// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark
// Gurashark

/*
lvdvlhsvhksckvhzjhsjdgsggsblblblbkbkbfbfbfbgbgbbg
my john deere, big steer, hulking green corn-pickin’ machine
BOOMWER is COOMBING HES CMOOMINGK
ha ha tummy go grrfgbflrgbfglrbfblfgb
listen all im asking is for you to let me get up under them fingy nails
i have eaten the easter bunny
commandew, the uwu is off the chawts
we awe weaching wevels of uwu we nevew fought possibwe
                                 ,-
                               ,'::|
                              /::::|
                            ,'::::o\                                      _..
         ____........-------,..::?88b                                  ,-' /
 _.--"""". . . .      .   .  .  .  ""`-._                           ,-' .;'
<. - :::::o......  ...   . . .. . .  .  .""--._                  ,-'. .;'
 `-._  ` `":`:`:`::||||:::::::::::::::::.:. .  ""--._ ,'|     ,-'.  .;'
     """_=--       //'doo.. ````:`:`::::::::::.:.:.:. .`-`._-'.   .;'
         ""--.__     P(       \               ` ``:`:``:::: .   .;'
                "\""--.:-.     `.                             .:/
                  \. /    `-._   `.""-----.,-..::(--"".\""`.  `:\
                   `P         `-._ \          `-:\          `. `:\
                                   ""            "            `-._)
*/





// Gameplan for Functionality
// - Implement Loading Screen
// - Assign Website Components to a State of 0
// When they press a button - change State to 1
// and Display New Components


