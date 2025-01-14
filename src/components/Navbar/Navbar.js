import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './style.css';


class Nav extends Component {
    render () {
    return (
      <section style={{backgroundColor:"black"}}>
          <div>
              <ul>
                  <NavLink exact to="/" activeStyle={{fontWeight: "800", fontStyle:"oblique"}}><li>Home</li></NavLink>
                  <NavLink exact to="/contact" activeStyle={{fontWeight: "800", fontStyle:"oblique"}}><li>Contact</li></NavLink>
                  <NavLink exact to="/portfolio" activeStyle={{fontWeight: "800", fontStyle:"oblique"}}><li>Web Portfolio</li>
                  </NavLink>
                  <NavLink exact to="/print" activeStyle={{fontWeight: "800", fontStyle:"oblique"}}><li>Print Portfolio</li>
                  </NavLink>
                <NavLink exact to="/resume" activeStyle={{fontWeight: "800", fontStyle:"oblique"}}><li>Resume</li></NavLink>
            </ul>
      </div>
    </section>
  );
  }
}

export default Nav;