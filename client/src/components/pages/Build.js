import React, { Component } from "react";

import Create from './Create.js'
import BackgroundSelect from '../modules/BackgroundSelect.js'

class Build extends Component {
  constructor(props){
    super(props);
    this.state = {
      background: '',
      panel: 'create',
    }
  }

  setPanel = (type) => {
    this.setState({panel: type});
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
          userId={this.props.userId}
          background = {this.state.background}
          dragMoveListener={this.props.dragMoveListener}
        />
        ) : 
        this.state.panel === 'backgroundselect' ?
        (
        <BackgroundSelect
          setBackground = {(background) => this.setBackground(background)}
        />
        ) :
        (<div>Error</div>)
        }
        <button onClick={() => this.setPanel('create')}>Create</button>
        <button onClick={() => this.setPanel('backgroundselect')}>BackgroundSelect</button>
        <button onClick={() => this.setPanel('error')}>Error</button>
        </div>
      </>
    )
  }
}

export default Build;