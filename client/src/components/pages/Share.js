import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import interact from 'interactjs'
import Object from "../modules/Object.js";

import importMovement from "../modules/Movement.js";
import "../../utilities.css";
import "./Create.css";
import { redirectTo } from "@reach/router";
import { get } from "../../utilities";
import { post } from "../../utilities";

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
        objects = [],
        inputText: "",
    };
  }

  componentDidMount(){

  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      inputText: value
    });
  };

  load = () => {
    console.log("loading");
    get("/api/roomname", {name: this.state.inputText}).then((data) => {
        let loadedData = data.slice(-1)[0];
        if (loadedData.numbers != undefined) {
            this.setState({
                objects: loadedData.numbers
            });
        console.log(loadedData);
        };
    });
  }

  render() {
    return (
      <>
      <div id="canvas" className="Create-container">
        {this.state.objects.map(item => (
          <Object 
            key = {`image-${item.key}`}
            objectId = {`num-${item.key}`}
            imageURL = {item.image}
            x = {item.x} // + document.getElementById("canvas").getBoundingClientRect().left}
            y = {item.y} // + document.getElementById("canvas").getBoundingClientRect().top}
          />
        ))}
      </div>
      <div className="uploadBar">
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.createObject}>Search</button>
      </div>
      </>
    );
  }


}