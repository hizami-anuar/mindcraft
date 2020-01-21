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
    function dragMoveListener (event) {
      // console.log('dragMoveListener');
      var target = event.target,
          // keep the dragged position in the data-x/data-y attributes
          x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
          y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  
      // translate the element
      target.style.webkitTransform =
          target.style.transform =
              'translate(' + x + 'px, ' + y + 'px)';
  
      // update the position attributes
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
  
    window.dragMoveListener = dragMoveListener
    
    interact('.draggable')
      .draggable({
        inertia: false,
        // keep the element within the area of it's parent
        restrict: {
          restriction: "parent",
          endOnly: true,
          elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,
  
        onstart: function (event) {
          //console.log('onstart');
        },
        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
          //console.log('onend');
          let rect = event.target.getBoundingClientRect();
          let parent = document.getElementById("canvas");
          let rect0 = parent.getBoundingClientRect();
          let x = rect.left, y=rect.top;
          let x0 = rect0.left, y0=rect0.top;
          let dx = x-x0, dy=y-y0;
          //console.log(event.target.id.slice(4,));
          //console.log("x position is: " + (x-x0).toString());
          //console.log("y position is: " + (y-y0).toString());
          // dragEnd();
                  // var textEl = event.target.querySelector('p');
  
                  // textEl && (textEl.textContent =
                  //    'moved a distance of '
                  //    + (Math.sqrt(event.dx * event.dx +
                  //        event.dy * event.dy)|0) + 'px');
        }
      });
  
      interact('.resize-drag')
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },
    
        modifiers: [
          // keep the edges inside the parent
          interact.modifiers.restrictEdges({
            outer: 'parent'
          }),
    
          // minimum size
          interact.modifiers.restrictSize({
            min: { width: 50, height: 50 }
          })
        ],
    
        inertia: false
      })
      .draggable({
        onmove: window.dragMoveListener,
        inertia: false,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
          })
        ],
        onend: function(event) {
        let rect = event.target.getBoundingClientRect();
        let parent = document.getElementById("canvas");
        let rect0 = parent.getBoundingClientRect();
        let x = rect.left, y=rect.top;
        let x0 = rect0.left, y0=rect0.top;
        let dx = x-x0, dy=y-y0;
        }
      })
      .on('resizemove', function (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)
    
        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'
    
        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top
    
        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)'
    
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        // target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
      })
  }

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      inputText: value
    });
  };

  createObject = () => {
    const objects = this.state.objects;
    const inputText = this.state.inputText;
    const newObjects = objects.concat([{ image: inputText, key: this.keyCounter, x: 200, y: 200 }]);
    this.keyCounter++;

    this.setState({
      objects: newObjects,
      inputText: ""
    });

    console.log(this.state);
  };

  saveRoom = () => {
    const body = {
      name: "name",
      objects: this.state.objects,
      url: "https://image.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1498042211.jpg",
    }
    post("/api/room", body).then((res) => {
      console.log("Save successful!");
    });
  };

  save = () => {
    //console.log(this.state.objects);
    if(this.props.userId != undefined) {
    for(let i = 0; i < this.state.objects.length; i++) {
      let object = this.state.objects[i];
      //console.log(object);
      // const image = object.imagedocument.getElementById(`image-${object.key}`);
      //const canvas = document.getElementById(`canvas`);
      let child = document.getElementById(`num-${object.key}`);
      let rect = child.getBoundingClientRect();
      let parent = document.getElementById("canvas");
      let rect0 = parent.getBoundingClientRect();
      let x = rect.left, y=rect.top;
      let x0 = rect0.left, y0=rect0.top;
      let dx = x-x0, dy=y-y0;
      object['x'] = dx;
      object['y'] = dy;
    }
    //console.log(this.state.objects);
    this.saveRoom();
    }
  }

  load = () => {
    console.log("loading");
    console.log(this.props.userId);
    if(this.props.userId != undefined) {
      //console.log("retrieving");
      get("/api/room", {creator_id: this.props.userId}).then((data) => {
        //console.log("DATA");
        let loadedData = data.slice(-1)[0];
        if (loadedData.numbers != undefined) {
          this.setState({
            objects: loadedData.numbers
          });
        console.log(loadedData);
        };
      });
    };
  }

  deleteTodo = key => {
    const { objects } = this.state;
    const newObjects = objects.filter(item => item.key !== key);
    this.setState({ objects: newObjects });
  };

  render() {
    return (
      <>
      <div id="canvas" className="Create-container">
        {this.state.objects.map(item => (
          <Object 
            key = {`image-${item.key}`}
            objectId = {`num-${item.key}`}
            imageURL = {item.image}
            x = {item.x} // + document.getElementById("canvas").getBoundingClientRect().left}
            y = {item.y} // + document.getElementById("canvas").getBoundingClientRect().top}
            //deleteTodo={() => this.deleteTodo(item.key)}
          />
        ))}
      </div>
      <div className="uploadBar">
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputChange}
        />
        <button onClick={this.createObject}>Upload Image URL</button>
        <button onClick={this.save}>Save Layout</button>
        <button onClick={this.load}>Load Layout</button>
      </div>
      </>
    );
  }
}

export default Create;
