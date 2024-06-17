import React from 'react'
import { Label  } from 'semantic-ui-react'

import { useInView } from 'react-intersection-observer';
import Typer from '../components/typer.component';
//icons
import { DiCss3, DiNodejs, DiPython, DiReact, DiHtml5, DiJava, DiJavascript1  } from 'react-icons/di' // from devicons
import {TbBrandCpp, TbApi, TbBrandDjango} from 'react-icons/tb'
import {SiAwslambda, SiMongodb, SiPostgresql, SiSvelte, SiMysql, SiRubyonrails, SiPhp} from 'react-icons/si'
import {FaLinux, FaGit, FaJenkins} from 'react-icons/fa'
import {GiArtificialHive} from 'react-icons/gi'
import {BiLogoFlask, BiLogoSpringBoot} from 'react-icons/bi'




  export const  generateHeader = (input) => {
    return (<Label className="header-text"><Typer text={input}/></Label>);
  }




export function SkillsHelper() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const skillSize=80
  const languages = [
    { name: 'CSS', comp: <DiCss3 size={skillSize} />, yrs: '3 years', prof: 85 },
    { name: 'PHP', comp: <SiPhp size={skillSize} />, yrs: '1 years', prof: 75 },
    { name: 'Flask', comp: <BiLogoFlask size={skillSize} />, yrs: '1 year', prof: 70 },
    { name: 'Node.js', comp: <DiNodejs size={skillSize} />, yrs: '3 year', prof: 88 },
    { name: 'Python', comp: <DiPython size={skillSize} />, yrs: '3 years', prof: 89 },
    { name: 'React.js', comp: <DiReact size={skillSize} />, yrs: '3 year', prof: 92 },
    { name: 'HTML', comp: <DiHtml5 size={skillSize} />, yrs: '4 years', prof: 86 },
    { name: 'Java', comp: <DiJava size={skillSize} />, yrs: '4 years', prof: 99 },
    { name: 'JavaScript', comp: <DiJavascript1 size={skillSize} />, yrs: '4 years', prof: 90 },
    { name: 'C++', comp: <TbBrandCpp size={skillSize} />, yrs: '1 year', prof: 72 },
    { name: 'Svelte', comp: <SiSvelte size={skillSize} />, yrs: '1 year', prof: 65 },
    { name: 'Ruby on Rails', comp: <SiRubyonrails size={skillSize} />, yrs: '3 years', prof: 91 },
    { name: 'MongoDB', comp: <SiMongodb size={skillSize} />, yrs: '3 year', prof: 90 },
    { name: 'Django', comp: <TbBrandDjango size={skillSize} />, yrs: '1 year', prof: 73 },
    { name: 'Git', comp: <FaGit size={skillSize} />, yrs: '4 years', prof: 88 },
    { name: 'API', comp: <TbApi size={skillSize} />, yrs: '4 years', prof: 91 },
    { name: 'OCR', comp: <GiArtificialHive size={skillSize} />, yrs: '2 years', prof: 76 },
    { name: 'Linux', comp: <FaLinux size={skillSize} />, yrs: '1 year', prof: 73 },
    { name: 'PostgreSQL', comp: <SiPostgresql size={skillSize} />, yrs: '3 years', prof: 80 },
    { name: 'AWS Lambda', comp: <SiAwslambda size={skillSize} />, yrs: '1 year', prof: 60 },
    { name: 'SQL', comp: <SiMysql size={skillSize} />, yrs: '3 years', prof: 82 },
    { name: 'Spring Boot', comp: <BiLogoSpringBoot size={skillSize} />, yrs: '1 years', prof: 86 },
    { name: 'Jenkins', comp: <FaJenkins size={skillSize} />, yrs: '1 years', prof: 78 },
];


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
        {generateHeader("Applicable technology proficiencies")}
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
                  <p>{lang.prof}</p>
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

