import React from 'react'
import {SiMajorleaguehacking, SiOpenstreetmap} from 'react-icons/si'
import { generateHeader } from './skills-helper'
import '../styles/wrapper.css';
import { Button, Icon } from 'semantic-ui-react';



export const hackWashu = {
    title: 'Hack WashU Winner',
    desc: `
    I led a team of three to create an image recognition API that integrated Twilio's SMS API with Amazon's Rekognition API in an AWS Lambda Function. `,
    comp: <SiMajorleaguehacking size={50}/>,
    src: 'https://devpost.com/software/project-what-is-that',
  }

  export const magnifi = {
    title: 'Magnifi Talent',
    desc: `I spearheaded the software architecture and development for an AI-driven, job matching platform. Ask me for a live demo!`,
    comp: <SiOpenstreetmap size={50}/>,
    src: 'https://youtu.be/omSyXatmo7s',
  }

  export const familyTree = {
    title: 'Family Tree',
    desc: `I am developing a user-friendly family tree application using the NEXT.js Stack to address concerns about the physical nature of our lineage documentation.`,
    comp: <span><Icon name="cog loading" clasName="loader-icon" size="big"/> </span>,
  }


  export function ProjectsHelper(){
    const redirectTo = (projSrc) => {
      if (projSrc){
        window.open(projSrc, "_blank");
      }
      
    }
    const allProjects = [hackWashu , magnifi , familyTree]
    return (
      <>
      {generateHeader("Some of my work")}
      <div className="proj-wrap">
        {allProjects.map(project=>(
          <>
          <div className={`project fancy-boxen`}>
            <h2>{project.title}</h2>
            <h3>{project.desc}</h3>
            <Button onClick={()=>redirectTo(project.src)} className="send-mail cool-button project-button">{project.comp}</Button>
            {project.title === 'Family Tree' && (<p>Coming soon...</p>)}
          </div>
          <div className="burrer"/>
          </>
        ))}
      </div>
      
      </>
    )
  }