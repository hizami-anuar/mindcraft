import React, { Component } from "react";

import "./Instructions.css";

class Instructions extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
      <div className='Instructions-container'>
        <h1>Instructions</h1>
        <div className='Instructions-addRoom'>
          <h2>To add a room to your house:</h2>
          <p>
             Click on house map. Then, choose <q>Add new room</q>. Next, click on the new room you added. Click on <q>Background Select</q>. Then select the type of room you want to create (Bedroom, Kitchen, Office, etc.). Select an option from the default backgrounds for your room. Then, click on <q>Create</q>.
          </p>
        </div>
        <div className='Instructions-changeBackground'>
          <h2>To change the background of an existing room:</h2>
          <p>
            Click on house map. Then, choose the room whose background you want to change. Click on <q>Background Select</q>. Then, select the type of room you want to create (Bedroom, Kitchen, Office, etc.). Select an option from the default backgrounds for your room. Finally, click on <q>Create</q>. 
          </p>
        </div>
        <div className='Instructions-addObjects'>
          <h2>To add numbers and images to your room:</h2>
          <p>
            Enter the Image URL and click on <q>Upload Image URL</q>. To view the object as an image, select <q>Image</q>. Otherwise, select <q>Number</q>.
          </p>
        </div>
        <div className='Instructions-editObjects'>
          <h2>To edit objects in your room:</h2>
          <p>
            Click on the object you want to edit. Select <q>Object</q> in <q>Log</q>. Choose which fields to edit by clicking on their respective Edit buttons.
          </p>
        </div>
      </div>
      </>
    );
  }
  
}

export default Instructions;
