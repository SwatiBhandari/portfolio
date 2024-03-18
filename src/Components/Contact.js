import {React, useRef} from 'react'
import emailjs from '@emailjs/browser';
import Footer from './Footer'
import './Footer.css'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1ymkw1p', 'template_6p4bysy', form.current, {
        publicKey: 'jhHBl1k1WiThcLcyK',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Successfuly sent!");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='Contact'>
        <h2 className='Contact_title'>Contact<span>Me</span></h2>
        <form ref={form} className='form'>
            <div className='input_box'>
                <input 
                type='text'
                name='user_name' 
                placeholder='Full Name'
                required/>
                <input 
                type='email'
                name='user_email' 
                placeholder='Email Address'
                required/>
            </div>
            <div className='input_box2'>
                <input 
                type='text' 
                placeholder='Subject'
                name='subject'
                required/>
            </div>
            <textarea 
            cols={30} 
            rows={9} 
            placeholder='Your Message'
            name='message'
            required/>
            <input onClick={sendEmail} className='submit_btn' type='submit' value='Send Message'/>
        </form>
        <Footer/>
    </div>
  )
}

export default Contact
