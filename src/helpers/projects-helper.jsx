import React from 'react'
import {SiMajorleaguehacking, SiOpenstreetmap} from 'react-icons/si'
import { generateHeader } from './skills-helper'
import '../styles/wrapper.css';
import { Button } from 'semantic-ui-react';



export const hackWashu = {
    title: 'Hack WashU Winner',
    desc: `
    I led a team of three to create an image recognition API integrating Twilio's SMS API, Amazon's Rekognition, and AWS Lambda. `,
    comp: <SiMajorleaguehacking size={50}/>,
    src: 'https://devpost.com/software/project-what-is-that',
  }

  export const magnifi = {
    title: 'Magnifi Talent',
    desc: `I spearheaded the software architecture and development for an AI-driven job matching platform. Ask me for a demo! :)`,
    comp: <SiOpenstreetmap size={50}/>,
    src: 'https://youtu.be/omSyXatmo7s',
  }

  export const familyTree = {
    title: 'Family Tree (Coming Soon)',
    desc: `I am developing a user-friendly family tree application using the NEXT.js Stack to address concerns about the physical nature of our lineage documentation.`,
    comp: <h3>Building...</h3>,
  }


  export function ProjectsHelper(){
    const redirectTo = (projSrc) => {
      window.open(projSrc, "_blank");
    }
    const allProjects = [hackWashu , magnifi , familyTree]
    return (
      <>
      {generateHeader("3 of my projects")}
      <div className="proj-wrap">
        {allProjects.map(project=>(
          <>
          <div className={`project fancy-boxen`}>
            <h2>{project.title}</h2>
            <h3>{project.desc}</h3>
            {project.title!=='Family Tree (Coming Soon)' &&  (<Button onClick={()=>redirectTo(project.src)} className="send-mail cool-button project-button">{project.comp}</Button>)}
          </div>
          <div className="burrer"/>
          </>
        ))}
      </div>
      
      </>
    )
  }