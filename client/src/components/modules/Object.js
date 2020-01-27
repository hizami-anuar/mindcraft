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
        {this.props.mode ==='number' ? (
        <div
          id={this.props.objectId}
          className='draggable draggableNumber'
          src={this.props.imageURL}
          style={{left: this.props.x.toString()+'px', top: this.props.y.toString()+'px' }}
          onClick={this.props.setCurrentObject}
        >
          {this.props.index}
        </div>
        ) : (
        <img
          id={this.props.objectId}
          className='draggable draggableImage'
          src={this.props.imageURL}
          style={{left: this.props.x.toString()+'px', top: this.props.y.toString()+'px' }}
          onClick={this.props.setCurrentObject}
        />
        )}
      </>
    );
  }
}

export default Object;
