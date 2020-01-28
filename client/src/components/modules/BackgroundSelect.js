import React, { Component } from "react";

import BackgroundItem from './BackgroundItem.js'

import './BackgroundSelect.css'

class BackgroundSelect extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <>
        <div className="BackgroundSelect-container">
        Select a background.
          <div className="BackgroundSelect-gallery">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <BackgroundItem
              key = {`backgroundImage-${index}`}  
              image = {`./backgrounds/bedroom/Bedroom${index}.jpg`}
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