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
  }

  saveChanges = () => {
    const newValue = document.getElementById("ObjectWindow-notesInput").value;
    console.log("New Notes");
    this.props.editObjectValue('notes', newValue);
    this.setState({ notesEdit: false });
  }

  enableImageEdit = () => {
    this.setState({ imageEdit: true })
  }

  saveImageChanges = () => {
    this.setState({ imageEdit: false });
    const newImage = document.getElementById("ObjectWindow-imageInput").value;
    console.log("New Image");
    console.log(Image);
    this.props.editObjectValue("image", newImage);
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
            <textarea id="ObjectWindow-imageInput" defaultValue={this.props.currentObject.notes}/>
            <button onClick={this.saveImageChanges}>Save Changes</button>
          </div>
        ) : (
          <div>
            <img className="ObjectWindow-imageDisplay" src={this.props.currentObject.image}/>
            <button onClick={this.enableImageEdit}>Edit</button>
          </div>
        )}

        {this.state.notesEdit ? (
          <div>
            <textarea id="ObjectWindow-notesInput" className="ObjectWindow-notesInput" defaultValue={this.props.currentObject.notes}/>
            <button onClick={this.saveChanges}>Save Changes</button>
          </div>
        ) : (
          <div>
            <div className="ObjectWindow-notesDisplay">{this.props.currentObject.notes}</div>
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