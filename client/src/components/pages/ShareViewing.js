import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import interact from 'interactjs'
import Object from "../modules/Object.js";
import ObjectWindow from "../modules/ObjectWindow.js";

import importMovement from "../modules/Movement.js";
import "../../utilities.css";
import "./Create.css";
import { redirectTo } from "@reach/router";
import { get } from "../../utilities";
import { post } from "../../utilities";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [],
      inputText: "",
      currentObject: {},
    };

    this.keyCounter = 0;
  }

  componentDidMount() {
    
  };

  load = () => {
    console.log("loading");
    this.setState({
      objects: []
    });
    console.log(this.props.userId);
    if(this.props.userId != undefined) {
      //console.log("retrieving");
      get("/api/room", {creator_id: this.props.userId}).then((data) => {
        //console.log("DATA");
        let loadedData = data.slice(-1)[0];
        if (loadedData.numbers != undefined) {
          this.setState({
            objects: loadedData.numbers
          });
        console.log(loadedData);
        };
      });
    };
  }

  findKey = (key) => {
    for (let i=0; i<this.state.objects.length; i++) {
      if (this.state.objects[i].key === key) {
        const object = this.state.objects[i];
        return i;
      }
    }
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
            deleteObject={() => this.deleteObject(item.key)}
            setCurrentObject={() => this.setCurrentObject(item.key)}
          />
        ))}
      </div>
      <ObjectWindow
        currentObject = {this.state.currentObject}
        deleteObject = {() => this.deleteObject(this.state.currentObject.key)}
      />
      </>
    );
  }
}

export default Create;