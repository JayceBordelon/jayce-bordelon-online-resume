//Dependencies
import React, { Component } from 'react';
import { Container, Label, Icon, Card, Image } from 'semantic-ui-react';

//Icons
import { DiCss3, DiNodejs, DiPython, DiReact, DiRuby, DiHtml5, DiDjango, DiJava, DiJavascript1  } from 'react-icons/di' // from devicons
import {TbBrandCpp, TbApi} from 'react-icons/tb'
import {SiAssemblyscript, SiAwslambda, SiKubernetes, SiDocker} from 'react-icons/si'
import {FaBootstrap, FaLinux} from 'react-icons/fa'
import {GiArtificialHive} from 'react-icons/gi'



export default class Skills extends Component {


    languages = [
      {name: 'CSS', comp: <DiCss3 size={30}/>},
      {name: 'Node.JS', comp: <DiNodejs size={30}/>},
      {name: 'Python', comp: <DiPython size={30}/>},
      {name: 'React', comp: <DiReact size={30}/>},
      {name: 'Ruby on Rails', comp: <DiRuby size={30}/>},
      {name: 'HTML', comp: <DiHtml5 size={30}/>},
      {name: 'Python Django', comp: <DiDjango size={30}/>},
      {name: 'Java', comp: <DiJava size={30}/>},
      {name: 'JavaScript', comp: <DiJavascript1 size={30}/>},
      {name: 'C++', comp: <TbBrandCpp size={30}/>},
      {name: 'AVR Assembly', comp: <SiAssemblyscript size={30}/>},
      {name: 'Bootstrap', comp: <FaBootstrap size={30}/>},
      {name: 'Linux', comp: <FaLinux size={30}/>},
      {name: 'AWS Lambda', comp: <SiAwslambda size={30}/>},
      {name: 'Kubernetes', comp: <SiKubernetes size={30}/>},
      {name: 'Docker', comp: <SiDocker size={30}/>},
      {name: 'APi Development', comp: <TbApi size={30}/>},
      {name: 'OCR Technology', comp: <GiArtificialHive size={30}/>},
      


      
    ]

    toComponent = (lang) => {
      
      return lang.comp;
    }

    render() {
      
      return (
          
          <Container wrapped textAlign='center'>
          <h1>Technologies I Have Worked In</h1>
          {this.languages.map(lang => 
          <Card>
            <Image src={this.toComponent(lang)} wrapped ui={true} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='briefcase' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
            
          )}
          </Container>
    
      )
    }
  }