import React, { Component } from "react";

import './RoomItem.css'

class RoomItem extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <>
        <img className='RoomItem-holder' src={this.props.room.background} onClick={this.props.setCurrentRoom}/>
      </>
    );
  }
}

export default RoomItem;