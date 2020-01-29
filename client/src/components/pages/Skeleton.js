import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

import step1 from "./icons/stepa.png";
import step2 from "./icons/stepb.png";
import step3 from "./icons/stepc.png";
import step4 from "./icons/stepd.png";
import step5 from "./icons/stepe.png";

import pink from "./icons/pink.png";
import green from "./icons/green.png";
import blue from "./icons/blue.png";

import example from './icons/example.png';

import bar0 from './icons/bar0.png';
import bar1 from './icons/bar1.png';
import bar2 from './icons/bar2.png';
import bar3 from './icons/bar3.png';


// Client ID
const GOOGLE_CLIENT_ID = "739758725997-d8he26ce328pmd91fvg7f7cck6ernk72.apps.googleusercontent.com";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      scrolled1: false,
      scrolled2:false
    };
  }

  componentDidMount() {
    // API calls 
    window.addEventListener('scroll', () => {
      if (window.scrollY < 500) {
        this.setState({scrolled: true})
      }
    })
    
    // Typewriter effect 
    var pos = 0; var turn = 0; var count = 0;
    var data = ['memory.','moments.','mind.'];
    var speed = 180;

    setTimeout(typeWriter, speed);

    function typeWriter() {
      // stops when total count of characters exceeds 21 
      if (count > 21) {return;}
      if (pos < data[turn].length) {
        document.getElementById("str").innerHTML += data[turn].charAt(pos); // Show 
        // console.log(data[turn].charAt(pos));
        pos++;
        count++;
        setTimeout(typeWriter, speed); // Calls recurisively
      } 
      else {
        setTimeout(erase, speed+100);
      }
    }

    function erase() {
      if (pos >= 0) {
          var str=data[turn].toString().substring(0, pos);
          document.getElementById("str").innerHTML = str;
          pos--;
          setTimeout(erase, speed-80);
        } else {
          turn++;
          if(turn>=data.length) 
            turn=0;
          setTimeout(typeWriter, speed);
        }
    }

    // Cursor effect
    const cursor = document.querySelector('.Skeleton-cursor');

      document.querySelector('.Skeleton-cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX)+"px;")
        })

      document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })
  }

  render() {
    return (
      <>
        <div className='Skeleton-cursor'></div>
        {/* Main */}
        <section className='Skeleton-header'>
          <div className='Skeleton-keys'></div>
          <div className='Skeleton-title'>
            Own your 
          </div>
          <div id='str' className='Skeleton-title'></div>
        </section>

        {/* DIVIDER */}
        <img className='Skeleton-bar' src={bar0}/>
        
        {/* Background-info */}
        <section className='Skeleton-background-info'>
          {/* top row */}
          <div className={`Skeleton-basket ${this.state.scrolled ? 'fade-in' : ''}`}>
            <div className="Skeleton-image"><img src={step1}/></div>
            <div className="Skeleton-image"><img src={step2}/></div>
            <div className="Skeleton-image"><img src={step3}/></div>
          </div>
          {/* mid row */}
          <div className="Skeleton-banner">
            <div className="Skeleton-box"></div>
            <div className='Skeleton-title u-textCenter'>Build your <br></br> digital palace.</div>
            <div className="Skeleton-box"></div>
          </div>
          {/* end row */}
          <div className={`Skeleton-basket ${this.state.scrolled ? 'fade-in' : ''}`}>
            <div className="Skeleton-image"><img src={step4}/></div>
            <div className="Skeleton-image"><img src={step5}/></div>
          </div>
        </section>

        {/* DIVIDER */}
        <img className='Skeleton-bar' src={bar1}/>

        {/* Feature */}
        <section className='Skeleton-feature'>
          <div className='Skeleton-title'>
            Freedom.
          </div>
          <div className='wrapper'>
            <div className='flame-wrapper'>
              <div className='flame red'></div>
              <div className='flame orange'></div>
              <div className='flame gold'></div>
              <div className="base blue"></div>
            </div>
          </div>
  
            <div className="Skeleton-sticky">
              <div className="Skeleton-img"><img src={pink}/></div>
              <div className='Skeleton-text-block u-pad-left'>
                <i>Interact with > 30 objects to see the associated memory</i>
                <img className='Skeleton-image-block  Skeleton-transform' src='https://freesvg.org/img/Simple-Banana.png'/>
              </div>
            </div>

            <div className="Skeleton-sticky">
              <div className="Skeleton-img"><img src={green}/></div>
              <div className='Skeleton-text-block'>
                <i>Customize your own palace with various architecture styles & room backgrounds</i>
                <img className='Skeleton-image-block' src='https://cdn3.iconfinder.com/data/icons/wedding-and-anniversary-flat-1/60/house__home__apartment__building_-512.png'/>
              </div>
            </div>

            <div className="Skeleton-sticky">
            <div className="Skeleton-img"><img src={blue}/></div>
              <div className='Skeleton-text-block u-pad-right'>
                <i>Discover public mind edifices at Town Hall</i>
                <img className='Skeleton-image-block u-pad-right' src='https://www.svgrepo.com/show/88690/building.svg'/>
              </div>
            </div>
        </section>

        {/* DIVIDER */}
        <img className='Skeleton-bar' src={bar2}/>

        {/* Example */}
        <section className='Skeleton-example'>
          <div className='Skeleton-example-title'>
            Try it.
          </div>
          <div className='Skeleton-rotate'></div>
          <div className='Skeleton-chatlog'>
          <div className="Skeleton-chatbox-right Skeleton-sb1">
            <div className='u-bold'>Topic: <span className='u-normal u-left-space'>APUSH</span></div>
          </div>
          <div className="Skeleton-chatbox-right Skeleton-sb1">
            <div className='u-bold'>Goal: <span className='u-normal u-left-space'>Memorize historic events in chronological order</span></div>
          </div>
          <div className='Skeleton-chatbox-right Skeleton-sb1 Skeleton-disappear'> <div className='u-bold'>Events:</div>
            <li>1761 - Taxation w/o Representation</li> 
            <li>1763 - French & Indian War ends </li> 
            <li>1763 - Proclamation of 1763 </li>
            <li>1765 - Stamp Act </li> 
            <li>1773 - Boston Tea Party </li> 
          </div>
          </div>
        </section>

        {/* DIVIDER */}
        <img className='Skeleton-bar' src={bar3}/>

        {/* Design */}
        <section className='Skeleton-design'>
          <div className='Skeleton-design-title'>
          Craft memories.
          </div>

          <div className='Skeleton-chatbox-left Skeleton-sb2'>
            <div className='u-bold'>Build</div>
            <img className='Skeleton-icon' src={example}/>
          </div>

          <div className='Skeleton-chatbox-left Skeleton-sb2'>
            <div className='u-bold'>Mega-plot</div>
             <p>I went to my bedroom to pick up my <i>book</i> on symbolism & representation.</p>
              <p>As I grabbed the papers, I knocked over my <i>mini-Eiffel Tower model</i>.</p>
              <p>Then, I picked up the <i>red pen</i> I got from Appaclachians, which, ironically,
              had a "Made in England" <i>stamp</i> on it.</p>
              <p>Finally, before leaving, I laid out
              the <i>dress</i> I would for the party tonight.</p>
          </div>
        </section>

        {/* Footer */}
        <section id='footer' className='Skeleton-footer'>
          <div className='Skeleton-footer-title'>
            QUESTIONS?
          </div>
          <div className='Skeleton-text'> ianl@mit.edu <sup> . </sup> hizami@mit.edu <sup> . </sup>  umangb@mit.edu </div>
        </section>

      </>
    );
  }
}

export default Skeleton;