import React, { Component } from "react";

import './BackgroundItem.css'

class BackgroundItem extends Component {
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
        {this.props.background === this.props.image ? (
          <div className='BackgroundItem-selectedHolder' onClick={this.setBackground}>
            <img className='BackgroundItem-image' src={this.props.image} />
          </div>
        ) : (
          <div className='BackgroundItem-holder' onClick={this.setBackground}>
            <img className='BackgroundItem-image' src={this.props.image} />
          </div>
        )
        }
      </>
    )
  }
}

export default BackgroundItem;