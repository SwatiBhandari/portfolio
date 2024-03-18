import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project_item({pic,title,desc,git_address,site_address}) {
  return (
    <div className='portfolio_container'>
        <div className='portfolio_box'>
            <img src={pic} />
            <div className='portfolio_layer'>
                <h4>{title}</h4>
                <p>{desc}</p>
                <div className='link_div'>
                    <a href={git_address} target='_blank'>
                        <FontAwesomeIcon className='pro' icon={faGithub} />
                    </a>
                    <a href={site_address} target='_blank'>
                        <FontAwesomeIcon className='pro' icon={faSquareArrowUpRight} />
                    </a>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default Project_item
