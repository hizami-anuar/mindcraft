import React, { Component } from "react";

import "./ObjectWindow.css";

class ObjectWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      notesEdit: false,
      imageEdit: false,
    }
  }

  enableEdit = () => {
    this.setState({ notesEdit: true })
    // document.getElementById("ObjectWindow-notes").readOnly=false;
  }

  saveChanges = () => {
    const newValue = document.getElementById("ObjectWindow-notes").value;
    console.log("New Notes");
    this.props.editObjectValue('notes', newValue);
    this.setState({ notesEdit: false });
    // document.getElementById("ObjectWindow-notes").readOnly=true;
  }

  enableImageEdit = () => {
    this.setState({ imageEdit: true })
    // document.getElementById("ObjectWindow-notes").readOnly=false;
  }

  saveImageChanges = () => {
    this.setState({ imageEdit: false });
    const newImage = document.getElementById("ObjectWindow-image").value;
    console.log("New Image");
    console.log(Image);
    this.props.editObjectValue("image", newImage);
    // document.getElementById("ObjectWindow-notes").readOnly=true;
  }

  textChange = () => {
    console.log("TEXT CHANGED");
  }

  componentDidMount() {
  }

  render() {
    return(
      <>
      {this.props.currentObject ? (
      <div className="ObjectWindow-container">
        {this.state.imageEdit ? (
          <div>
            <input id="ObjectWindow-image" defaultValue={this.props.currentObject.notes}/>
            <button onClick={this.saveImageChanges}>Save Changes</button>
          </div>
        ) : (
          <div>
            <img className="ObjectWindow-image" src={this.props.currentObject.image}/>
            <button onClick={this.enableImageEdit}>Edit</button>
          </div>
        )}
        


        {this.state.notesEdit ? (
          <div>
            <input id="ObjectWindow-notes" defaultValue={this.props.currentObject.notes}/>
            <button onClick={this.saveChanges}>Save Changes</button>
          </div>
        ) : (
          <div>
            <div>{this.props.currentObject.notes}</div>
            <button onClick={this.enableEdit}>Edit</button>
          </div>
        )}
        
        <button onClick={this.props.deleteObject}>Delete</button>
      </div>
      ) : ( null )}
      </>
    );
  }
}

export default ObjectWindow;