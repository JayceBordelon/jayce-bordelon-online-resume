import React, { useState } from 'react'
import { Icon, Image } from 'semantic-ui-react'

import { BsDatabaseUp } from 'react-icons/bs' // from devicons
import { SiRubyonrails} from 'react-icons/si'
import { GiServerRack, GiTeacher} from 'react-icons/gi'
import {MdArchitecture, MdPayment} from 'react-icons/md'
import { DiRuby } from 'react-icons/di'

import '../styles/wrapper.css'
import { generateHeader } from './skills-helper'

//imgs
import MasterCardLogo from "../styles/master.png"
import WashuLogo from "../styles/washu-logo-work.png"
import SynopsysLogo from "../styles/synopsys-logo.jpeg"
import CommandLogo from "../styles/command-logo.jpeg"
import RuckitLogo from "../styles/ruckit-logo.png"
import MagnifiLogo from "../styles/mgfi-logo.webp"





  export function WorkHelper() {
    const [experiences, setExperiences] = useState([
      {when: 'Incoming Spring 2024', 
      title: 'Software Engineering Co-Op Intern', 
      long: "Software Engineering Intern Spring 2024 Co-Op",
      accomplishments: [
        
      ], 
      company: 'Mastercard', 
      learned: 'Java|Springboot',
      src: <MdPayment size={100}/>,
      show: false,
      logo: MasterCardLogo
    },
      {when: 'June 2023 - August 2023', 
      title: 'Software Engineering Intern', 
      long: "Core Infrastructure Software Engineering Intern",
      accomplishments: [
        'Automated the synchronization of over 20,000 LDAP (Lightweight Directory Access Protocol) instances with a centralized SQL database',
        'Built rake tasks (test suites) to assure the validity of my bug fixes for Ruby on Rails API (Application Programming Interface)',
        `Architected, created, containerized, and deployed a visualization application for our Kubernetes cluster's API`,
      ], 
      company: 'Synopsys Inc.', 
      learned: 'Python|Ruby on Rails|React|Docker|Kubernetes|Git|MySQL|Ubuntu|Linux|SSH|CSS',
      src: <GiServerRack size={100}/>,
      show: false,
      logo: SynopsysLogo
    },
  
      {when: 'July 2022 - Present', 
      title: `Teacher's Assistant`, 
      long: "Computer Science Lead Teacher's Assistant",
      accomplishments: [
        `Organized over 100 other Teacher's Assistants to create student led instruction periods`,
        'Tailored personalized instruction for students of all levels of understanding in Java and C++',
      ], 
      company: 'WashU', 
      learned: 'Java|C++|Object Oriented Programming|Teaching|Managing',
      src:<GiTeacher size={100} />,
      show: false,
      logo: WashuLogo},
  
      {when: 'January 2023 - May 2023', 
      title: 'Software Architect', 
      long: "Software Architecture & Development Lead",
      accomplishments: [
        `Led development of MERN (MongoDB, ExpressJS, ReactJS, NodeJS) app for AI driven startup`,
        `Designed and refined matching algorithm in JavaScript to match jobs to job seekers'`,
        'Launched conversations with numerous investors through carefully crafted and executed pitches'
      ], 
      company: 'Magnifi', 
      learned: 'MERN Stack|HTML|CSS|React|Netlify|Heroku|Software Architecture|Node.js|Express.js|MongoDB',
      src:<MdArchitecture size={100} />,
      show: false,
      logo: MagnifiLogo},
  
      {when: 'May 2022 - August 2022', 
      title: 'Full Stack Intern', 
      long: "Full Stack Software Engineering Intern",
      accomplishments: [
        'Automated accounting processes through generation of 37 dynamic CSV exports',
        'Reworked frontend pages to add new functionality in settings console',
        'Implemented novel features to allow for data synchronization on over 4,000 user accounts',
      ], 
      company: 'Command Alkon', 
      learned: 'Ruby on Rails|PostgreSQL|Bootstrap|JavaScript|Heroku|HTML|CSS',
      src:<SiRubyonrails size={100} />,
      show: false,
      logo: CommandLogo},
  
      {when: 'May 2021 - August 2021', 
      title: 'Backend Intern', 
      long: "Backend Software Engineering Intern",
      accomplishments: [
        'Developed API integration with an Optical Character Recognition (OCR) technology',
        'Automated accounting process for 26 company specific ticket types with Ruby scripts',
        'Outlined 47 company specific rules for data entry processes'
      ], 
      company: 'Command Alkon', 
      learned: 'Ruby on Rails|PostgreSQL',
      src:<DiRuby size={100} />,
      show: false,
      logo: CommandLogo},
  
      {when: 'May 2019 - August 2019', 
      title: 'Data Entry Intern', 
      long: "Data Entry Intern",
      accomplishments: [
        'Collaborated with International data entry team',
        'Handled data degradation on over 1,764 entries',
        'Gained exposure to PostgreSQL queries while resolving data degradation issues '
      ], 
      company: 'Ruckit', 
      learned: 'PostgreSQL|GitHub|Data Validation|Data Analysis',
      src:<BsDatabaseUp size={100}/>,
      show: false,
      logo: RuckitLogo},
  
    ])
    const toSingleLearning = (learnings) => {
      return learnings.split("|");
    }
    const updateExp = (index) => {
      let updatedStuff = [...experiences];
      updatedStuff[index] = { ...updatedStuff[index], show: !updatedStuff[index].show };
      setExperiences(updatedStuff);
    }
  
    return (
      <div>
      {generateHeader("Real world software experience")}
      <div className="work-wrap">

      {experiences.map((exp, index) => (
        <div className={!exp.show ? "force-dimension work-exp fancy-boxen exp-in":"work-exp"} onClick={()=>updateExp(index)}>
            {exp.show ? (<>
            <h2>{exp.src}</h2>
            <h2>{exp.long}</h2>
            <h2><strong>@ {exp.company} </strong></h2>
            <h3>{exp.when}</h3></>) : (
              <span className="center-stuffs">
              <h2>{exp.src}</h2><h2>{exp.title}</h2>
              <h2><strong>@{exp.company}</strong></h2>
              <h3>{exp.when}</h3>
              <Image className="company-logo" src={exp.logo} />
              <h1><Icon name="sort up" size="large"/></h1>
              </span>)}
            {exp.show && (
              <div className="exp-in" key={exp.title}>
              {exp.accomplishments.map((accomplishment) => (
                  <h4>
                    <Icon name="code branch" /> {accomplishment}
                  </h4>
              ))}
              <div className="learning-holder">
                {toSingleLearning(exp.learned)
                  .sort()
                  .map((learning) => (
                    <span className="learning" onClick={()=> window.open(`https://www.google.com/search?q=what+is+${learning}`, "_blank")}>{learning}</span>
                  ))}
              </div>
            </div>
            )}
        </div>
      ))}
      </div>
      </div>
    )
  }

