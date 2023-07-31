import React, {Component} from 'react'
import {Container, Grid, Icon, Divider, Segment} from 'semantic-ui-react'

import { BsDatabaseUp } from 'react-icons/bs' // from devicons
import { TbMathFunction } from 'react-icons/tb'
import {SiBlueprint,  SiRubyonrails} from 'react-icons/si'
import { GiServerRack, GiTeacher} from 'react-icons/gi'
import Null from './null.component'
import '../styles/wrapper.css'
import { DiRuby } from 'react-icons/di'

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.workExperiences = React.createRef();
    this.observer = null;
  }
  componentDidMount() {
    this.observer = new IntersectionObserver(this.handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.9, // Adjust this value based on when you want the fade-in effect to trigger
    });

    if (this.workExperiences.current) {
      const elements = this.workExperiences.current.querySelectorAll('.work-exp');
      elements.forEach((element) => this.observer.observe(element));
    }
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fade-in');
        this.observer.unobserve(entry.target);
      }
    });
  };
  // accomplishments left
  state = {
    'showModal': false,
    'currentExp': {}
  }


  toSingleLearning = (learnings) => {
    return learnings.split("|");
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

        <Container className="work-wrap" textAlign="left">
        <div ref={this.workExperiences}>
          {this.experiences.map((exp) => (
            <>
              <Divider horizontal inverted>{exp.src}<h3>{exp.title}</h3> @ {exp.company}</Divider>
              <Segment className="work-exp fader" text-align="left" key={exp.title}>
                {exp.accomplishments.map((accomplishment) => (
                  <p>
                    <Icon name="code branch" /> {accomplishment}
                  </p>
                ))}
                <div className="learning-holder">
                  {this.toSingleLearning(exp.learned)
                    .sort()
                    .map((learning) => (
                      <span className="learning">{learning}</span>
                    ))}
                </div>
              </Segment>
            </>
          ))}
        </div>
      </Container>
      )
    }
  }
