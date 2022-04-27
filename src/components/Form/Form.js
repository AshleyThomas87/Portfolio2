import React, { Component } from 'react';
import './formstyle.css';

class Form extends Component {
    render () {
    return (
  <div>
    <div className="formheader">
      <h2 className="formheadertext">Let's connect!</h2>
    </div>
    <form 
      method='POST' 
      name='contactform' 
      data-netlify="true"
      className='contactForm'>

      <input 
      type='hidden' 
      name='form-name'
      value='contactForm' />

      <input 
        type='text' 
        name='name' 
        placeholder='Enter your name' />

      <input 
        type='email' 
        name='email' 
        placeholder='Enter your email' />

      <textarea 
        name='message' 
        placeholder='Message'></textarea>

      <button type='submit'>Submit</button>

    </form>
  </div>
  
  );
    }
  }
  
  export default Form;