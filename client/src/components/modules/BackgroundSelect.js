import React, { Component } from "react";

import BackgroundItem from './BackgroundItem.js'

import './BackgroundSelect.css'

class BackgroundSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      roomType: 'Bathroom' // Bathroom, Bedroom, Kitchen, LivingRoom, Office
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
          <button onClick={() => this.setType('Bathroom')}>Bathroom</button>
          <button onClick={() => this.setType('Bedroom')}>Bedroom</button>
          <button onClick={() => this.setType('Kitchen')}>Kitchen</button>
          <button onClick={() => this.setType('LivingRoom')}>Living Room</button>
          <button onClick={() => this.setType('Office')}>Office</button>
          <div className="BackgroundSelect-gallery">
            {[1, 2, 3, 4, 5, 6].map((value, index) => (
              <BackgroundItem
              key = {`backgroundImage-${index}`}  
              image = {'./backgrounds/' + 'bathroom' + '/' + this.state.roomType + value.toString() + '.jpg'}
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