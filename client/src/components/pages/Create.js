import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import interact from 'interactjs'
import arrayMove from 'array-move';

import Object from "../modules/Object.js";
import ObjectWindow from "../modules/ObjectWindow.js";
import SortableComponent from "../modules/SortableComponent.js";
import BackgroundSelect from '../modules/BackgroundSelect.js'

import "../../utilities.css";
import "./Create.css";
import { redirectTo } from "@reach/router";
import { get } from "../../utilities";
import { post } from "../../utilities";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: this.props.room,
      // objects: [],
      inputText: "",
      currentObject: undefined,
      mode: 'number',
      logMode: 'log',
      editable: this.props.editable,
    };

    this.keyCounter = 0;
  }

  componentDidMount() {
    this.setBackground();
    window.dragMoveListener = this.props.dragMoveListener;
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      inputText: value
    });
  };

  saveRoom = () => {
    const body = {
      name: "name",
      room: [this.state.room],
      objects: this.state.room.objects,
      keyCounter: this.state.keyCounter,
      url: "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg",
    }
    post("/api/room", body).then((res) => {
      console.log("Save successful!");
    });
  };

  savePositions = () => {
    for(let i = 0; i < this.state.room.objects.length; i++) {
      let object = this.state.room.objects[i];
      let child = document.getElementById(`num-${object.key}`);
      let rect = child.getBoundingClientRect();
      let parent = document.getElementById("canvas");
      let rect0 = parent.getBoundingClientRect();
      let x = rect.left, y=rect.top;
      let x0 = rect0.left, y0=rect0.top;
      let dx = x-x0, dy=y-y0;
      object['x'] = dx-1;
      object['y'] = dy-1;
    }
  }

  save = () => {
    if(this.props.userId != undefined) {
    for(let i = 0; i < this.state.room.objects.length; i++) {
      let object = this.state.room.objects[i];
      let child = document.getElementById(`num-${object.key}`);
      let rect = child.getBoundingClientRect();
      let parent = document.getElementById("canvas");
      let rect0 = parent.getBoundingClientRect();
      let x = rect.left, y=rect.top;
      let x0 = rect0.left, y0=rect0.top;
      let dx = x-x0, dy=y-y0;
      object['x'] = dx-1;
      object['y'] = dy-1;
    }
    this.props.saveHouse();
    }
  }

  load = () => {
    console.log("loading");
    this.setState({
      room: {
        title: '',
        background: this.props.background,
        objects: [],
      },
    });
    console.log(this.props.userId);
    if(this.props.userId != undefined) {
      //console.log("retrieving");
      get("/api/room", {creator_id: this.props.userId}).then((data) => {
        //console.log("DATA");
        let loadedData = data.slice(-1)[0];
        //if (loadedData.numbers != undefined) {
        //  this.setState({
        //    objects: loadedData.numbers
        //  });
        //};
        let loadedRoom = loadedData.room;
        if (loadedRoom != undefined) {
          this.setState({room: loadedRoom[0]});
        };
      });
    };
  }

  findKey = (key) => {
    for (let i=0; i<this.state.room.objects.length; i++) {
      if (this.state.room.objects[i].key === key) {
        const object = this.state.room.objects[i];
        return i;
      }
    }
  }

  createObject = () => {
    let room = this.state.room;
    console.log(room);
    const objects = room.objects;
    console.log(objects);
    const inputText = this.state.inputText;
    const object = { 
      image: inputText, 
      key: this.props.keyCounter, 
      name: "Edit this name",
      notes: "Edit these notes", 
      x: 200, 
      y: 200}
    const newObjects = objects.concat([object]);
    room.objects = newObjects;
    this.props.updateKeyCounter(this.props.keyCounter+1);

    this.setState({
      room: room,
      inputText: ""
    });
    console.log(this.state.room);
  };

  deleteObject = (key) => {
    let room = this.state.room;
    const objects = room.objects;
    const newObjects = objects.filter(item => item.key !== key);
    room.objects = newObjects;
    this.setState({ room: room });
    this.setState({ currentObject: undefined});
  };

  setCurrentObject = (key) => {
    const index = this.findKey(key);
    const object = this.state.room.objects[index];
    this.setState({ currentObject: object });
    console.log("new object set");
    console.log(this.state.currentObject);
  }

  editObjects = (objects) => {
    let room = this.state.room;
    room.objects = objects;
    this.setState({ room: room });
  }

  editObjectValue = (key, property, value) => {
    const index = this.findKey(key);
    const object = this.state.room.objects[index];
    let newObjects = this.state.room.objects;
    if (property === "name") { newObjects[index].name = value; }
    if (property === "image") { newObjects[index].image = value; }
    if (property === "notes") { newObjects[index].notes = value; }
    this.editObjects(newObjects);
  }

  reorderObjects = (oldIndex, newIndex) => {
    this.editObjects(arrayMove(this.state.room.objects, oldIndex, newIndex));
    console.log(this.state.room.objects);
  }

  setModeNumber = () => {
    this.savePositions();
    console.log(this.state.room.objects);
    this.setState({mode: 'number'});
  }

  setModeImage = () => {
    this.savePositions();
    console.log(this.state.room.objects);
    this.setState({mode: 'image'});
  }

  setModeObject = () => {
    // this.savePositions();
    console.log(this.state.room.objects);
    this.setState({logMode: 'object'});
  }

  setModeLog = () => {
    // this.savePositions();
    console.log(this.state.room.objects);
    this.setState({logMode: 'log'});
  }

  setBackground = () => {
    document.getElementById('canvas').style.backgroundImage = 'url(' + this.state.room.background + ')';
  }

  render() {
    return (
      <>
      <div className="Create-container">
        <div className="Create-canvasContainer">
          <div className="Create-canvasBar">
            
            {this.state.editable ? (
              <>
                <input
                  type="text"
                  value={this.state.inputText}
                  onChange={this.handleInputChange}
                />
                <button className="Create-button" onClick={this.createObject}>Upload Image URL</button>
                <button className="Create-button" onClick={this.save}>Save Layout</button>
              </>
            ) : ( null )}
              <>
                  <button className="Create-button" onClick={this.setModeImage}>Image</button>
                  <button className="Create-button" onClick={this.setModeNumber}>Number</button>
              </>
          </div>
          <div id="canvas" className="Create-canvas">
            {this.state.room.objects.map((item, index) => (
              <Object 
                index = {index}
                key = {`image-${item.key}`}
                objectId = {`num-${item.key}`}
                image = {item.image}
                mode = {this.state.mode}
                x = {item.x} // + document.getElementById("canvas").getBoundingClientRect().left}
                y = {item.y} // + document.getElementById("canvas").getBoundingClientRect().top}
                deleteObject={() => this.deleteObject(item.key)}
                setCurrentObject={() => this.setCurrentObject(item.key)}
                editable = {this.state.editable}
              />
            ))}
          </div>
        </div>
        <div className='Create-logContainer'>
          <div className='Create-logBar'>
            <h1 className='Create-logBarText'>View:</h1>
            <button className="Create-logButton" onClick={this.setModeLog}>Log</button>
            <button className="Create-logButton" onClick={this.setModeObject}>Object</button>
          </div>
          <div className='Create-log'>
            {this.state.logMode === 'log' ? (
              <div>
                <h1 className='Create-logHeader'>
                  Log
                </h1>
                <div className='Create-logBody'>
                  <SortableComponent
                    objects = {this.state.room.objects}
                    reorderObjects = {(oldIndex, newIndex) => this.reorderObjects(oldIndex, newIndex)}
                    editable = {this.state.editable}
                  />
                </div>
              </div>
            ) : (
              this.state.currentObject ? (
                <ObjectWindow
                  currentObject = {this.state.currentObject}
                  deleteObject = {() => this.deleteObject(this.state.currentObject.key)}
                  editObjectValue = {(property, value) => this.editObjectValue(this.state.currentObject.key, property, value)}
                  editable = {this.state.editable}
                />
              ) : ( <div>No object selected.</div> )
            )}
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Create;
