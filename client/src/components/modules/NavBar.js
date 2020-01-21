import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";

// This identifies your web application to Google's authentication service
// const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";
const GOOGLE_CLIENT_ID = "739758725997-d8he26ce328pmd91fvg7f7cck6ernk72.apps.googleusercontent.com";

/* Navigation bar, takes no props */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="NavBar-container">
        <div className="NavBar-linkContainer u-inlineBlock">
          <Link to="/" className="NavBar-link"> 
            <img className="NavBar-logo" src="https://vignette.wikia.nocookie.net/pixel-gun-3d/images/d/d0/Onekey.png/revision/latest?cb=20170606115023"></img>
            <h2>MindCraft</h2>
          </Link>

          <Link to="/create" className="NavBar-link">
            <h2>Build</h2>
          </Link>

          <Link to="/construction" className="NavBar-link">
            <h2>Explore</h2>
          </Link>
          
          <Link to="/construction" className="NavBar-link">
            <h2>Share</h2>
          </Link>

          <Link to="/construction" className="NavBar-link">
            <h2>About</h2>
          </Link>

          <Link to="/NotFound" className="NavBar-link">
            <h2>Not Found</h2>
          </Link>
          
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
        </div>
      </nav>
    );
  }
}

export default NavBar;
