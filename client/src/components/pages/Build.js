import React, { Component } from "react";

import Create from './Create.js'
import BackgroundSelect from '../modules/BackgroundSelect.js'
import HouseMap from '../modules/HouseMap.js'

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
      panel: 'create',
    }
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

  render() {
    return(
      <>
        <div>
        {
        this.state.panel === 'create' ? (
        <Create
          userId={this.props.userId}
          room={this.state.currentRoom}
          dragMoveListener={this.props.dragMoveListener}
          editRoom={(room) => this.editRoom(room)}
        />
        ) : 
        
        this.state.panel === 'backgroundselect' ?
        (
        <BackgroundSelect
          setBackground = {(background) => this.setBackground(background)}
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
        <button onClick={() => this.setPanel('create')}>Create</button>
        <button onClick={() => this.setPanel('backgroundselect')}>BackgroundSelect</button>
        <button onClick={() => this.setPanel('housemap')}>HouseMap</button>
        <button onClick={() => this.setPanel('error')}>Error</button>
        </div>
      </>
    )
  }
}

export default Build;