import React from 'react'
import profile from '../img/profile.jpg'

function About() {

    const pro1={
        backgroundImage: `url(${profile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '30vw', // Adjust width as needed
        height: '30vw', // Adjust height as needed
        borderRadius: '10%', // Make it circular
    }

  return (
    <div className='about'>
      <div className='about_left'>
        <div style={pro1} className='about_pic'></div>
      </div>
      <div className='about_right'>
        <h2 className='about_title'>About<span>Me</span></h2>
        <h3 className='about_title_2'>Frontend Developer</h3>
        <p className='about_description'>Aspiring front-end developer with a passion for creating engaging and user-friendly websites.
        With a solid foundation in HTML, CSS, JavaScript and React-js.
        Eager to apply my skills and learn new technologies in a dynamic team environment.
        Detail-oriented and committed to delivering high-quality, visually appealing web solutions.
        Ready to contribute fresh ideas and a strong work ethic to innovative projects.</p>
       
      </div>
    </div>
  )
}

export default About
