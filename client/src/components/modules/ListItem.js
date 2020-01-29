import React, { Component } from "react";

import './ListItem.css'

class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  setBackground = () => {
    this.props.setBackground(this.props.image);
  }

  render() {
    return(
      <>
        <div className='ListItem-holder'>
          <div className='ListItem-number'>{this.props.index}</div>
          <img className='ListItem-image' src={this.props.image} />
          <div className='ListItem-name'>{this.props.name}</div>
        </div>
      </>
    )
  }
}

export default ListItem;