import React, {Component} from 'react'
import {Container, Image, Modal, Button, Icon, List} from 'semantic-ui-react'

import {} from 'react-icons/di' // from devicons
import {} from 'react-icons/tb'
import {} from 'react-icons/si'
import { } from 'react-icons/fa'
import {} from 'react-icons/gi'
import {VscTerminalCmd} from 'react-icons/vsc'
import Null from './null.component'
import '../styles/wrapper.css'

export default class Work extends Component {
  // accomplishments left
  state = {
    'showModal': false,
    'currentExp': {}
  }

  toComponent = (lang) => {
    return lang.comp;
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
        'Updated and maintained multiple internal web applications in a fast-paced development environment.',
        'Collaborated with international team through GitLab to develop novel features in the company.',
        'Built, wrapped in a container, and deployed Django application via an existing kubernetes cluster'
      ], 
      company: 'Synopsys Inc.', 
      src: <VscTerminalCmd size={300}/>},

      {when: 'July 2022 - Present', 
      title: `CS TA`, 
      long: "Computer Science Lead Teacher's Assistant",
      accomplishments: [
        'Streamlining learning process of Object Oriented Programming for students.',
        'Grading student code and exams.',
        'Hosting and managing other Teacher Assistants to create student led instruction sessions.'
      ], 
      company: 'Washington University in St. Louis', 
      src:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/WashU_St._Louis_seal.svg/1200px-WashU_St._Louis_seal.svg.png'},

      {when: 'January 2023 - May 2023', 
      title: 'Software Architect', 
      long: "Software Architecture & Development Lead",
      accomplishments: [
        'Led development and software architecture of a skills based & AI powered job matching application.',
        'Gained exposure & experience in working with a dynamic start up',
        'Successfully built out and presented MVP on the MERN stack.'
      ], 
      company: 'Magnifi', 
      src:'https://media.licdn.com/dms/image/C560BAQGb6D24Acz-QA/company-logo_200_200/0/1677903909076?e=2147483647&v=beta&t=ly-GV7VqALlOFO6O2jMFT-cDxz4dpB1PbcYtrgp6uiM'},

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
      src:'https://www.supplychainquarterly.com/ext/resources/images/industry_pressroom/uploaded/ca_special_2c_rgb_rgb_600_527.jpg?t=1584337380&width=600'},

      {when: 'May 2021 - August 2021', 
      title: 'Backend Intern', 
      long: "Backend Software Development Intern",
      accomplishments: [
        'Developed API integration with an OCR to streamline data entry process.',
        'Automated accounting process for 26 company specific ticket types.',
        'Outlined 47 company specific data entry requests for existing workers.'

      ], 
      company: 'Command Alkon', 
      src:'https://www.supplychainquarterly.com/ext/resources/images/industry_pressroom/uploaded/ca_special_2c_rgb_rgb_600_527.jpg?t=1584337380&width=600'},

      {when: 'May 2019 - August 2019', 
      title: 'Data Entry Intern', 
      long: "Data Entry Intern",
      accomplishments: [
        'Collaborated with International data entry team.',
        'Handled data degradation on over 1,764 entries.',
        'Exposed myself to PSQL'
      ], 
      company: 'Command Alkon', 
      src:'https://www.supplychainquarterly.com/ext/resources/images/industry_pressroom/uploaded/ca_special_2c_rgb_rgb_600_527.jpg?t=1584337380&width=600'},

      {when: 'May 2019 - August 2021', 
      title: 'Calculus Tutor', 
      long: "High School Calculus Tutor",
      accomplishments: [
        'Developed website to advertize and schedule tutoring sessions',
        'Credited with raising four students grades in calculus from a "C" or lower to an "A-" or higher',
        'Expanded my service to include Geometry, Advanced Algebra, and Trigonometry'
      ], 
      company: 'Self Employed', 
      src:'https://chitowntutoring.com/wp-content/uploads/calculus.jpg'}
    ]
    render() {
  
      return (
        <>
        {this.state.showModal ? (
          <Modal className="work-modal" open={true}>
          <div className="work-modal-left" textAlign="left">
          {this.state.currentExp.src}
          </div>
          <div className="work-modal-right" textAlign="left">
          <h1>{this.state.currentExp.long}</h1>
          <h2>{this.state.currentExp.when}</h2>
            <List>
            {this.state.currentExp.accomplishments.map(accomplish=> (
              <List.Item
                icon='chess pawn inverted'
                content={<h3>{accomplish}</h3>}
              />
        ))}
            </List>
            <Button onClick={() => this.setState({ showModal: false })} className="cool-button">
                  <p>
                    <Icon name='check circle outline' size="large" /> Cool!
                  </p>
                </Button>
                
          </div>
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
