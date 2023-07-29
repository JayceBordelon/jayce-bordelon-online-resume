import React, {Component} from 'react'
import {Container, Modal, Button, Icon, List} from 'semantic-ui-react'

import { BsDatabaseUp } from 'react-icons/bs' // from devicons
import { TbMathFunction } from 'react-icons/tb'
import {SiBlueprint,  SiRubyonrails} from 'react-icons/si'
import { GiServerRack, GiTeacher} from 'react-icons/gi'
import Null from './null.component'
import '../styles/wrapper.css'
import { DiRuby } from 'react-icons/di'

export default class Work extends Component {
  // accomplishments left
  state = {
    'showModal': false,
    'currentExp': {}
  }

  toComponent = (lang) => {
    return lang.comp;
  }

  toSingleLearning = (learnings) => {
    return learnings.split("|");
  }

  handleModal = (exp) => {
    this.setState({showModal: !this.state.showModal})
    this.setState({currentExp: exp})
    console.log(exp.long)
  }

    experiences = [
      {when: 'June 2023 - Present', 
      title: 'IT Intern', 
      long: "Information Technology Intern",
      accomplishments: [
        'Updated and maintained a widely used Ruby on Rails application with a React frontend. (Ongoing)',
        'Collaborated with international team through GitLab to develop novel features in the company. (Ongoing)',
        'Built, dockerized, and deployed a Django authentication application on an existing kubernetes cluster. (Ongoing)'
      ], 
      company: 'Synopsys Inc.', 
      learned: 'Python|Ruby on Rails|React|Docker|Kubernetes|Git|MySQL|Ubuntu|Linux|SSH|CSS',
      src: <GiServerRack size={100}/>},

      {when: 'July 2022 - Present', 
      title: `Teacher's Assistant`, 
      long: "Computer Science Lead Teacher's Assistant",
      accomplishments: [
        'Streamlining learning process of Object Oriented Programming for students.',
        'Grading student code and exams.',
        'Hosting and managing other Teacher Assistants to create student led instruction sessions.'
      ], 
      company: 'Washington University in St. Louis', 
      learned: 'Java|Object Oriented Programming|Teaching|Managing',
      src:<GiTeacher size={100} />},

      {when: 'January 2023 - May 2023', 
      title: 'Software Architect', 
      long: "Software Architecture & Development Lead",
      accomplishments: [
        'Led development and software architecture of a skills based & AI powered job matching application.',
        'Gained exposure & experience in working with a dynamic start up',
        'Successfully built out and presented MVP on the MERN stack.'
      ], 
      company: 'Magnifi', 
      learned: 'MERN Stack|HTML|CSS|React|Netlify|Heroku|Software Architecture|Node.js|Express.js|MongoDB',
      src:<SiBlueprint size={100} />},

      {when: 'May 2022 - August 2022', 
      title: 'Full Stack Intern', 
      long: "Full Stack Software Development Intern",
      accomplishments: [
        'Developed and updated Ruby on Rails application for accounting in the trucking industry.',
        'Consulted with 18 customers to develop novel features according to their desire.',
        'Streamlined accounting processes through generation of 37 dynamic CSV exports.',
        'Collaborated through GitHub for large application updates.'
      ], 
      company: 'Command Alkon', 
      learned: 'Ruby on Rails|PostgreSQL|Bootstrap|JavaScript|Heroku|HTML|CSS',
      src:<SiRubyonrails size={100} />},

      {when: 'May 2021 - August 2021', 
      title: 'Backend Intern', 
      long: "Backend Software Development Intern",
      accomplishments: [
        'Developed API integration with an OCR to streamline data entry process.',
        'Automated accounting process for 26 company specific ticket types.',
        'Outlined 47 company specific data entry requests for existing workers.'

      ], 
      company: 'Command Alkon', 
      learned: 'Ruby on Rails|PostgreSQL',
      src:<DiRuby size={100} />},

      {when: 'May 2019 - August 2019', 
      title: 'Data Entry Intern', 
      long: "Data Entry Intern",
      accomplishments: [
        'Collaborated with International data entry team.',
        'Handled data degradation on over 1,764 entries.',
        'Exposed myself to PSQL while validating financially sensetive information'
      ], 
      company: 'Ruckit', 
      learned: 'PostgreSQL|Data Validation|Data Analysis',
      src:<BsDatabaseUp size={100}/>},

      {when: 'May 2019 - August 2021', 
      title: 'Calculus Tutor', 
      long: "High School Calculus Tutor",
      accomplishments: [
        'Developed website to advertize and schedule tutoring sessions.',
        'Credited with raising four students grades in calculus from a "C" or lower to an "A-" or higher.',
        'Expanded my service to include Geometry, Advanced Algebra, and Trigonometry.'
      ], 
      company: 'Self Employed', 
      learned: 'Calculus|Advanced Algebra|Geometry|Teaching|HTML|CSS',
      src: <TbMathFunction size={100}/>}
    ]
    render() {
  
      return (
        <>
        {this.state.showModal ? (
          <Modal className="work-modal" open={true}>
          <span className="work-modal-icon">{this.state.currentExp.src}</span>
          <h1>{this.state.currentExp.company} - {this.state.currentExp.long}</h1>
          <h2>{this.state.currentExp.when}</h2>
            <List>
            {this.state.currentExp.accomplishments.map(accomplish=> (
              <List.Item
                icon='code branch inverted white'
                content={<h3>{accomplish}</h3>}
              />
        ))}
              <List.Item
                content={<h2>What I Learned</h2>}
              /> 
              <div className= "work-modal-learnings">
              {this.toSingleLearning(this.state.currentExp.learned).map(learning=> (<span className="work-modal-learning"><h4>{learning} </h4></span>))}
              </div>
            </List>
            <Button onClick={() => this.setState({ showModal: false })} className="cool-button">
                  <p>
                  <Icon name='checkmark' size="large" /> Close
                  </p>
                </Button>
                
          </Modal>
        ) : (
          <Null />
        )}

        <Container className="work-wrap" textAlign="center">
          {this.experiences.map(exp => (
            <span className="work-exp" onClick={() => this.handleModal(exp)} key={exp.title}>
              {exp.src}
              <h2>{exp.title}</h2>
            </span>
          ))}
        </Container>
      </>
      )
    }
  }
