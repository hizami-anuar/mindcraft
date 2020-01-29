import React, { Component } from "react";

class Object extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draggableNumber: '',
      draggableImage: '',
    };
  }

  render() {
    let draggableNumber = '';
    let draggableImage = '';
    if (this.props.editable) {
      draggableNumber = 'draggable draggableNumber';
      draggableImage = 'draggable draggableImage';
    } else {
      draggableNumber = 'draggableNumber';
      draggableImage = 'draggableImage';
    };
    return (
      <>
        {this.props.mode ==='number' ? (
        <div
          id={this.props.objectId}
          className={draggableNumber}
          style={{left: this.props.x.toString()+'px', top: this.props.y.toString()+'px' }}
          onClick={this.props.setCurrentObject}
        >
          {this.props.index}
        </div>
        ) : (
        <img
          id={this.props.objectId}
          className={draggableImage}
          src={this.props.image}
          style={{left: this.props.x.toString()+'px', top: this.props.y.toString()+'px' }}
          onClick={this.props.setCurrentObject}
        />
        )}
      </>
    );
  }
}

export default Object;
