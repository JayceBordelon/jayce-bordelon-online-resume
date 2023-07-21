//Dependencies
import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';

//Components (Icons)
import { DiCss3, DiNodejs, DiPython, DiReact, DiRuby, DiHtml5, DiJava, DiJavascript1  } from 'react-icons/di' // from devicons
import {TbBrandCpp, TbApi, TbBrandDjango} from 'react-icons/tb'
import {SiAssemblyscript, SiAwslambda, SiKubernetes, SiDocker, SiMongodb, SiPostgresql, SiSvelte} from 'react-icons/si'
import {FaLinux, FaGit} from 'react-icons/fa'
import {GiArtificialHive} from 'react-icons/gi'


//Style
import '../styles/wrapper.css'


export default class Skills extends Component {


    languages = [
      {name: 'CSS', comp: <DiCss3 size={200}/>},
      {name: 'Node.js', comp: <DiNodejs size={200}/>},
      {name: 'Python', comp: <DiPython size={200}/>},
      {name: 'React.js', comp: <DiReact size={200}/>},
      {name: 'HTML', comp: <DiHtml5 size={200}/>},
      {name: 'Java', comp: <DiJava size={200}/>},
      {name: 'JavaScript', comp: <DiJavascript1 size={200}/>},
      {name: 'C++', comp: <TbBrandCpp size={200}/>},
      {name: 'AVR Assembly', comp: <SiAssemblyscript size={160}/>},
      {name: 'Kubernetes (conceptual)', comp: <SiKubernetes size={200}/>},
      {name: 'Docker (conceptual)', comp: <SiDocker size={200}/>},
      {name: 'Svelte (conceptual)', comp: <SiSvelte size={200}/>},
    ]
    web_frameworks = [
      {name: 'Ruby on Rails', comp: <DiRuby size={170}/>},
      {name: 'MERN stack', comp: <SiMongodb size={200}/>},
      {name: 'Python Django', comp: <TbBrandDjango size={200}/>},
    ]
    db_and_other = [
      {name: 'Git', comp: <FaGit size={200}/>},
      {name: 'APi Development', comp: <TbApi size={200}/>},
      {name: 'OCR Technology', comp: <GiArtificialHive size={200}/>},
      {name: 'Linux (WSL)', comp: <FaLinux size={200}/>},
      {name: 'PostgreSQL (PSQL)', comp: <SiPostgresql size={200}/>},
      {name: 'AWS Lambda', comp: <SiAwslambda size={200}/>},
    ]

    toComponent = (lang) => {
      return lang.comp;
    }

    handleClick = () => {

    }

    render() {
      this.languages.sort((a, b) => a.name.localeCompare(b.name));
      this.web_frameworks.sort((a, b) => a.name.localeCompare(b.name));
      this.db_and_other.sort((a, b) => a.name.localeCompare(b.name));
      return (
          
          <Container textAlign='center' className="skills-wrapper">
          <h1>Languages</h1>
          {this.languages.map(lang => 
            <span className="skills-icon" onClick={this.handleClick}>
            {this.toComponent(lang)}
            <h2>{lang.name}</h2>
            </span>
            
          )}
          <h1>Web Frameworks</h1>
          {this.web_frameworks.map(lang => 
            <span className="skills-icon" onClick={this.handleClick}>
            {this.toComponent(lang)}
            <h2>{lang.name}</h2>
            </span>
            
          )}
          <h1>Databses & Other</h1>
          {this.db_and_other.map(lang => 
            <span className="skills-icon" onClick={this.handleClick}>
            {this.toComponent(lang)}
            <h2>{lang.name}</h2>
            </span>
            
          )}
          </Container>
    
      )
    }
  }