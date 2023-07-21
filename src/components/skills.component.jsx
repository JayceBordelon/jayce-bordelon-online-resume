//Dependencies
import React, { Component } from 'react';
import { Container, Modal, Button, Icon} from 'semantic-ui-react';

//Components (Icons)
import { DiCss3, DiNodejs, DiPython, DiReact, DiRuby, DiHtml5, DiJava, DiJavascript1  } from 'react-icons/di' // from devicons
import {TbBrandCpp, TbApi, TbBrandDjango} from 'react-icons/tb'
import {SiAssemblyscript, SiAwslambda, SiKubernetes, SiDocker, SiMongodb, SiPostgresql, SiSvelte} from 'react-icons/si'
import {FaLinux, FaGit} from 'react-icons/fa'
import {GiArtificialHive} from 'react-icons/gi'
import Null from './null.component'


//Style
import '../styles/wrapper.css'


export default class Skills extends Component {


  state = {
    'showModal': false,
    'currentExp': {}
  }

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
      {name: 'CSS', comp: <DiCss3 size={200}/>, rel: this.titles.mag, yrs: '~3 years'},
      {name: 'Node.js', comp: <DiNodejs size={200}/>, rel: this.titles.mag, yrs: '~1 year'},
      {name: 'Python', comp: <DiPython size={200}/>, rel: this.titles.iti, yrs: '~3 years'},
      {name: 'React.js', comp: <DiReact size={200}/>, rel: this.titles.iti, yrs: '~1 year'},
      {name: 'HTML', comp: <DiHtml5 size={200}/>, rel: this.titles.tut, yrs: '~4 years'},
      {name: 'Java', comp: <DiJava size={200}/>, rel: this.titles.ass, yrs: '~4 years'},
      {name: 'JavaScript', comp: <DiJavascript1 size={200}/>, rel: this.titles.ful, yrs: '~4 years'},
      {name: 'C++', comp: <TbBrandCpp size={200}/>, rel: this.titles.edu, yrs: '~1 year'},
      {name: 'AVR Assembly', comp: <SiAssemblyscript size={160}/>, rel: this.titles.edu, yrs: '~1 year'},
      {name: 'Kubernetes (conceptual)', comp: <SiKubernetes size={200}/>, rel: this.titles.iti, yrs: '~1 year'},
      {name: 'Docker (conceptual)', comp: <SiDocker size={200}/>, rel: this.titles.iti, yrs: '~1 year'},
      {name: 'Svelte (conceptual)', comp: <SiSvelte size={200}/>, rel: this.titles.own, yrs: '~1 year'},
    ]
    web_frameworks = [
      {name: 'Ruby on Rails', comp: <DiRuby size={170}/>, rel: this.titles.ful, yrs: '~3 years'},
      {name: 'MERN stack', comp: <SiMongodb size={200}/>, rel: this.titles.mag, yrs: '~1 year'},
      {name: 'Python Django', comp: <TbBrandDjango size={200}/>, rel: this.titles.iti, yrs: '~1 year'},
    ]
    db_and_other = [
      {name: 'Git', comp: <FaGit size={200}/>, rel: this.titles.iti, yrs: '~2 years'},
      {name: 'APi Development', comp: <TbApi size={200}/>, rel: this.titles.mag, yrs: '~2 years'},
      {name: 'OCR Technology', comp: <GiArtificialHive size={200}/>, rel: this.titles.bac, yrs: '~2 years'},
      {name: 'Linux (WSL)', comp: <FaLinux size={200}/>, rel: this.titles.iti, yrs: '~1 years'},
      {name: 'PostgreSQL (PSQL)', comp: <SiPostgresql size={200}/>, rel: this.titles.dat, yrs: '~3 years'},
      {name: 'AWS Lambda', comp: <SiAwslambda size={200}/>, rel: this.titles.own, yrs: '~2 months'},
    ]

    toComponent = (lang) => {
      return lang.comp;
    }

    handleModal = (exp) => {
      this.setState({showModal: !this.state.showModal})
      this.setState({currentExp: exp})
      console.log(exp.long)
    }

    render() {
      this.languages.sort((a, b) => a.name.localeCompare(b.name));
      this.web_frameworks.sort((a, b) => a.name.localeCompare(b.name));
      this.db_and_other.sort((a, b) => a.name.localeCompare(b.name));
      return (
        <>
          {this.state.showModal ? (
            <Modal className="work-modal" open={true}>
              <span className="work-modal-icon">
                {this.toComponent(this.state.currentExp)}
                <h1>{this.state.currentExp.name}</h1>
              </span>
              <h1>Most Relevant Experience: {this.state.currentExp.rel}</h1>
              <h4>I have been working with this technology for {this.state.currentExp.yrs}</h4>
              <Button onClick={() => this.setState({ showModal: false })} className="cool-button">
                <p>
                  <Icon name='checkmark' size="large" /> Close
                </p>
              </Button>
            </Modal>
          ) : (
            <Null />
          )}
    
          <Container textAlign='center' className="skills-wrapper">
            <h1>Languages</h1>
            {this.languages.map(lang => (
              <span className="skills-icon" onClick={() => this.handleModal(lang)}>
                {this.toComponent(lang)}
                <h4>{lang.name}</h4>
              </span>
            ))}
    
            <h1>Web Frameworks</h1>
            {this.web_frameworks.map(lang => (
              <span className="skills-icon" onClick={() => this.handleModal(lang)}>
                {this.toComponent(lang)}
                <h4>{lang.name}</h4>
              </span>
            ))}
    
            <h1>Databases & Other</h1>
            {this.db_and_other.map(lang => (
              <span className="skills-icon" onClick={() => this.handleModal(lang)}>
                {this.toComponent(lang)}
                <h4>{lang.name}</h4>
              </span>
            ))}
          </Container>
        </>
      )
    }
  }