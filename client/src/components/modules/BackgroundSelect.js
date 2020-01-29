import React, { Component } from "react";

import BackgroundItem from './BackgroundItem.js'

import './BackgroundSelect.css'

class BackgroundSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      roomType: 'bathroom', // Bathroom, Bedroom, Kitchen, LivingRoom, Office
      roomDict: {
        'bathroom': 7,
        'bedroom': 10,
        'kitchen': 8,
        'livingroom': 8,
        'office': 6,
      },
    }
  }

  setType = (type) => {
    this.setState({roomType: type});
    console.log(this.state.roomType);
  }

  render() {
    return(
      <>
        <div className="BackgroundSelect-container">
        Select a background.
          <button className='BackgroundSelect-button' onClick={() => this.setType('bathroom')}>Bathroom</button>
          <button className='BackgroundSelect-button' onClick={() => this.setType('bedroom')}>Bedroom</button>
          <button className='BackgroundSelect-button' onClick={() => this.setType('kitchen')}>Kitchen</button>
          <button className='BackgroundSelect-button' onClick={() => this.setType('livingroom')}>Living Room</button>
          <button className='BackgroundSelect-button' onClick={() => this.setType('office')}>Office</button>
          <div className="BackgroundSelect-gallery">
          {[...Array(this.state.roomDict[this.state.roomType]).keys()].map((value, index) => (
              <BackgroundItem
              key = {`backgroundImage-${index}`}  
              image = {'./backgrounds/' + this.state.roomType + '/' + index.toString() + '.jpg'}
              background = {this.props.background}
              setBackground = {(background) => this.props.setBackground(background)}
              />
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default BackgroundSelect;