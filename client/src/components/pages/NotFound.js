import React, { Component } from "react";
import "./Skeleton.css";

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br></br>   <br></br>
        <h1><center>404 Not Found</center></h1>
        <div><center>The page you requested couldn't be found.</center></div>
        <br></br>  <br></br> <br></br> 
        <center><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgftUSNybmf4l_YYfbDzQoxVfMdZL5Yxvd4hYVY6CB3H6PtV3kTw&s"></img></center>
      </div>
    );
  }
}

export default NotFound;
