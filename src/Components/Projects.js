import React from 'react'
import Project_item from './Project_item'
import './project_item.css'
import pic1 from '../img/dorma_pic.png'
import pic2 from '../img/discord_pic.png'

function Projects() {

    const projects=[
        {
            pic:`${pic1}`,
            title:'Dorma',
            desc:"Experience a seamlessly designed dormitory hub boasting intuitive navigation, captivating listings, and effortless booking. Navigate effortlessly through a visually captivating interface, ensuring a delightful user experience at every turn.",
            git_address:'https://github.com/SwatiBhandari/dorma',
            site_address:'https://dorma-ddaf7.firebaseapp.com/',
        },
        {
            pic:`${pic2}`,
            title:'Discord Clone',
            desc:"Crafted with ReactJS, my Discord clone mirrors the dynamic essence of the original platform. Dive into vibrant and customizable channels that are both sleek and engaging",
            git_address:'https://github.com/SwatiBhandari/discord-clone',
            site_address:'https://discord-clone-2e73f.firebaseapp.com/',
        }
    ]

  return (
    <div className='projects'>
        <h2 className='Projects_title'><span>My</span>Projects</h2>
        <div className='projects_section'>
            {projects.map((project, index) => (
                    <Project_item key={index} pic={project.pic} title={project.title} desc={project.desc} git_address={project.git_address} site_address={project.site_address} />
            ))}
        </div>
    </div>
  )
}

export default Projects
