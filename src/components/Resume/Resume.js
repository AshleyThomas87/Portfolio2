import React, { Component } from 'react';
import PDF from './resume.pdf';
import './resumestyle.css';

class Resume extends Component {
    render () {
    return (
      <section className="resumeheader">
        <h4 className="resumetitle">Resume</h4>
        <p><a href = {PDF} rel="noreferrer noopener" target="_blank">Click for PDF</a></p>
    </section>
  
  );
    }
  }
  
  export default Resume;