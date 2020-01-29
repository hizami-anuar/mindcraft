import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import NavBar from "./modules/NavBar.js";
import Build from "./pages/Build.js";
import Create from "./pages/Create.js";
import Share from "./pages/Share.js";
import interact from "interactjs";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import Construction from "./pages/Construction.js";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });

    window.dragMoveListener = this.dragMoveListener;

    interact('.draggable')
      .draggable({
        inertia: false,
        // keep the element within the area of its parent
        restrict: {
          restriction: "parent",
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,
  
        onstart: function (event) {
          //console.log('onstart');
        },
        // call this function on every dragmove event
        onmove: window.dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
          //console.log('onend');
          let rect = event.target.getBoundingClientRect();
          let parent = document.getElementById("canvas");
          let rect0 = parent.getBoundingClientRect();
          let x = rect.left, y=rect.top;
          let x0 = rect0.left, y0=rect0.top;
          let dx = x-x0, dy=y-y0;
          console.log(event.target.id);
        }
      });
    };

    

  dragMoveListener (event) {
    // console.log('dragMoveListener');
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the position attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    return (
      <>
        <NavBar
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          userId={this.state.userId}
        />
        <Router>
          <Skeleton
            path="/"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <Build
            path="/create"
            userId={this.state.userId}
            dragMoveListener={this.dragMoveListener}
          />
          <Share
            path="/share"
            userId={this.state.userId}
          />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
