import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import interact from 'interactjs'
import Object from "../modules/Object.js";
import importMovement from "../modules/Movement.js";

import "../../utilities.css";
import "./Create.css";
import { redirectTo } from "@reach/router";

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
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    importMovement();

    return (
      <>
        <div className="Create-container">
          {this.state.objects.map(item => (
            <Object 
              imageURL = {item.image}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Create;
