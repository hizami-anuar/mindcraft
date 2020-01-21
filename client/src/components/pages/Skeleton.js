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
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
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
        
        <div className='sub-banner type-effect-sub'>
          <div className='sub-banner-title'>
            <h1>Why Build a Memory Palace?</h1> 
          </div>
        </div>

        <div className="sub-banner-text">
          Creating a memory palace, or an imaginary location in your mind, 
          helps your better store mnemonic images. 
          Map out a journey through a place you know well, 
          like a building or town. Then, along that journey, specify locations that you always visit in the same order.
        </div> 
        
        <div>
          <div class="u-inline-block">
            <img src="https://artofmemory.com/w/images/9/98/Ioulia-kea-photo.jpg" className="body-image"></img>
            <img src="https://www.wikihow.com/images/thumb/9/9f/Build-a-Memory-Palace-Step-5-Version-6.jpg/aid47287-v4-728px-Build-a-Memory-Palace-Step-5-Version-6.jpg" className="body-image"></img>
            <img src="https://www.readandspell.com/sites/default/files/blog/DevelopingSpellingSkills.jpg" className="body-image"></img>
          </div>
        </div>
      
        {this.props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.props.handleLogout}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.props.handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )}
      </>
    );
  }
}

export default Skeleton;
