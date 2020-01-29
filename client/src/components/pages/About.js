import React, { Component } from "react";
import "./About.css";
import "../../utilities.css";

class About extends Component {
  constructor(props) {
    super(props);
  }

render() {
    return (
    <>
    <div className='About-title'>Talk to Us</div>
    
 <div className="row">

  <div className="column">
    <div className="card">

      <div className="container u-textCenter">
        <h2 className='u-bold'>Ian Lee</h2>
        <p><i>Co-founder, duh</i></p>
        <p>Course 1, 6</p>
        <p>ianl@mit.edu</p>
        <p><button className="button">Own</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <div className="container u-textCenter">
      <h2 className='u-bold'>Hizami Anuar</h2>
        <p><i>Lead Engineer, Co-founder</i></p>
        <p>Course 18-C</p>
        <p>hizami@mit.edu</p>
        <p><button className="button">Your</button></p>
      </div>
    </div>
  </div>

  <div className="column u-textCenter">
    <div className="card">

      <div className="container">
      <h2 className='u-bold'>Umang Bansal</h2>
        <p><i>Unpaid Intern, Co-founder</i></p>
        <p>Course 6, 15</p>
        <p>umang@mit.edu</p>
        <p><button className="button">Memory</button></p>
      </div>
    </div>
  </div>
</div> 
    </>
    );
  }
}

export default About;
