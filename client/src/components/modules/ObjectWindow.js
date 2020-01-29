import React, { Component } from "react";

import "./ObjectWindow.css";

class ObjectWindow extends Component {
  constructor(props){
    super(props);
    this.state = {
      notesEdit: false,
      imageEdit: false,
      nameEdit: false,
    }
  }

  enableNameEdit = () => {
    this.setState({ nameEdit: true })
  }

  saveNameChanges = (value) => {
    const newValue = document.getElementById('ObjectWindow-nameInput').value;
    this.props.editObjectValue('name', newValue);
    this.setState({ nameEdit: false });
  }

  enableImageEdit = () => {
    this.setState({ imageEdit: true })
  }

  saveImageChanges = () => {
    const newImage = document.getElementById("ObjectWindow-imageInput").value;
    this.props.editObjectValue("image", newImage);
    this.setState({ imageEdit: false });
  }

  enableNotesEdit = () => {
    this.setState({ notesEdit: true })
  }

  saveNotesChanges = (value) => {
    const newValue = document.getElementById('ObjectWindow-notesInput').value;
    this.props.editObjectValue('notes', newValue);
    this.setState({ notesEdit: false });
  }

  componentDidMount() {
  }

  render() {
    return(
      <>
      {this.props.currentObject ? (
      <div className="ObjectWindow-container">
        
        {this.state.nameEdit ? (
          <div>
            <textarea id="ObjectWindow-nameInput" defaultValue={this.props.currentObject.name}/>
            <button onClick={this.saveNameChanges}>Save Changes</button>
          </div>
        ) : (
          <div>
            <div>
              <div className="ObjectWindow-nameDisplay">{this.props.currentObject.name}</div>
              <button className="ObjectWindow-editButton" onClick={this.enableNameEdit}>Edit Name</button>
          </div>
          </div>
        )}
        
        {this.state.imageEdit ? (
          <div>
            <textarea id="ObjectWindow-imageInput" defaultValue={this.props.currentObject.image}/>
            <button onClick={this.saveImageChanges}>Save Changes</button>
          </div>
        ) : (
          <div>
            <img className="ObjectWindow-imageDisplay" src={this.props.currentObject.image}/>
            <button className="ObjectWindow-editButton" onClick={this.enableImageEdit}>Edit Image</button>
          </div>
        )}

        {this.state.notesEdit ? (
          <div>
            <textarea id="ObjectWindow-notesInput" className="ObjectWindow-notesInput" defaultValue={this.props.currentObject.notes}/>
            <button onClick={this.saveNotesChanges}>Save Changes</button>
          </div>
        ) : (
          <div>
            <div className="ObjectWindow-notesDisplay">{this.props.currentObject.notes}</div>
            <button className="ObjectWindow-editButton" onClick={this.enableNotesEdit}>Edit Notes</button>
          </div>
        )}
        
        <button className="ObjectWindow-deleteButton" onClick={this.props.deleteObject}>Delete Object</button>
      </div>
      ) : ( null )}
      </>
    );
  }
}

export default ObjectWindow;
