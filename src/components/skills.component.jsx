//Dependencies
import React, { Component } from 'react';
import { Container, Divider, Icon} from 'semantic-ui-react';

//Components (Icons)
import { DiCss3, DiNodejs, DiPython, DiReact, DiRuby, DiHtml5, DiJava, DiJavascript1  } from 'react-icons/di' // from devicons
import {TbBrandCpp, TbApi, TbBrandDjango} from 'react-icons/tb'
import {SiAssemblyscript, SiAwslambda, SiKubernetes, SiDocker, SiMongodb, SiPostgresql, SiSvelte} from 'react-icons/si'
import {FaLinux, FaGit} from 'react-icons/fa'
import {GiArtificialHive} from 'react-icons/gi'


//Style
import '../styles/wrapper.css'


export default class Skills extends Component {


  titles = {
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


    languages = [
      {name: 'CSS', comp: <DiCss3 size={100}/>, rel: this.titles.mag, yrs: '~3 years', active: false},
      {name: 'Node.js', comp: <DiNodejs size={100}/>, rel: this.titles.mag, yrs: '~1 year', active: false},
      {name: 'Python', comp: <DiPython size={100}/>, rel: this.titles.iti, yrs: '~3 years', active: false},
      {name: 'React.js', comp: <DiReact size={100}/>, rel: this.titles.iti, yrs: '~1 year', active: false},
      {name: 'HTML', comp: <DiHtml5 size={100}/>, rel: this.titles.tut, yrs: '~4 years', active: false},
      {name: 'Java', comp: <DiJava size={100}/>, rel: this.titles.ass, yrs: '~4 years', active: false},
      {name: 'JavaScript', comp: <DiJavascript1 size={100}/>, rel: this.titles.ful, yrs: '~4 years', active: false},
      {name: 'C++', comp: <TbBrandCpp size={100}/>, rel: this.titles.edu, yrs: '~1 year', active: false},
      {name: 'AVR Assembly', comp: <SiAssemblyscript size={90}/>, rel: this.titles.edu, yrs: '~1 year', active: false},
      {name: 'Kubernetes (conceptual)', comp: <SiKubernetes size={100}/>, rel: this.titles.iti, yrs: '~1 year', active: false},
      {name: 'Docker (conceptual)', comp: <SiDocker size={100}/>, rel: this.titles.iti, yrs: '~1 year', active: false},
      {name: 'Svelte (conceptual)', comp: <SiSvelte size={100}/>, rel: this.titles.own, yrs: '~1 year', active: false},
    ]
    web_frameworks = [
      {name: 'Ruby on Rails', comp: <DiRuby size={95}/>, rel: this.titles.ful, yrs: '~3 years', active: false},
      {name: 'MERN stack', comp: <SiMongodb size={100}/>, rel: this.titles.mag, yrs: '~1 year', active: false},
      {name: 'Python Django', comp: <TbBrandDjango size={100}/>, rel: this.titles.iti, yrs: '~1 year', active: false},
    ]
    db_and_other = [
      {name: 'Git', comp: <FaGit size={100}/>, rel: this.titles.iti, yrs: '~2 years', active: false},
      {name: 'APi Development', comp: <TbApi size={100}/>, rel: this.titles.mag, yrs: '~2 years', active: false},
      {name: 'OCR Technology', comp: <GiArtificialHive size={100}/>, rel: this.titles.bac, yrs: '~2 years', active: false},
      {name: 'Linux (WSL)', comp: <FaLinux size={100}/>, rel: this.titles.iti, yrs: '~1 years', active: false},
      {name: 'PostgreSQL (PSQL)', comp: <SiPostgresql size={100}/>, rel: this.titles.dat, yrs: '~3 years', active: false},
      {name: 'AWS Lambda', comp: <SiAwslambda size={100}/>, rel: this.titles.own, yrs: '~2 months', active: false},
    ]

    state = {
      activeLanguage: this.languages.find((language) => language.name === 'JavaScript')
    }
  

    getIcon = (lang) => {
      return lang.comp;
    }

    setActive = (lang) => {
      if (!lang.active){
        lang.active = true;
        this.forceUpdate();
      }
    }



    render() {
      this.languages.sort((a, b) => a.name.localeCompare(b.name));
      this.web_frameworks.sort((a, b) => a.name.localeCompare(b.name));
      this.db_and_other.sort((a, b) => a.name.localeCompare(b.name));
      return (
        <>
        <Divider horizontal inverted className="divider-spacing"><p><Icon name="code" size="big"/></p></Divider>
          <Container id="skills" className="skills-wrapper">
            <h1>Languages</h1>
            <div className="skills-grid">
            {this.languages.map(lang => (
              lang.active ? (
                <span className="active-skill super-fade"
                >
                {this.getIcon(lang)}
                <p>Most relavent experience - {lang.rel}</p>
                <p>{lang.yrs} of experience.</p>
                
              </span>
              ) : 
              
              (
              <span className="skills-icon" 
                onMouseEnter={() => this.setActive(lang)}
              >
                {this.getIcon(lang)}
                <h4>{lang.name}</h4>
              </span>
              )
            ))}
            </div>
    
            <h1>Web Frameworks</h1>
            <div className="skills-grid">
            {this.web_frameworks.map(lang => (
              lang.active ? (
                <span className="active-skill super-fade"
                >
                {this.getIcon(lang)}
                <p>Most relavent experience - {lang.rel}</p>
                <p>{lang.yrs} of experience.</p>
                
              </span>
              ) : 
              
              (
              <span className="skills-icon" 
                onMouseEnter={() => this.setActive(lang)}
              >
                {this.getIcon(lang)}
                <h4>{lang.name}</h4>
              </span>
              )
            ))}
            </div>
    
            <h1>Databases & Other</h1>
            <div className="skills-grid">
            {this.db_and_other.map(lang => (
              lang.active ? (
                <span className="active-skill super-fade"
                >
                {this.getIcon(lang)}
                <p>Most relavent experience - {lang.rel}</p>
                <p>{lang.yrs} of experience.</p>
                
              </span>
              ) : 
              
              (
              <span className="skills-icon" 
                onMouseEnter={() => this.setActive(lang)}
              >
                {this.getIcon(lang)}
                <h4>{lang.name}</h4>
              </span>
              )
            ))}
            </div>
          </Container>
        </>
      )
    }
  }