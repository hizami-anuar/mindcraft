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
     <div class="row">
  <div class="column">
    <div class="card">

      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">

      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">

      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div> 
    </>
    );
  }
}

export default About;
