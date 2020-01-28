import React, { Component } from "react";

import './BackgroundItem.css'

class BackgroundItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  }

  render() {
    return(
      <>
        <div className='BackgroundItem-holder'>
          <img className='BackgroundItem-image' src={this.props.image} />
        </div>
      </>
    )
  }
}

export default BackgroundItem;