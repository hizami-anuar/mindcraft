import React, { Component } from "react";

class Object extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <img
          id={this.props.objectId}
          className='draggable'
          src={this.props.imageURL}
          style={{backgroundColor: 'black', left: this.props.x.toString()+'px', top: this.props.y.toString()+'px' }}
        ></img>
      </>
    );
  }
}

export default Object;
