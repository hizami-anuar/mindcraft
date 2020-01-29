import React, { Component } from "react";

import Create from './Create.js'
import BackgroundSelect from '../modules/BackgroundSelect.js'
import HouseMap from '../modules/HouseMap.js'
import Instructions from './Instructions.js'

import { redirectTo } from "@reach/router";
import { get } from "../../utilities";
import { post } from "../../utilities";

import './Build.css'

class Build extends Component {
  constructor(props){
    super(props);
    this.state = {
      house: [],
      currentRoomIndex: 0,
      currentRoom: {
        title: 'this is a room',
        background: './backgrounds/bathroom/0.jpg',
        objects: [],
      },
      background: '',
      keyCounter: 0,
      panel: 'housemap',
    }
  }

  saveHouse = () => {
    const body = {
      name: "name",
      house: this.state.house,
      // objects: this.state.room.objects,
      keyCounter: this.state.keyCounter,
      // url: "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg",
    }
    post("/api/house", body).then((res) => {
      console.log("Save successful!");
    });
  };

  loadHouse = () => {
    this.setState({
      house: [],
    });
    console.log(this.props.userId);
    if(this.props.userId != undefined) {
      get("/api/house", {creator_id: this.props.userId}).then((data) => {
        //console.log("DATA");
        let loadedData = data.slice(-1)[0];
        let loadedHouse = loadedData.house;
        if (loadedHouse != undefined) {
          this.setState({house: loadedHouse});
        };
        let keyCounter = loadedData.keyCounter;
        if (keyCounter != undefined) {
          this.setState({keyCounter: keyCounter});
        }
      });
    };
  }


  setPanel = (type) => {
    this.setState({panel: type});
  }

  setBackground = (background) => {
    let newHouse = this.state.house;
    let newRoom = newHouse[this.state.currentRoomIndex];
    newRoom.background = background;
    newHouse[this.state.currentRoomIndex] = newRoom;
    this.setState({
      house: newHouse,
      background: background,
    });
  }

  setHouse = (house) => {
    this.setState({house: house});
  }

  setCurrentRoom = (index) => {
    this.setState({currentRoomIndex: index});
    this.setState({currentRoom: this.state.house[index]});
  }

  editRoom = (room) => {
    let newHouse = this.state.house;
    newHouse[this.state.currentRoomIndex] = room;
    this.setState({house: newHouse});
  }

  updateKeyCounter = (value) => {
    this.setState({keyCounter: value});
  }

  render() {
    return(
      <>
        <div className='Build-container'>
        <button className='Build-button' onClick={() => this.setPanel('housemap')}>House Map</button>
        <button className='Build-button' onClick={() => this.setPanel('backgroundselect')}>Select Background</button>
        <button className='Build-button' onClick={() => this.setPanel('create')}>Create</button>

        <button className='Build-button' onClick={this.loadHouse}>Load</button>
        <button className='Build-button' onClick={this.setPanel('instructions'}>Instructions</button>
        {
        this.props.userId === undefined ? (
          <div>Please log in.</div>
        ) :

        this.state.panel === 'create' ? (
        <Create
          userId={this.props.userId}
          room={this.state.currentRoom}
          dragMoveListener={this.props.dragMoveListener}
          editRoom={(room) => this.editRoom(room)}
          saveHouse={this.saveHouse}
          keyCounter={this.state.keyCounter}
          updateKeyCounter={(value) => this.updateKeyCounter(value)}
          editable={true}
        />
        ) : 
        
        this.state.panel === 'backgroundselect' ?
        (
        <BackgroundSelect
          setBackground = {(background) => this.setBackground(background)}
          background = {this.state.background}
        />
        ) :

        this.state.panel === 'housemap' ?
        (
        <HouseMap
          house = {this.state.house}
          currentRoomIndex = {this.state.currentRoomIndex}
          currentRoom = {this.state.currentRoom}
          setHouse = {(house) => this.setHouse(house)}
          setCurrentRoom = {(index) => this.setCurrentRoom(index)}
        />
        ) :
        
        this.state.panel === 'instructions' ?
        (
        <Instructions
        />
        ) :

        (<div>Error</div>)
        }
        </div>
      </>
    )
  }
}

export default Build;
