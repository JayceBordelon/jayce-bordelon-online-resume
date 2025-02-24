import React from 'react'
import {SiMajorleaguehacking, SiOpenstreetmap} from 'react-icons/si'
import { FaCogs } from "react-icons/fa";
import { CgCardSpades } from "react-icons/cg";
import { generateHeader } from './skills-helper';
import { FcBullish } from "react-icons/fc";
import { TfiWrite } from "react-icons/tfi";


import '../styles/wrapper.css';
import { Button } from 'semantic-ui-react';


export const jayceBlogs = {
  title: 'Jayce Blogs',
  desc: `My personal blog where I write about software development insights through personal experience. It doesn't have many entries as of now, but I hope to be adding posts weekly.`,
  comp: <TfiWrite style={{ color: '#5195a6' }} size={50}/>,
  src: 'https://jayceblog.netlify.app',
}


export const hackWashu = {
    title: 'Hack WashU Winner',
    desc: `
    I led a team of three to create an image recognition API that integrated Twilio's SMS API with Amazon's Rekognition API in an AWS Lambda Function. `,
    comp: <SiMajorleaguehacking style={{ color: '#ecc700' }} size={50}/>,
    src: 'https://devpost.com/software/project-what-is-that',
  }

  export const magnifi = {
    title: 'Magnifi Talent',
    desc: `I spearheaded the software architecture and development for an AI-driven, job matching platform. It is built on the MERN stack and is yet to be deployed. See the demo on youtube below.`,
    comp: <SiOpenstreetmap style={{ color: '#4183c4' }} size={50}/>,
    src: 'https://youtu.be/omSyXatmo7s',
  }

  export const blackJack = {
    title: 'Gamblers Ruin',
    desc: `I used React/Firestore to create a gambling application. Given that this was built for a rapid prototype development course, I didn't get a chance to make it mobile friendly :(`,
    comp: <CgCardSpades style={{ color: 'orange' }} size={50}/>,
    src: 'https://cards-fa60d.web.app/',
  }


  export const bearsAndBulls = {
    title: 'Bears & Bulls (B&B)',
    desc: `A webscraping, Node.JS API paired with a React+Vite+Tailwind client, B&B is a tool for spotting and tracking the most volatile and heavily traded stocks. This is still in progress.`,
    comp: <p><FcBullish style={{ color: 'white' }} size={50} /></p>,
    src: 'https://bearsandbulls.netlify.app/volatile'
  }

  export const flome = {
    title: 'FLOME official site',
    desc: `I built this site for "The Future Leaders of McKelvey Engineering", an organization which I am currently the vice president of. The site was built using React+Vite with a Tailwind plugin.`,
    comp: <p><FaCogs style={{color: "#6a2e35"}} size={50}/></p>,
    src: 'https://flome-washu.netlify.app'
  }


  export function ProjectsHelper(){
    const redirectTo = (projSrc) => {
      if (projSrc){
        window.open(projSrc, "_blank");
      }
      
    }
    const allProjects = [jayceBlogs, flome, bearsAndBulls]
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