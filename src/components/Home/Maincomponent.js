import React, { Component } from 'react';
import background from "../../images/bgblueblack.jpg";
import './style.css';

class Card extends Component {
    render () {
    return (
  <div className="container" style={{backgroundImage: `url(${background})`}}>
    <div className="header">
      <h1>Hello</h1>
    </div>
    <div className="description">
      <p className="main-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <div className="buttoncontainer">
        <button className="homebutton">Get in Touch</button>
      </div>
  </div>
  
  );
    }
  }
  
  export default Card;