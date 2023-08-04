import React, {useState, useRef} from 'react'
import { Container, Label,  } from 'semantic-ui-react'
import { useIntersectionObserver } from '@react-hooks-library/core'
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
    return (<Label className="header-text"><h1>{input}</h1></Label>);
  }




export function SkillsHelper() {
    const [languages, setLanguages] = useState([
        {name: 'CSS', comp: <DiCss3 size={100}/>, rel: titles.mag, yrs: '~3 years', active: false, refer: useRef(null)},
        {name: 'Node.js', comp: <DiNodejs size={100}/>, rel: titles.mag, yrs: '~1 year', active: false, refer: useRef(null)},
        {name: 'Python', comp: <DiPython size={100}/>, rel: titles.iti, yrs: '~3 years', active: false, refer: useRef(null)},
        {name: 'React.js', comp: <DiReact size={100}/>, rel: titles.iti, yrs: '~1 year', active: false, refer: useRef(null)},
        {name: 'HTML', comp: <DiHtml5 size={100}/>, rel: titles.tut, yrs: '~4 years', active: false, refer: useRef(null)},
        {name: 'Java', comp: <DiJava size={100}/>, rel: titles.ass, yrs: '~4 years', active: false, refer: useRef(null)},
        {name: 'JavaScript', comp: <DiJavascript1 size={100}/>, rel: titles.ful, yrs: '~4 years', active: false, refer: useRef(null)},
        {name: 'C++', comp: <TbBrandCpp size={100}/>, rel: titles.edu, yrs: '~1 year', active: false, refer: useRef(null)},
        {name: 'AVR Assembly', comp: <SiAssemblyscript size={90}/>, rel: titles.edu, yrs: '~1 year', active: false, refer: useRef(null)},
        {name: 'Kubernetes (conceptual)', comp: <SiKubernetes size={100}/>, rel: titles.iti, yrs: '~1 year', active: false, refer: useRef(null)},
        {name: 'Docker (conceptual)', comp: <SiDocker size={100}/>, rel: titles.iti, yrs: '~1 year', active: false, refer: useRef(null)},
        {name: 'Svelte (conceptual)', comp: <SiSvelte size={100}/>, rel: titles.own, yrs: '~1 year', active: false, refer: useRef(null)},
        {name: 'Ruby on Rails', comp: <DiRuby size={95}/>, rel: titles.ful, yrs: '~3 years', active: false, refer: useRef(null)},
        {name: 'MERN stack', comp: <SiMongodb size={100}/>, rel: titles.mag, yrs: '~1 year', active: false, refer: useRef(null)},
        {name: 'Python Django', comp: <TbBrandDjango size={100}/>, rel: titles.iti, yrs: '~1 year', active: false, refer: useRef(null)},
        {name: 'Git', comp: <FaGit size={100}/>, rel: titles.iti, yrs: '~2 years', active: false, refer: useRef(null)},
        {name: 'APi Development', comp: <TbApi size={100}/>, rel: titles.mag, yrs: '~2 years', active: false, refer: useRef(null)},
        {name: 'OCR Technology', comp: <GiArtificialHive size={100}/>, rel: titles.bac, yrs: '~2 years', active: false, refer: useRef(null)},
        {name: 'Linux (WSL)', comp: <FaLinux size={100}/>, rel: titles.iti, yrs: '~1 years', active: false, refer: useRef(null)},
        {name: 'PostgreSQL (PSQL)', comp: <SiPostgresql size={100}/>, rel: titles.dat, yrs: '~3 years', active: false, refer: useRef(null)},
        {name: 'AWS Lambda', comp: <SiAwslambda size={100}/>, rel: titles.own, yrs: '~2 months', active: false, refer: useRef(null)},
      ])

      const activateLanguage = (index) => {
        const updatedLanguages = [...languages];
        updatedLanguages[index].active = true;
        setLanguages(updatedLanguages);
      };

      const wrapperReference = useRef(null);
      const {inView} = useIntersectionObserver(wrapperReference)

    
    
    return (
        <>
        {generateHeader("Never Heard of it? Click it!")}
        <div ref={wrapperReference}>
        <Container id="skills" className={inView ? "skills-wrapper appear" : "skills-wrapper"}>
            <div className="skills-grid">
            {languages.sort((a, b) => a.name.localeCompare(b.name)).map((lang, index) => (
              lang.active ? (
                <span className="active-skill" onClick={()=> window.open(`https://www.google.com/search?q=what+is+${lang.name}`, "_blank")}>
                {lang.comp}
                <h3>{lang.name}</h3>
                <p>Most relavent experience - {lang.rel}</p>
                <p>{lang.yrs} of experience.</p>
                
              </span>
              ) : 
              
              (
              <span className="skills-icon" 
                onMouseEnter={() => !lang.active && activateLanguage(index)} >
                <h4><strong>Hover over me!</strong></h4>
                {lang.comp}
                <h3>{lang.name}</h3>
              </span>
              )
            ))}
            </div>
          </Container>
          </div>
          </>
    )
  }

