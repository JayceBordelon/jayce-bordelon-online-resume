import React, { useState } from 'react'
import { Icon, Image } from 'semantic-ui-react'

import { BsDatabaseUp } from 'react-icons/bs' // from devicons
import { TbMathFunction } from 'react-icons/tb'
import { SiRubyonrails} from 'react-icons/si'
import { GiServerRack, GiTeacher} from 'react-icons/gi'
import {MdArchitecture} from 'react-icons/md'
import { DiRuby } from 'react-icons/di'

import '../styles/wrapper.css'
import { generateHeader } from './skills-helper'

//imgs
import WashuLogo from "../styles/washu-logo-work.png"
import SynopsysLogo from "../styles/synopsys-logo.jpeg"
import CommandLogo from "../styles/command-logo.jpeg"
import RuckitLogo from "../styles/ruckit-logo.png"
import TutorLogo from "../styles/tutor-logo.jpeg"
import MagnifiLogo from "../styles/mgfi-logo.webp"





  export function WorkHelper() {
    const [experiences, setExperiences] = useState([
      {when: 'June 2023 - Present', 
      title: 'IT - Technical Intern', 
      long: "Information Technology Intern",
      accomplishments: [
        'Updated and maintained a Ruby on Rails web application in a fast-paced development environment',
        'Automated the synchronization of over 3,000 LDAP instances with a centralized SQL database',
        'Created, containerized, and deployed a CI/CD Flask application using Docker and Kubernetes'
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
        `Hosted and managed other Teacher's Assistants to create student led instruction periods`,
        'Tailored personalized instruction for students of all levels of understanding',
        'Ensured students fundamental knowledge in Object Oriented Programming'
      ], 
      company: 'WashU', 
      learned: 'Java|Object Oriented Programming|Teaching|Managing',
      src:<GiTeacher size={100} />,
      show: false,
      logo: WashuLogo},
  
      {when: 'January 2023 - May 2023', 
      title: 'Software Architect', 
      long: "Software Architecture & Development Lead",
      accomplishments: [
        `Built out MVP utilizing skillsEngine's artificial intelligence API `,
        'Gained exposure & experience in working in a dynamic start up environment',
        'Launched conversations with numerous investors through carefully crafted and executed pitches'
      ], 
      company: 'Magnifi', 
      learned: 'MERN Stack|HTML|CSS|React|Netlify|Heroku|Software Architecture|Node.js|Express.js|MongoDB',
      src:<MdArchitecture size={100} />,
      show: false,
      logo: MagnifiLogo},
  
      {when: 'May 2022 - August 2022', 
      title: 'Full Stack Intern', 
      long: "Full Stack Software Development Intern",
      accomplishments: [
        'Consulted with 18 customers to develop novel features according to their desire',
        'Automated accounting processes through generation of 37 dynamic CSV exports',
        'Implemented novel feature to allow for data synchronization on over 4,000 user accounts',
        'Collaborated with international team through GitHub for large application updates'
      ], 
      company: 'Command Alkon', 
      learned: 'Ruby on Rails|PostgreSQL|Bootstrap|JavaScript|Heroku|HTML|CSS',
      src:<SiRubyonrails size={100} />,
      show: false,
      logo: CommandLogo},
  
      {when: 'May 2021 - August 2021', 
      title: 'Backend Intern', 
      long: "Backend Software Development Intern",
      accomplishments: [
        'Developed API integration with an OCR to streamline data entry process',
        'Automated accounting process for 26 company specific ticket types',
        'Outlined 47 company specific data entry requests for existing workers'
  
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
        'Exposed myself to PSQL while validating financially sensitive information'
      ], 
      company: 'Ruckit', 
      learned: 'PostgreSQL|GitHub|Data Validation|Data Analysis',
      src:<BsDatabaseUp size={100}/>,
      show: false,
      logo: RuckitLogo},
  
      {when: 'May 2019 - August 2021', 
      title: 'Calculus Tutor', 
      long: "High School Calculus Tutor",
      accomplishments: [
        'Developed website to advertize and schedule tutoring sessions',
        'Credited with raising four students grades in calculus from a "C" or lower to an "A-" or higher',
        'Expanded my service to include Geometry, Advanced Algebra, and Trigonometry'
      ], 
      company: 'Self Employed', 
      learned: 'Calculus|Advanced Algebra|Geometry|Teaching|HTML|CSS',
      src: <TbMathFunction size={100}/>,
      show: false,
      logo: TutorLogo}
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
      {generateHeader("7 Real world experiences")}
      <div className="work-wrap">

      {experiences.map((exp, index) => (
        <div className={!exp.show ? "force-dimension work-exp fancy-boxen":"work-exp"} onClick={()=>updateExp(index)}>
            {exp.show ? (<>
            <h2>{exp.src}</h2>
            <h2>{exp.title}</h2>
            <h2><strong>@ {exp.company} </strong></h2>
            <h3>{exp.when}</h3></>) : (
              <span className="center-stuffs">
              <h2>{exp.src}</h2><h2>{exp.title}</h2>
              <h2><strong>@{exp.company}</strong></h2>
              <h3>{exp.when}</h3>
              <Image className="company-logo" src={exp.logo} />
              <h1><Icon name="sort up" size="small"/></h1>
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

