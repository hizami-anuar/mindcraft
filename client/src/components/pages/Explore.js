import React, { Component } from "react";

import Create from './Create.js'
import BackgroundSelect from '../modules/BackgroundSelect.js'
import HouseMap from '../modules/HouseMap.js'
import Gallery from '../modules/Gallery.js'

import "../../utilities.css";
import "./Create.css";
import { redirectTo } from "@reach/router";
import { get } from "../../utilities";
import { post } from "../../utilities";

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houseList: [],
      house: [],
      currentRoomIndex: 0,
      currentRoom: {
        title: 'this is a room',
        background: './backgrounds/bathroom/0.jpg',
        objects: [],
      },
      background: '',
      keyCounter: 0,
      panel: 'gallery',
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
                                                            
  loadUserContent = () => {
    console.log("loading");
      console.log('loading more');
      get("/api/allHouses", {creator_id: this.props.userId}).then((data) => {
        let loadedData = [];
        //if (data.length >= 3){
          loadedData = data.slice(-6);
        //} else {
        //  loadedData = data.slice(-1);
        //};
        let listData = [];
        for (let i = 0; i < loadedData.length; i++){
          if (loadedData[i].house != undefined){
            listData.push(loadedData[i].house);
          };
          this.setState({
            houseList: listData
          });
          console.log(this.state.houseList);
        };
      });
  }

  debug = () => {
    this.setState({objects: this.state.listObjects[0]});
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
    return (
      <>
        <div className='Explore-container'>
        {this.state.panel === 'gallery' ? (
        <Gallery
          houseList = {this.state.houseList}
          house = {this.state.house}
          setHouse = {(house) => this.setHouse(house)}
          loadGallery = {this.loadUserContent}
        />
          ):
        
        this.state.panel === 'view' ? (
        <Create
          userId={this.props.userId}
          room={this.state.currentRoom}
          dragMoveListener={this.props.dragMoveListener}
          editRoom={(room) => this.editRoom(room)}
          saveHouse={this.saveHouse}
          keyCounter={this.state.keyCounter}
          updateKeyCounter={(value) => this.updateKeyCounter(value)}
          editable={false}
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

        (<div>Error</div>)
        }
        <button className='Build-button' onClick={() => this.setPanel('gallery')}>Gallery</button>
        <button className='Build-button' onClick={() => this.setPanel('housemap')}>House Map</button>
        <button className='Build-button' onClick={() => this.setPanel('view')}>View</button>
        </div>
      </>
    );
  }
}

export default Explore;
