import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";

// This identifies your web application to Google's authentication service
// OLD VERSION
// const GOOGLE_CLIENT_ID = "121479668229-t5j82jrbi9oejh7c8avada226s75bopn.apps.googleusercontent.com";
// UMANG VERSION
// const GOOGLE_CLIENT_ID = "739758725997-d8he26ce328pmd91fvg7f7cck6ernk72.apps.googleusercontent.com";
// HIZAMI DEBUG VERSION
const GOOGLE_CLIENT_ID = "1090403895060-c4en7b9gqifbd9t5625ql3pfs6j5vrpj.apps.googleusercontent.com";

/* Navigation bar, takes no props */
class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="NavBar">
        <div className="NavBar-linkBox u-inlineBlock">
          {/* Home link */}
          <Link to="/" className="NavBar-link NavBar-logo"> 
          </Link>

          {/* Build link */}
          <Link to="/create" className="NavBar-link">
            <h2>Build</h2>
          </Link>

          {/* Explore link */}
          <Link to="/share" className="NavBar-link">
            <h2>Explore</h2>
          </Link>

          {/* About link */}
          <Link to="/about" className="NavBar-link">
            <h2>About</h2>
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
