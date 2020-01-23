import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
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
    // remember -- api calls go here!
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
        <div className='banner type-effect'>
            <h1 className='banner-text'>
            Own your memory.
            </h1>
        </div>

        <section>
          <div className='wave'></div>
        </section>
        {/* type-effect-sub */}
        <div className={`sub-banner ${this.state.scrolled1 ? 'type-effect-sub' : ''}`}>
          <div className='sub-banner-left-title'>
            <h1>Build a Memory Palace.</h1> 
          </div>
        </div>

        <div className="sub-banner-left-text">
          Creating a memory palace, or an imaginary location in your mind, 
          helps you better store and access daily information.
          Map out a journey through a place you know well, 
          like a building or town. Then, along that journey, specify locations that you always visit in the same order.
        </div> 
        
        <div>
          <div className="u-inline-block">
            <img src="https://artofmemory.com/w/images/9/98/Ioulia-kea-photo.jpg" className="body-image"></img>
            <img src="https://www.wikihow.com/images/thumb/9/9f/Build-a-Memory-Palace-Step-5-Version-6.jpg/aid47287-v4-728px-Build-a-Memory-Palace-Step-5-Version-6.jpg" className="body-image"></img>
            <img src="https://www.readandspell.com/sites/default/files/blog/DevelopingSpellingSkills.jpg" className="body-image"></img>
          </div>
        </div>
      
        <div className={`sub-banner ${this.state.scrolled2 ? 'type-effect-sub' : ''}`}>
          <div className='sub-banner-right-title'>
            <h1>Why MindCraft?</h1> 
          </div>
        </div>

        <div className="sub-banner-right-text">
            <ul>
              Navigate around your own digital memory palace visual-spacially <br>
              </br>
              Customize architecture style, room backgrounds, and objects freely
              <br>
              </br>
              Discover and share public memory palaces via the Town Hall feature
            </ul> 
        </div> 

        <br></br> <br></br>
        <section>
          <div className='wave'></div>
        </section>
      </>
    );
  }
}

export default Skeleton;
