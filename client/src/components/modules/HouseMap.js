import React, { Component } from "react";

import RoomItem from "./RoomItem.js"

class HouseMap extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentRoom: [],
    }
  }

  setCurrentRoom = (index) => {
    this.setState({currentRoom: this.props.house[index]});
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
        {this.props.house.map((value, index) => 
          <RoomItem 
            key = {`room-${index}`}
            room = {value}
            setCurrentRoom = {() => this.props.setCurrentRoom(index)}
          />
        )}
        <button>{this.props.currentRoom.title}</button>
        <button onClick={this.createRoom}>Add New Room</button>
      </>
    );
  }
}

export default HouseMap;