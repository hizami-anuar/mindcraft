import React, { Component } from "react";

class Object extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log(this.props.imageURL);
    // document.getElementById('objectImage').src=this.props.imageURL;
    return (
      <>
        <img id='objectImage' className='resize-drag' src={this.props.imageURL}></img>
      </>
    );
  }
}

export default Object;
