import React, { Component } from "react";

import RoomItem from "./RoomItem.js"

class HouseMap extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  createRoom = () => {
    let newHouse = this.props.house;
    newHouse.push({
      title: 'this is a room',
      background: './backgrounds/bathroom/0.jpg',
      objects: [],
    });
    console.log(newHouse);
    this.props.setHouse(newHouse);
  }

  render() {
    return(
      <>
        <div className='HouseMap-container'>
          <div className='HouseMap-toolBar'>
            <button className='Build-button' onClick={this.createRoom}>Add New Room</button>
          </div>
          <div className='HouseMap-body'>
            {this.props.house.map((value, index) => 
              <RoomItem 
                key = {`room-${index}`}
                room = {value}
                index = {index}
                setCurrentRoom = {() => this.props.setCurrentRoom(index)}
                currentRoom = {this.props.currentRoom}
                currentRoomIndex = {this.props.currentRoomIndex}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default HouseMap;