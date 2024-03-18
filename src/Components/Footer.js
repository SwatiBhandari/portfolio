import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='Footer'>
      
      <div className='back_home'>
        <Link to="/"><FontAwesomeIcon icon={faAngleUp} /></Link>
      </div>
    </div>
  )
}

export default Footer
