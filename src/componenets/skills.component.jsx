//Dependencies
import React, { Component } from 'react';
import { Container, Divider} from 'semantic-ui-react';

//Icons
import { DiCss3, DiNodejs, DiPython, DiReact, DiRuby, DiHtml5, DiDjango, DiJava, DiJavascript1  } from 'react-icons/di' // from devicons
import {TbBrandCpp, TbApi} from 'react-icons/tb'
import {SiAssemblyscript, SiAwslambda, SiKubernetes, SiDocker} from 'react-icons/si'
import {FaBootstrap, FaLinux} from 'react-icons/fa'
import {GiArtificialHive} from 'react-icons/gi'


//Style
import '../styles/skills.css'


export default class Skills extends Component {


    languages = [
      {name: 'CSS', comp: <DiCss3 size={200}/>},
      {name: 'Node.JS', comp: <DiNodejs size={200}/>},
      {name: 'Python', comp: <DiPython size={200}/>},
      {name: 'React', comp: <DiReact size={200}/>},
      {name: 'Ruby on Rails', comp: <DiRuby size={170}/>},
      {name: 'HTML', comp: <DiHtml5 size={200}/>},
      {name: 'Python Django', comp: <DiDjango size={200}/>},
      {name: 'Java', comp: <DiJava size={200}/>},
      {name: 'JavaScript', comp: <DiJavascript1 size={200}/>},
      {name: 'C++', comp: <TbBrandCpp size={200}/>},
      {name: 'AVR Assembly', comp: <SiAssemblyscript size={160}/>},
      {name: 'Bootstrap', comp: <FaBootstrap size={200}/>},
      {name: 'Linux', comp: <FaLinux size={200}/>},
      {name: 'AWS Lambda', comp: <SiAwslambda size={200}/>},
      {name: 'Kubernetes', comp: <SiKubernetes size={200}/>},
      {name: 'Docker', comp: <SiDocker size={200}/>},
      {name: 'APi Development', comp: <TbApi size={200}/>},
      {name: 'OCR Technology', comp: <GiArtificialHive size={200}/>},
      


      
    ]

    toComponent = (lang) => {
      return lang.comp;
    }

    handleClick = () => {

    }

    render() {
      
      return (
          
          <Container textAlign='center' className="flexy">
          <Divider inverted> </Divider>
          <h1>Technologies I Have Worked In</h1>
          {this.languages.map(lang => 
            <span className="icon" onClick={this.handleClick}>
            {this.toComponent(lang)}
            <h2>{lang.name}</h2>
            </span>
            
          )}
          </Container>
    
      )
    }
  }