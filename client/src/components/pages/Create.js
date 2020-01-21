import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import interact from 'interactjs'
import Object from "../modules/Object.js";
import importMovement from "../modules/Movement.js";

import "../../utilities.css";
import "./Create.css";
import { redirectTo } from "@reach/router";
import { get } from "mongoose";

/**
class Create extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      objects: [
        {id: 1, image: 'https://images-na.ssl-images-amazon.com/images/I/319J7YpfyNL.jpg'},
        {id: 2, image: 'https://images-na.ssl-images-amazon.com/images/I/21DejQuoT2L.jpg'},
        {id: 3, image: 'https://images-na.ssl-images-amazon.com/images/I/71ogcdh7YjL._AC_SY450_.jpg'},
      ],
      value: 4,
    };
  }

  componentDidMount() {
    importMovement();
    // remember -- api calls go here!
  }

  createObject = () => {
    const inputImage = 'https://images-na.ssl-images-amazon.com/images/I/319J7YpfyNL.jpg';
    const objectsList = this.state.objects;
    const newObjects = objectsList.concat([{id: this.state.value, image: inputImage}]);
    console.log('success');
    this.setState({objects: newObjects});
    const newValue = this.state.value + 1;
    this.setState({ value: newValue }).then(console.log);
    console.log(this.state.value);
    console.log(this.state.objects);
  };

  

  render() {
    return (
      <>
        <div className="Create-container">
          {this.state.objects.map(item => (
            <Object 
              imageURL = {item.image}
            />
          ))}
        </div>
        <div className="Create-add" onClick={this.createObject}>Test</div>
      </>
    );
  }
}

export default Create;
*/

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [],
      inputText: ""
    };

    this.keyCounter = 0;
  }

  componentDidMount() {
    importMovement();
    get("/api/room", {creator_Id: this.props.userId}).then((data) => {
      this.setState({
        objects: data.numbers
      });
    });
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      inputText: value
    });
  };

  createObject = () => {
    const { objects, inputText } = this.state;
    const newObjects = objects.concat([{ image: inputText, key: this.keyCounter }]);
    this.keyCounter++;

    this.setState({
      objects: newObjects,
      inputText: ""
    });
  };

  deleteTodo = key => {
    const { objects } = this.state;
    const newObjects = objects.filter(item => item.key !== key);
    this.setState({ objects: newObjects });
  };

  render() {
    return (
      <>
      <div className="Create-container">
        {this.state.objects.map(item => (
          <Object 
            key = {`listItem-${item.key}`}
            imageURL = {item.image}
            //deleteTodo={() => this.deleteTodo(item.key)}
          />
        ))}
      </div>
      <div>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.createObject}>Upload</button>
      </div>
      </>
    );
  }
}

export default Create;
