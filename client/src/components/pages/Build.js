import React, { Component } from "react";

import Create from './Create.js'
import BackgroundSelect from '../modules/BackgroundSelect.js'

class Build extends Component {
  constructor(props){
    super(props);
    this.state = {
      background: './backgrounds/bathroom/Bathroom1.jpg',
      panel: 'create',
    }
  }

  setPanelCreate = () => {
    this.setState({panel: 'create'});
  }

  setPanelBackgroundSelect = () => {
    this.setState({panel: 'backgroundselect'});
  }

  setBackground = (background) => {
    this.setState({background: background});
  }

  render() {
    return(
      <>
        <div>
        {
        this.state.panel === 'create' ? (
        <Create
          background = {this.state.background}
        />
        ) : (
        <BackgroundSelect
          setBackground = {(background) => this.setBackground(background)}
        />
        )
        }
        <button onClick={this.setPanelCreate}>Create</button>
        <button onClick={this.setPanelBackgroundSelect}>BackgroundSelect</button>
        </div>
      </>
    )
  }
}

export default Build;