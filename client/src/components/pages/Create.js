import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import interact from 'interactjs'

import "../../utilities.css";
import "./Create.css";

class Create extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      position: 20,
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    interact('.draggable')
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            restrict: {
                restriction: "parent",
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            // enable autoScroll
            autoScroll: true,

            onstart: function (event) {
                console.log('onstart');

            },

            // call this function on every dragmove event
            onmove: dragMoveListener,
            // call this function on every dragend event
            onend: function (event) {
                console.log('onend');
                // var textEl = event.target.querySelector('p');

                // textEl && (textEl.textContent =
                //    'moved a distance of '
                //    + (Math.sqrt(event.dx * event.dx +
                //        event.dy * event.dy)|0) + 'px');
            }
        });

    function dragMoveListener (event) {
        console.log('dragMoveListener');
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
    return (
      <>
        <div id="demo">
        <div id="drag-1" class="draggable">
            <p> Drag </p>
        </div>
        <div id="drag-2" class="draggable">
            <p> These </p>
        </div>
    </div>
      </>
    );
  }
}

export default Create;
