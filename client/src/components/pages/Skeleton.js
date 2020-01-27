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
      console.log(window.scrollY);
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
      if (count > 21) {typeWriter.stop();}
      if (pos < data[turn].length) {
        document.getElementById("str").innerHTML += data[turn].charAt(pos); // Show 
        console.log(data[turn].charAt(pos));
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
          setTimeout(erase, speed-50);
        } else {
          turn++;
          if(turn>=data.length) 
            turn=0;
          setTimeout(typeWriter, speed);
        }
    }
  }

  render() {
    return (
      <>
        {/* Main */}
        <section className='Skeleton-header'>
          <div className='Skeleton-keys'></div>
          <div className='Skeleton-title'>
            Own your 
          </div>
          <div id='str' className='Skeleton-title' ></div>
        </section>

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
              <div className='Skeleton-text-block'>
                <i>Interact with > 30 objects to see the associated memory</i>
                <img className='Skeleton-image-block' src='https://cdn3.iconfinder.com/data/icons/wedding-and-anniversary-flat-1/60/house__home__apartment__building_-512.png'/>
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
              <div className='Skeleton-text-block'>
                <i>Discover public edifices @ Town Hall</i>
                <img className='Skeleton-image-block' src='https://cdn3.iconfinder.com/data/icons/wedding-and-anniversary-flat-1/60/house__home__apartment__building_-512.png'/>
              </div>
            </div>

        </section>

        {/* Example section */}
        <section className='Skeleton-example'>
          <div className='Skeleton-title'>
            Try it.
          </div>

        </section>

        {/* Footer */}
        <section id='footer' className='Skeleton-footer'>
          <div className='Skeleton-footer-title'>
            Questions?
          </div>
          <div className='Skeleton-text'> ianl@mit.edu <sup> . </sup> hizami@mit.edu <sup> . </sup>  umangba@mit.edu </div>
        </section>

      </>
    );
  }
}

export default Skeleton;