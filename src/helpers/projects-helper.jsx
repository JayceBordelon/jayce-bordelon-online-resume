import React from 'react'
import {SiMajorleaguehacking, SiOpenstreetmap} from 'react-icons/si'
import {GiFruitTree} from 'react-icons/gi'
import { generateHeader } from './skills-helper'
import '../styles/wrapper.css';
import { Button } from 'semantic-ui-react';

export const hackWashu = {
    title: 'Hack WashU Winner',
    desc: `
    I led a team of three skilled peers to develop an advanced image recognition API. 
    Our solution seamlessly integrated Twilio's SMS API, Amazon's Rekognition, and AWS Lambda software. 
    Using Python, we created a chat bot that accurately identifies objects from user-provided images, 
    all within less than 200 lines of code.`,
    comp: <SiMajorleaguehacking/>,
    src: 'https://devpost.com/software/project-what-is-that',
  }

  export const magnifi = {
    title: 'Undergraduate Software Architect',
    desc: `I spearheaded the software architecture and development for an AI-driven job matching platform. 
    The project, built on the MERN stack, spanned a semester and resulted in a fully functional MVP, 
    powered by the skillsEngine API. Ask me for a demo! :)`,
    comp: <SiOpenstreetmap/>,
    src: 'https://youtu.be/omSyXatmo7s',
  }

  export const familyTree = {
    title: 'Family Tree (Coming Soon)',
    desc: `Recently, my grandfather expressed concerns about the physical nature of our lineage documentation, 
    which is currently stored as a traditional 'scroll' in his garage. To address this, 
    I am developing an application using the NEXT.js Stack. 
    The platform aims to create a cohesive and user-friendly family tree experience, allowing easy administration, 
    CRUD operations for updates, and effortless comprehension of the lineage data.    `,
    comp: <GiFruitTree/>,
  }


  export function ProjectsHelper(){
    const redirectTo = (projSrc) => {
      window.open(projSrc, "_blank");
    }
    const forceBackdrop = (icon) => {

    }
    const allProjects = [hackWashu , magnifi , familyTree]
    return (
      <>
      {generateHeader("I build stuff!")}
      <div className="proj-wrap">
        {allProjects.map(project=>(
          <div className="project">
            <h1>{project.title}</h1>
            <h3>{project.desc}</h3>
            <Button onClick={()=>redirectTo(project.src)} className="send-mail cool-button"><h3>{project.comp}Take me there!</h3></Button>
          </div>

        ))}
      </div>
      
      </>
    )
  }