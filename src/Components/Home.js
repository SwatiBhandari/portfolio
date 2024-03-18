import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter,faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import profile from '../img/profile.jpg'

function Home() {

    const pro={
        backgroundImage: `url(${profile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '20vw', // Adjust width as needed
        height: '20vw', // Adjust height as needed
        borderRadius: '50%', // Make it circular
    }

  return (
    <div className='home'>
        <div className='home_left'>
            <h3>Hi, Myself</h3>
            <h1>Swati Bhandari</h1>
            <h3>I'm a <span>Frontend Developer</span></h3>
            <p>with a knack for crafting captivating web experiences. 
                From elegant designs to seamless interactions, I'm dedicated to bringing designs to life through code!
            </p>
            <div className='social_media'>
                <a href='mailto:swatibhandari352@gmail.com' ><FontAwesomeIcon icon={faSquareEnvelope} /></a>
                <a href='https://www.instagram.com/swatibhandari352?igsh=MWo3dWI3MnVsb2Jmdg==' target='_blank'><FontAwesomeIcon icon={faSquareInstagram} /></a>
                <a href='https://www.linkedin.com/in/swatibhandari352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            <a className='download_resume' href=''>Resume</a>
        </div>
        <div className='home_right'>
            <div style={pro} className='profile_pic'></div>
        </div>
    </div>
  )
}

export default Home
