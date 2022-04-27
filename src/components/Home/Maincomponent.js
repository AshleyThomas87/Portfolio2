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
      <p className="main-p">I am a freelance front end web developer and graphic designer based out of Phoenix, Arizona. I am available for both ongoing and one-time opportunities in web design and print. In my free time I enjoy gardening and spending time with my family and pets.</p>
      <p className="main-p"> I look forward to working with you on your next project!</p>
      </div>
      <div className="buttoncontainer">
        <button onClick={() => window.location = '/contact'}className="homebutton">Get in Touch</button>
      </div>
  </div>
  
  );
    }
  }
  
  export default Card;