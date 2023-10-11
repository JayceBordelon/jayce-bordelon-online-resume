import React from 'react'
import {SiMajorleaguehacking, SiOpenstreetmap} from 'react-icons/si'
import {BsNewspaper} from 'react-icons/bs';
import { generateHeader } from './skills-helper'
import '../styles/wrapper.css';
import { Button } from 'semantic-ui-react';



export const hackWashu = {
    title: 'Hack WashU Winner',
    desc: `
    I led a team of three to create an image recognition API that integrated Twilio's SMS API with Amazon's Rekognition API in an AWS Lambda Function. `,
    comp: <SiMajorleaguehacking size={50}/>,
    src: 'https://devpost.com/software/project-what-is-that',
  }

  export const magnifi = {
    title: 'Magnifi Talent',
    desc: `I spearheaded the software architecture and development for an AI-driven, job matching platform. It is built on the MERN stack and is yet to be deployed. See the demo on youtube below.`,
    comp: <SiOpenstreetmap size={50}/>,
    src: 'https://youtu.be/omSyXatmo7s',
  }

  export const newsSharing = {
    title: 'News Site',
    desc: `I built out a simple news sharing site using PHP, HTML, and CSS. This was produced as part of my Rapid Prototype Development course. It is deployed on an EC2 instance (AWS)`,
    comp: <BsNewspaper size={50}/>,
    src: 'http://ec2-18-216-183-236.us-east-2.compute.amazonaws.com/module3-group-module3-498908-498977/php/instantiate_app.php'
  }


  export function ProjectsHelper(){
    const redirectTo = (projSrc) => {
      if (projSrc){
        window.open(projSrc, "_blank");
      }
      
    }
    const allProjects = [hackWashu , magnifi , newsSharing]
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
          </div>
          <div className="burrer"/>
          </>
        ))}
      </div>
      
      </>
    )
  }