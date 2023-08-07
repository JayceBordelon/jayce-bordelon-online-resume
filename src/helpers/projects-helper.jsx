import React from 'react'
import {SiMajorleaguehacking, SiOpenstreetmap} from 'react-icons/si'
import {GiFruitTree} from 'react-icons/gi'
import { generateHeader } from './skills-helper'
import '../styles/wrapper.css';
import { Button, Image } from 'semantic-ui-react';

export const hackWashu = {
    title: 'Hack WashU Winner',
    desc: `
    I led a team of three to create an image recognition API integrating Twilio's SMS API, Amazon's Rekognition, and AWS Lambda. `,
    comp: <SiMajorleaguehacking/>,
    src: 'https://devpost.com/software/project-what-is-that',
    style: "hack"
  }

  export const magnifi = {
    title: 'Magnifi Talent',
    desc: `I spearheaded the software architecture and development for an AI-driven job matching platform. Ask me for a demo! :)`,
    comp: <SiOpenstreetmap/>,
    src: 'https://youtu.be/omSyXatmo7s',
    style: "mag"
  }

  export const familyTree = {
    title: 'Family Tree (Coming Soon)',
    desc: `I am developing a user-friendly family tree application using the NEXT.js Stack to address concerns about the physical nature of our lineage documentation.`,
    comp: <GiFruitTree/>,
    style: "tree"
  }


  export function ProjectsHelper(){
    const redirectTo = (projSrc) => {
      window.open(projSrc, "_blank");
    }
    const allProjects = [hackWashu , magnifi , familyTree]
    return (
      <>
      {generateHeader("3 Of My Projects")}
      <div className="proj-wrap">
        {allProjects.map(project=>(
          <>
          <div className={`project ${project.style}`}>
            <h2>{project.title}</h2>
            <h3>{project.desc}</h3>
            {project.title!=='Family Tree (Coming Soon)' &&  (<Button onClick={()=>redirectTo(project.src)} className="send-mail cool-button project-button"><h2>{project.comp}</h2></Button>)}
          </div>
          <div className="burrer"/>
          </>
        ))}
      </div>
      
      </>
    )
  }