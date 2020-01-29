import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import interact from 'interactjs'
import Object from "../modules/Object.js";

import "../../utilities.css";
import "./Create.css";
import { redirectTo } from "@reach/router";
import { get } from "../../utilities";
import { post } from "../../utilities";

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listObjects: [[]],
        inputText: "",
        objects: [],
    };
  }

  componentDidMount(){

  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      inputText: value
    });
  };

  load = () => {
    console.log("loading");
    get("/api/roomname", {name: this.state.inputText}).then((data) => {
      let loadedData = data.slice(-1)[0];
      if (loadedData.numbers != undefined) {
        this.setState({
          listObjects: loadedData.numbers
        });
        //var newImg = new Image;
        //newImg.onload = function();
      };  
    });
  }
                                                            
  loadUserContent = () => {
    console.log("loading");
    if (this.props.userId != undefined) {
      console.log('loading more');
      get("/api/room", {creator_id: this.props.userId}).then((data) => {
        let loadedData = [];
        if (data.length >= 3){
          loadedData = data.slice(-3);
        } else {
          loadedData = data;
        };
        let listData = [];
        for (let i = 0; i < loadedData.length; i++){
          if (loadedData[i].numbers != undefined){
            listData.push(loadedData[i].numbers);
          };
          this.setState({
            listObjects: listData
          });
        };
      });
    };
  }

  debug = () => {
    this.setState({objects: this.state.listObjects[0]});
  }

  render() {
    return (
      <>
      <div className="Create-container">
      <div id="canvas" className="Create-canvas">
        {this.state.objects.map((item, index) => (
          <Object 
            index = {index}
            key = {`image-${item.key}`}
            objectId = {`num-${item.key}`}
            imageURL = {item.image}
            mode = {this.state.mode}
            x = {item.x} // + document.getElementById("canvas").getBoundingClientRect().left}
            y = {item.y} // + document.getElementById("canvas").getBoundingClientRect().top}
            deleteObject={() => this.deleteObject(item.key)}
            setCurrentObject={() => this.setCurrentObject(item.key)}
          />
        ))}
      </div>
      </div>
      <div className="searchBar">
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.loadUserContent}>Search</button>
        <button onClick={this.debug}>Debug</button>
      </div>
      </>
    );
  }
}

export default Share;
