//Dependencies
import React, { Component } from 'react';
import { Container, Label } from 'semantic-ui-react';

//Icons
import { DiCss3, DiNodejs, DiPython, DiReact, DiRuby, DiHtml5, DiDjango, DiJava, DiJavascript1  } from 'react-icons/di' // from devicons
import {TbBrandCpp, TbApi} from 'react-icons/tb'
import {SiAssemblyscript, SiAwslambda, SiKubernetes, SiDocker} from 'react-icons/si'
import {FaBootstrap, FaLinux} from 'react-icons/fa'
import {GiArtificialHive} from 'react-icons/gi'




//Styles
import '../styles/skills.css'


export default class Skills extends Component {


    languages = [
      {name: 'CSS', comp: <DiCss3 size={70}/>},
      {name: 'Node.JS', comp: <DiNodejs size={70}/>},
      {name: 'Python', comp: <DiPython size={70}/>},
      {name: 'React', comp: <DiReact size={70}/>},
      {name: 'Ruby on Rails', comp: <DiRuby size={70}/>},
      {name: 'HTML', comp: <DiHtml5 size={70}/>},
      {name: 'Python Django', comp: <DiDjango size={70}/>},
      {name: 'Java', comp: <DiJava size={70}/>},
      {name: 'JavaScript', comp: <DiJavascript1 size={70}/>},
      {name: 'C++', comp: <TbBrandCpp size={70}/>},
      {name: 'AVR Assembly', comp: <SiAssemblyscript size={70}/>},
      {name: 'Bootstrap', comp: <FaBootstrap size={70}/>},
      {name: 'Linux', comp: <FaLinux size={70}/>},
      {name: 'AWS Lambda', comp: <SiAwslambda size={70}/>},
      {name: 'Kubernetes', comp: <SiKubernetes size={70}/>},
      {name: 'Docker', comp: <SiDocker size={70}/>},
      {name: 'APi Development', comp: <TbApi size={70}/>},
      {name: 'OCR Technology', comp: <GiArtificialHive size={70}/>},
      


      
    ]

    toComponent = (lang) => {
      
      return lang.comp;
    }

    render() {
      
      return (

        <Container textAlign="center" className='container'>
          <h2>Technologies I Have Worked In</h2>
          <Container textAlign='center' className="skills">
          {this.languages.map(lang => 
          <Label className='skills skill'>
            <span>{this.toComponent(lang)}</span> {lang.name}
          </Label>
            
          )}
          </Container>


    
        </Container>
      )
    }
  }