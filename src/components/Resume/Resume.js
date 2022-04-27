import React, { Component } from 'react';
import PDF from './resume.pdf';
import placeholder from '..//..//images/quoteproject.jpg';
import './resumestyle.css';

class Resume extends Component {
    render () {
    return (
      <section>

        <div className="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src={placeholder} />
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
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">

            <div className="row item">

               <div className="twelve columns">

                  <h3>University of Life</h3>
                  <p className="info">Master in Graphic Design <span>&bull;</span> <em className="date">April 2007</em></p>

                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                  </p>

               </div>

            </div>

            <div className="row item">

               <div className="twelve columns">

                  <h3>School of Cool Designers</h3>
                  <p className="info">B.A. Degree in Graphic Design <span>&bull;</span> <em className="date">March 2003</em></p>

                  <p>
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                  ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                  </p>

               </div>

            </div> 

         </div> 

      </div> 


      
      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">

            <div className="row item">

               <div className="twelve columns">

                  <h3>Awesome Design Studio</h3>
                  <p className="info">Senior UX Designer <span>&bull;</span> <em className="date">March 2010 - Present</em></p>

                  <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                  ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                  Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                  </p>

               </div>

            </div> 

            <div className="row item">

               <div className="twelve columns">

                  <h3>Super Cool Studio</h3>
                  <p className="info">UX Designer <span>&bull;</span> <em className="date">March 2007 - February 2010</em></p>

                  <p>
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                  ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
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

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
            </p>

			</div> 

      </div>
  </div>

   </section>
  
  );
    }
  }
  
  export default Resume;