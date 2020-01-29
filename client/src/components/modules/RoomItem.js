import React, { Component } from "react";

import './RoomItem.css'

class RoomItem extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    console.log(this.props.index);
    return(
      <>
        {this.props.index == this.props.currentRoomIndex ? (
          <div className='RoomItem-selectedHolder' onClick={() => this.props.setCurrentRoom(this.props.index)}>
            <img className='RoomItem-image' src={this.props.room.background} />
          </div>
        ) : (
          <div className='RoomItem-holder' onClick={() => this.props.setCurrentRoom(this.props.index)}>
            <img className='RoomItem-image' src={this.props.room.background} />
          </div>
        )
        }
      </>
    );
  }
}

export default RoomItem;