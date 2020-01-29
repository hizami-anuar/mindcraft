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
        <h2>Ian Lee</h2>
        <p class="title">CEO &amp; Co-founder</p>
        <p>First year student at MIT</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">

      <div class="container">
        <h2>Hizami Anuar</h2>
        <p class="title">Lead Engineer &amp; Co-founder</p>
        <p>First year student at MIT</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">

      <div class="container">
        <h2>Umang Bansal</h2>
        <p class="title">Unpaid Intern &amp; Co-founder</p>
        <p>First year student at MIT</p>
      </div>
    </div>
  </div>
</div> 
    </>
    );
  }
}

export default About;
