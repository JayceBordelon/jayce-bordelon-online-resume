import React from 'react'
import { Label, Popup,  } from 'semantic-ui-react'
//icons
import { DiCss3, DiNodejs, DiPython, DiReact, DiRuby, DiHtml5, DiJava, DiJavascript1  } from 'react-icons/di' // from devicons
import {TbBrandCpp, TbApi, TbBrandDjango} from 'react-icons/tb'
import {SiAssemblyscript, SiAwslambda, SiKubernetes, SiDocker, SiMongodb, SiPostgresql, SiSvelte} from 'react-icons/si'
import {FaLinux, FaGit} from 'react-icons/fa'
import {GiArtificialHive} from 'react-icons/gi'


export const titles = {
    ass: 'Teachers Assistant @ WashU',
    mag: 'Software Architect @ Magnifi',
    iti: 'IT Intern @ Synopsys Inc.',
    edu: 'Computer Science @ WashU',
    ful: 'Full Stack Development Intern @ Command Alkon',
    bac: 'Backend Stack Development Intern @ Command Alkon',
    dat: 'Data Entry Intern @ Command Alkon',
    tut: 'Calculus Tutor - Self Employed',
    own: 'Self Taught'
  };

  export const  generateHeader = (input) => {
    return (<Label className="header-text">{input}</Label>);
  }




export function SkillsHelper() {
  const skillSize=80
    const languages=[
        {name: 'CSS', comp: <DiCss3 size={skillSize}/>, rel: titles.mag, yrs: '~3 years'},
        {name: 'Node.js', comp: <DiNodejs size={skillSize}/>, rel: titles.mag, yrs: '~1 year'},
        {name: 'Python', comp: <DiPython size={skillSize}/>, rel: titles.iti, yrs: '~3 years'},
        {name: 'React.js', comp: <DiReact size={skillSize}/>, rel: titles.iti, yrs: '~1 year'},
        {name: 'HTML', comp: <DiHtml5 size={skillSize}/>, rel: titles.tut, yrs: '~4 years'},
        {name: 'Java', comp: <DiJava size={skillSize}/>, rel: titles.ass, yrs: '~4 years'},
        {name: 'JavaScript', comp: <DiJavascript1 size={skillSize}/>, rel: titles.ful, yrs: '~4 years'},
        {name: 'C++', comp: <TbBrandCpp size={skillSize}/>, rel: titles.edu, yrs: '~1 year'},
        {name: 'AVR Assembly', comp: <SiAssemblyscript size={skillSize}/>, rel: titles.edu, yrs: '~1 year'},
        {name: 'Kubernetes (conceptual)', comp: <SiKubernetes size={skillSize}/>, rel: titles.iti, yrs: '~1 year'},
        {name: 'Docker (conceptual)', comp: <SiDocker size={skillSize}/>, rel: titles.iti, yrs: '~1 year'},
        {name: 'Svelte (conceptual)', comp: <SiSvelte size={skillSize}/>, rel: titles.own, yrs: '~1 year'},
        {name: 'Ruby on Rails', comp: <DiRuby size={skillSize}/>, rel: titles.ful, yrs: '~3 years'},
        {name: 'MongoDB', comp: <SiMongodb size={skillSize}/>, rel: titles.mag, yrs: '~1 year'},
        {name: 'Python Django', comp: <TbBrandDjango size={skillSize}/>, rel: titles.iti, yrs: '~1 year'},
        {name: 'Git', comp: <FaGit size={skillSize}/>, rel: titles.iti, yrs: '~2 years'},
        {name: 'APi Development', comp: <TbApi size={skillSize}/>, rel: titles.mag, yrs: '~2 years'},
        {name: 'OCR Technology', comp: <GiArtificialHive size={skillSize}/>, rel: titles.bac, yrs: '~2 years'},
        {name: 'Linux (WSL)', comp: <FaLinux size={skillSize}/>, rel: titles.iti, yrs: '~1 years'},
        {name: 'PostgreSQL (PSQL)', comp: <SiPostgresql size={skillSize}/>, rel: titles.dat, yrs: '~3 years'},
        {name: 'AWS Lambda', comp: <SiAwslambda size={skillSize}/>, rel: titles.own, yrs: '~2 months'},
      ]



    
    
    return (
        <>
        {generateHeader("21 Different Technologies")}
        <div>
        <div id="skills" className="skills-wrapper">
            <div className="skills-grid">
            {languages.map(lang=>(
              <span className="skills-spacer">
              <Popup
              className="skills-pop-up"
                content={<p>{lang.yrs} of experience</p>}
                key={lang.name}
                header={<h2>{lang.name}</h2>}
                trigger={lang.comp}
              />
              </span>
            ))}
            </div>
          </div>
          </div>
          </>
    )
  }

