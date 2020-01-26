import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

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
  }

  render() {
    return (
      <>
        {/* Main */}
        <section id='header' className='Skeleton-header type-effect'>
            <div className='Skeleton-title'>
            Own your memory.
            </div>
        </section>

        {/* Background-info */}
        <section id='background-info' className='Skeleton-background-info type-effect'>
          <div className='Skeleton-title'>
            Build a memory palace.
          </div>
        </section>

        {/* Feature */}
        <section id='feature' className='Skeleton-feature type-effect'>
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
        <section id='example' className='Skeleton-example type-effect'>
          <div className='Skeleton-title'>
            Try it.
          </div>
        </section>

        {/* Footer */}
        <section id='footer' className='Skeleton-footer type-effect'>
          <div className='Skeleton-title'>
            About us
          </div>
        </section>

      </>
    );
  }
}

export default Skeleton;
