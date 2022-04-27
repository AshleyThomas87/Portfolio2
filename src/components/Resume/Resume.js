import React, { Component } from 'react';
import PDF from './resume.pdf';
import ashleypic from '..//..//images/ashleypic.jpeg';
import './resumestyle.css';

class Resume extends Component {
    render () {
    return (
      <section>

        <div className="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src={ashleypic} />
              </div>
              <div className="nine columns main-col">
                <h2>Work with Me</h2>
                <p>I am open to full-time, part-time, and project-based opportunities in web design, print materials, graphic arts, and content creation. 
                </p>

              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						        <span>Ashley Thomas</span><br />
						        <span>3527 E Winchcomb Dr<br />
						         Phoenix, AZ 85032
                    </span><br />
						        <span>(602) 338-1989</span><br />
                    <span className="emaillink" onClick={() => window.location = 'mailto:amthomas8710@gmail.com'}>amthomas8710@gmail.com</span>
					        </p>
                </div>

               <div className="columns download">
                  <p>
                     <a href={PDF} rel="noreferrer noopener" target="_blank" className="resumebutton"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
              </div> 
            </div> 
          </div>
        </div>

        <div className="resume">
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Persevere</h3>
                  <p className="info">Full Stack Web Development Certificate<span>&bull;</span> <em className="date">January 2020 - January 2021</em>
                  </p>
                  <p>
                  Intensive individual and group project-based learning program in which I learned full-stack web development.
                  </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>Rio Salado College</h3>
                <p className="info">Graphic Arts and Computer Tech Certification <span>&bull;</span> <em className="date">September 2012 - 2014</em></p>
                <p>
                  Developed skills in web and print graphic design through a variety of mediums and formats. 
                </p>
              </div>
            </div> 

            <div className="row item">
              <div className="twelve columns">
                <h3>Collins College</h3>
                <p className="info">Visual Communication - Associates Degree <span>&bull;</span> <em className="date">January 2006-2007</em></p>
                <p>
                  Completed projects in graphic design, art direction, production art, and user experience design. 
                </p>
              </div>
            </div>

          </div> 
        </div> 

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Banyan Labs</h3>
                <p className="info">Web Developer <span>&bull;</span> <em className="date">January 2021 - November 2021</em></p>

                <p>
                Collaborated with the website development team to complete custom client projects including full stack development, front end web design, and WordPress sites.
                </p>

               </div>
            </div> 
            <div className="row item">
              <div className="twelve columns">
                <h3>Physical Plant</h3>
                  <p className="info"> Construction Crew <span>&bull;</span> <em className="date">March 2018 - September 2019</em></p>
                  <p>
                  Worked in team environment on construction projects including Cement, Stucco, Plastering, Synthetic Finishing, Carpentry, Fencing, Welding, Epoxy, Construction, Plumbing, Electrical, and HVAC
                  </p>
              </div>
            </div> 

            <div className="row item">
              <div className="twelve columns">
                <h3>ACI Print Shop</h3>
                  <p className="info"> Bindery, M-Press, Super Web <span>&bull;</span> <em className="date">October 2012 - October 2015</em></p>
                  <p>
                  Transitioned between bindery, impress, and Superweb to fulfill custom print orders for various government and commercial agencies.
                  </p>
              </div>
            </div> 

          </div> 
        </div> 

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">
          <p>TECHNICAL SKILLS: HTML 5, CSS, Basic, JavaScript, ES6, React, WordPress, Scrum Master, Node, Photoshop, Illustrator, InDesign, Quark Xpress, Photography
          </p>
          <p>ADDITIONAL SKILLS: Conflict Resolution, Adaptability, Resourcefulness, Survivalist, Protector, Tenacity, Problem Solver, Leader, Team Player, Focus, Determination, Perseverance, Strong Work Ethic
          </p>
        </div> 
      </div>
    </div>
  </section>
  
  );
    }
  }
  
  export default Resume;