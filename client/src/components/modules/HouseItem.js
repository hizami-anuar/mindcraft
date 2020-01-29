import React, { Component } from "react";

import './HouseItem.css'

class HouseItem extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  setHouse = () => {
    this.props.setHouse(this.props.house);
  }

  render() {
    return(
      <>
        {this.props.house === this.props.currentHouse ? (
          <div className='HouseItem-selectedHolder' onClick={this.setHouse}>
            <img className='HouseItem-image' src={this.props.image} />
          </div>
        ) : (
          <div className='HouseItem-holder' onClick={this.setHouse}>
            <img className='HouseItem-image' src={this.props.image} />
          </div>
        )
        }
      </>
    )
  }
}

export default HouseItem;