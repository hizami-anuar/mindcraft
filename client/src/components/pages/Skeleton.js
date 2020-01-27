import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

import path1 from "./icons/path1.png";
import path2 from "./icons/path2.png";

import step1 from "./icons/stepa.png";
import step2 from "./icons/stepb.png";
import step3 from "./icons/stepc.png";
import step4 from "./icons/stepd.png";
import step5 from "./icons/stepe.png";


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
        this.setState({scrolled1: true})
      }
      if (window.scrollY > 1000) {
        this.setState({scrolled2: true})
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
          <div class="Skeleton-basket">
            <div class="Skeleton-image"><img src={step1}/></div>
            <div class="Skeleton-image"><img src={step2}/></div>
            <div class="Skeleton-image"><img src={step3}/></div>
          </div>
          {/* mid row */}
          <div class="Skeleton-banner">
            <div class="Skeleton-box"></div>
            <div className='Skeleton-title u-textCenter'>Build your <br></br> digital palace.</div>
            <div class="Skeleton-box"></div>
          </div>
          {/* end row */}
          <div class="Skeleton-basket">
            <div class="Skeleton-image"><img src={step4}/></div>
            <div class="Skeleton-image"><img src={step5}/></div>
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
              <div className='flame white'></div>
              <div className='base black'></div>
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
          <div className='Skeleton-title'>
            About us
          </div>
        </section>

      </>
    );
  }
}

export default Skeleton;
