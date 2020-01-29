import React, { Component } from "react";

import HouseItem from './HouseItem.js'

import './BackgroundSelect.css'

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  componentDidMount () {
    this.props.loadGallery();
  }

  setType = (type) => {
    this.setState({roomType: type});
    console.log(this.state.roomType);
  }

  render() {
    return(
      <>
        <div className="BackgroundSelect-container">
        Select a house.
          <div className="BackgroundSelect-gallery">
          {this.props.houseList.map((value, index) => (
              <HouseItem
              key = {`house-${index}`}  
              image = {'https://png.pngtree.com/png-vector/20191119/ourlarge/pngtree-house-vector-illustration-isolated-on-white-background-house-cartoon-house-clip-png-image_1992829.jpg'}
              house = {this.props.houseList[index]}
              setHouse = {(house) => this.props.setHouse(house)}
              currentHouse = {this.props.house}
              />
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Gallery;