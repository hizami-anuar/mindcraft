import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import interact from 'interactjs'
import Object from "../modules/Object.js";
import importMovement from "../modules/Movement.js";

import "../../utilities.css";
import "./Create.css";
import { redirectTo } from "@reach/router";
import { get } from "../../utilities";
import { post } from "../../utilities";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [],
      inputText: "",
    };

    this.keyCounter = 0;
  }

  componentDidMount() {
    importMovement();
    if(this.props.userId != undefined) {
    get("/api/room", {creator_id: this.props.userId}).then((data) => {
      console.log("DATA");
      console.log(data);
      if (data.numbers != undefined) {
        this.setState({
          objects: data.numbers
        });
      };
    });
    };
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
