import React, { Component } from 'react';
import project1 from '..//..//images/quoteproject.jpg';
import project2 from '..//..//images/drummachine.jpeg';
import project3 from '..//..//images/tourist.jpeg';
import portfoliobackground from '../../images/portfoliobackground5.jpeg'
import './portfoliostyle.css'

class Cards extends Component {
    render () {
    return (
  <div className="portfolio-container" style={{backgroundImage: `url(${portfoliobackground})`}}>
      <ul className="card-wrapper">
        <li className="portfolio-card">
          <img src={project1} />
          <h3>Random Quote Generator</h3>
          <p>Webdev course group project using HTML, CSS, and JavaScript to generate inspirational quotes.</p>
          <a href="https://mellifluous-caramel-2c4a84.netlify.app/" rel="noreferrer noopener" target="_blank" className="portfolio-button">Visit Site</a> <br />
          <a href="https://github.com/AshleyThomas87/Quotes" rel="noreferrer noopener" target="_blank" className="portfolio-button">Github Repository</a>
        </li>
        <li className="portfolio-card">
          <img src={project2} />
          <h3>Drum Machine</h3>
          <p>Webdev course project using HTML, CSS, and JavaScript to create a working drum machine. Users can use their keyboard or mouse to operate the machine.</p>
          <a href="https://clinquant-valkyrie-73c1ef.netlify.app/" rel="noreferrer noopener" target="_blank" className="portfolio-button">Visit Site</a> <br />
          <a href="https://github.com/AshleyThomas87/DrumMachine" rel="noreferrer noopener" target="_blank" className="portfolio-button">Github Repository</a>
        </li>
        <li className="portfolio-card">
          <img src={project3} />
          <h3>Travel Blog</h3>
          <p>Individual project through Udacity's Webdev program using HTML and CSS and focused on content creation and design.</p>
          <a href="https://sprightly-paletas-ab603a.netlify.app/" rel="noreferrer noopener" target="_blank" className="portfolio-button">Visit Site</a> <br />
          <a href="https://github.com/AshleyThomas87/blogpost" rel="noreferrer noopener" target="_blank" className="portfolio-button">Github Repository</a>
        </li>
      </ul>
    </div>
  
  );
    }
  }
  
  export default Cards;