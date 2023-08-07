import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'

import { BsDatabaseUp } from 'react-icons/bs' // from devicons
import { TbMathFunction } from 'react-icons/tb'
import { SiRubyonrails} from 'react-icons/si'
import { GiServerRack, GiTeacher} from 'react-icons/gi'
import {MdArchitecture} from 'react-icons/md'
import { DiRuby } from 'react-icons/di'

import '../styles/wrapper.css'
import { generateHeader } from './skills-helper'





  export function WorkHelper() {
    const [experiences, setExperiences] = useState([
      {when: 'June 2023 - Present', 
      title: 'IT Intern', 
      long: "Information Technology Intern",
      accomplishments: [
        'Updated and maintained a widely used Ruby on Rails application with a React frontend. (Ongoing)',
        'Collaborated with international team through GitLab to develop novel features in the company. (Ongoing)',
        'Built, dockerized, and deployed a Django authentication application on an existing kubernetes cluster. (Ongoing)'
      ], 
      company: 'Synopsys Inc.', 
      learned: 'Python|Ruby on Rails|React|Docker|Kubernetes|Git|MySQL|Ubuntu|Linux|SSH|CSS',
      src: <GiServerRack size={100}/>,
      show: false
    },
  
      {when: 'July 2022 - Present', 
      title: `Teacher's Assistant`, 
      long: "Computer Science Lead Teacher's Assistant",
      accomplishments: [
        'Streamlining learning process of Object Oriented Programming for students.',
        'Grading student code and exams.',
        'Hosting and managing other Teacher Assistants to create student led instruction sessions.'
      ], 
      company: 'WashU', 
      learned: 'Java|Object Oriented Programming|Teaching|Managing',
      src:<GiTeacher size={100} />,
      show: false},
  
      {when: 'January 2023 - May 2023', 
      title: 'Software Architect', 
      long: "Software Architecture & Development Lead",
      accomplishments: [
        'Led development and software architecture of a skills based & AI powered job matching application.',
        'Gained exposure & experience in working with a dynamic start up',
        'Successfully built out and presented MVP on the MERN stack.'
      ], 
      company: 'Magnifi', 
      learned: 'MERN Stack|HTML|CSS|React|Netlify|Heroku|Software Architecture|Node.js|Express.js|MongoDB',
      src:<MdArchitecture size={100} />,
      show: false},
  
      {when: 'May 2022 - August 2022', 
      title: 'Full Stack Intern', 
      long: "Full Stack Software Development Intern",
      accomplishments: [
        'Developed and updated Ruby on Rails application for accounting in the trucking industry.',
        'Consulted with 18 customers to develop novel features according to their desire.',
        'Streamlined accounting processes through generation of 37 dynamic CSV exports.',
        'Collaborated through GitHub for large application updates.'
      ], 
      company: 'Command Alkon', 
      learned: 'Ruby on Rails|PostgreSQL|Bootstrap|JavaScript|Heroku|HTML|CSS',
      src:<SiRubyonrails size={100} />,
      show: false},
  
      {when: 'May 2021 - August 2021', 
      title: 'Backend Intern', 
      long: "Backend Software Development Intern",
      accomplishments: [
        'Developed API integration with an OCR to streamline data entry process.',
        'Automated accounting process for 26 company specific ticket types.',
        'Outlined 47 company specific data entry requests for existing workers.'
  
      ], 
      company: 'Command Alkon', 
      learned: 'Ruby on Rails|PostgreSQL',
      src:<DiRuby size={100} />,
      show: false},
  
      {when: 'May 2019 - August 2019', 
      title: 'Data Entry Intern', 
      long: "Data Entry Intern",
      accomplishments: [
        'Collaborated with International data entry team.',
        'Handled data degradation on over 1,764 entries.',
        'Exposed myself to PSQL while validating financially sensetive information'
      ], 
      company: 'Ruckit', 
      learned: 'PostgreSQL|Data Validation|Data Analysis',
      src:<BsDatabaseUp size={100}/>,
      show: false},
  
      {when: 'May 2019 - August 2021', 
      title: 'Calculus Tutor', 
      long: "High School Calculus Tutor",
      accomplishments: [
        'Developed website to advertize and schedule tutoring sessions.',
        'Credited with raising four students grades in calculus from a "C" or lower to an "A-" or higher.',
        'Expanded my service to include Geometry, Advanced Algebra, and Trigonometry.'
      ], 
      company: 'Self Employed', 
      learned: 'Calculus|Advanced Algebra|Geometry|Teaching|HTML|CSS',
      src: <TbMathFunction size={100}/>,
      show: false}
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
        <div className={!exp.show ? "force-dimension work-exp":"work-exp"} onClick={()=>updateExp(index)}>
            <h2>{exp.src}<Icon name={exp.show? "angle up": "angle down"}/>{exp.title}</h2><h2><strong>@ {exp.company} </strong></h2>
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

