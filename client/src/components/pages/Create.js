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

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [],
      inputText: "",
    };

    this.keyCounter = 0;
  }

  componentDidMount() {
    
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      inputText: value
    });
  };

  createObject = () => {
    const objects = this.state.objects;
    const inputText = this.state.inputText;
    const newObjects = objects.concat([{ image: inputText, key: this.keyCounter, x: 200, y: 200 }]);
    this.keyCounter++;

    this.setState({
      objects: newObjects,
      inputText: ""
    });

    console.log(this.state);
  };

  saveRoom = () => {
    const body = {
      name: "name",
      objects: this.state.objects,
      url: "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg",
    }
    post("/api/room", body).then((res) => {
      console.log("Save successful!");
    });
  };

  save = () => {
    //console.log(this.state.objects);
    if(this.props.userId != undefined) {
    for(let i = 0; i < this.state.objects.length; i++) {
      let object = this.state.objects[i];
      //console.log(object);
      // const image = object.imagedocument.getElementById(`image-${object.key}`);
      //const canvas = document.getElementById(`canvas`);
      let child = document.getElementById(`num-${object.key}`);
      let rect = child.getBoundingClientRect();
      let parent = document.getElementById("canvas");
      let rect0 = parent.getBoundingClientRect();
      let x = rect.left, y=rect.top;
      let x0 = rect0.left, y0=rect0.top;
      let dx = x-x0, dy=y-y0;
      object['x'] = dx;
      object['y'] = dy;
    }
    //console.log(this.state.objects);
    this.saveRoom();
    }
  }

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

  deleteObject = (key) => {
    const { objects } = this.state;
    const newObjects = objects.filter(item => item.key !== key);
    this.setState({ objects: newObjects });
  };

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
          />
        ))}
      </div>
      <div className="uploadBar">
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.createObject}>Upload Image URL</button>
        <button onClick={this.save}>Save Layout</button>
        <button onClick={this.load}>Load Layout</button>
      </div>
      </>
    );
  }
}

export default Create;
