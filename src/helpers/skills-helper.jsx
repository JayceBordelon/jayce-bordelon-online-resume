import React from 'react'
import { Label  } from 'semantic-ui-react'

import { useInView } from 'react-intersection-observer';
import Typer from '../components/typer.component';
//icons
import { DiCss3, DiNodejs, DiPython, DiReact, DiHtml5, DiJava, DiJavascript1  } from 'react-icons/di' // from devicons
import {TbBrandCpp, TbApi, TbBrandDjango} from 'react-icons/tb'
import {SiAssemblyscript, SiAwslambda, SiKubernetes, SiDocker, SiMongodb, SiPostgresql, SiSvelte, SiMysql, SiRubyonrails} from 'react-icons/si'
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
    return (<Label className="header-text"><Typer text={input}/></Label>);
  }




export function SkillsHelper() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const skillSize=80
    const languages=[
        {name: 'CSS', comp: <DiCss3 size={skillSize}/>, rel: titles.mag, yrs: ' 3 years', prof:80},
        {name: 'Node.js', comp: <DiNodejs size={skillSize}/>, rel: titles.mag, yrs: ' 1 year', prof:70},
        {name: 'Python', comp: <DiPython size={skillSize}/>, rel: titles.iti, yrs: ' 3 years', prof:91},
        {name: 'React.js', comp: <DiReact size={skillSize}/>, rel: titles.iti, yrs: ' 1 year', prof:98},
        {name: 'HTML', comp: <DiHtml5 size={skillSize}/>, rel: titles.tut, yrs: ' 4 years', prof:90},
        {name: 'Java', comp: <DiJava size={skillSize}/>, rel: titles.ass, yrs: ' 4 years', prof:97},
        {name: 'JavaScript', comp: <DiJavascript1 size={skillSize}/>, rel: titles.ful, yrs: ' 4 years', prof:85},
        {name: 'C++', comp: <TbBrandCpp size={skillSize}/>, rel: titles.edu, yrs: ' 1 year', prof:70},
        {name: 'Assembly', comp: <SiAssemblyscript size={skillSize}/>, rel: titles.edu, yrs: ' 1 year', prof:50},
        {name: 'Kubernetes', comp: <SiKubernetes size={skillSize}/>, rel: titles.iti, yrs: ' 1 year', prof:45},
        {name: 'Docker', comp: <SiDocker size={skillSize}/>, rel: titles.iti, yrs: ' 1 year', prof:40},
        {name: 'Svelte', comp: <SiSvelte size={skillSize}/>, rel: titles.own, yrs: ' 1 year', prof:55},
        {name: 'Ruby on Rails', comp: <SiRubyonrails size={skillSize}/>, rel: titles.ful, yrs: ' 3 years', prof:99},
        {name: 'MongoDB', comp: <SiMongodb size={skillSize}/>, rel: titles.mag, yrs: ' 1 year', prof:90},
        {name: 'Django', comp: <TbBrandDjango size={skillSize}/>, rel: titles.iti, yrs: ' 1 year', prof:70},
        {name: 'Git', comp: <FaGit size={skillSize}/>, rel: titles.iti, yrs: ' 2 years', prof:92},
        {name: 'API', comp: <TbApi size={skillSize}/>, rel: titles.mag, yrs: ' 2 years', prof:95},
        {name: 'OCR', comp: <GiArtificialHive size={skillSize}/>, rel: titles.bac, yrs: ' 2 years', prof:84},
        {name: 'Linux', comp: <FaLinux size={skillSize}/>, rel: titles.iti, yrs: ' 1 year', prof:75},
        {name: 'PostgreSQL', comp: <SiPostgresql size={skillSize}/>, rel: titles.dat, yrs: ' 3 years', prof:78},
        {name: 'AWS Lambda', comp: <SiAwslambda size={skillSize}/>, rel: titles.own, yrs: ' 1 year', prof:64},
        {name: 'SQL', comp: <SiMysql size={skillSize}/>, rel: titles.own, yrs: ' 2 years', prof:88},
      ]

      function sortByExperience(a, b) {
        const yearsA = a.prof;
        const yearsB = b.prof;
      
        if (yearsA > yearsB) {
          return -1; // a comes before b
        }
        if (yearsA < yearsB) {
          return 1; // b comes before a
        }
        return 0; // no change in order
      }


    
    
    return (
        <>
        {generateHeader("Experience in applicable technologies")}
        <div ref={ref}>
        <div id="skills" className="skills-wrapper">
            <div className="skills-grid">
            {languages.sort(sortByExperience).map(lang=>(
              <span className="skills-spacer fancy-boxen">
              {lang.comp}
              <div className="skill-name">{lang.name}</div>
              <div className="years">{lang.yrs}</div>
              <div className="prof-bar">
              <div
                    className='prof-bar-over'
                    style={{
                      width: inView ? `${lang.prof}%` : '0%',
                      transition: inView ? 'width 1.5s ease-in-out' : 'none',
                    }}
                  >
                  <p>{lang.prof}%</p>
                </div>
              </div>
              </span>
            ))}
            </div>
          </div>
          </div>
          </>
    )
  }

