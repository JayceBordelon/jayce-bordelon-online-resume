import React, {Component} from 'react'
import {Divider} from 'semantic-ui-react'
import Logo from '../styles/logo_dark_trans.svg'

export default class Work extends Component {
  // accomplishments left
  state = {
    'showModal': false,
    'currentExp': {}
  }

  handleModal = (exp) => {
    this.setState({showModal: !this.state.showModal})
    this.setState({currentExp: exp})
  }

    experiences = [
      {when: 'June 2023 - Present', title: 'Information Technology Intern', accomplishments: [
        'Updated and maintained multiple internal web applications in a fast-paced development environment.',
        'Collaborated with international team through GitLab to develop novel features in the company.',
        'Built, wrapped in a container, and deployed Django application via an existing kubernetes cluster'
      ], company: 'Synopsys Inc.', src:'https://media.licdn.com/dms/image/C4E0BAQEq7MVORIs3MA/company-logo_200_200/0/1519855929274?e=2147483647&v=beta&t=JTxU5EoX6Nr7jTo1cp1hk8NyCecz7HZIsi6m3PhlMTo'},

      {when: 'July 2022 - Present', title: 'Computer Science Teacher Assistant', accomplishments: [
        'Streamlining learning process of Object Oriented Programming for students.',
        'Grading student code and exams.',
        'Hosting and managing other Teacher Assistants to create student led instruction sessions.'
      ], company: 'Washington University in St. Louis', src:'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/WashU_St._Louis_seal.svg/1200px-WashU_St._Louis_seal.svg.png'},

      {when: 'January 2023 - May 2023', title: 'Software Architect', accomplishments: [
        'Led development and software architecture of a skills based & AI powered job matching application.',
        'Gained exposure & experience in working with a dynamic start up',
        'Successfully built out and presented MVP on the MERN stack.'
      ], company: 'Magnifi', src:{Logo}},

      {when: 'May 2022 - August 2022', title: 'Full Stack Development Intern', accomplishments: [
        'Developed and updated Ruby on Rails application for accounting in the trucking industry.',
        'Consulted with 18 customers to develop novel features according to their desire.',
        'Streamlined accounting processes through generation of 37 dynamic CSV exports.',
        'Collaborated through GitHub for large application updates.'
      ], company: 'Command Alkon', src:'https://www.supplychainquarterly.com/ext/resources/images/industry_pressroom/uploaded/ca_special_2c_rgb_rgb_600_527.jpg?t=1584337380&width=600'},

      {when: 'May 2021 - August 2021', title: 'Backend Development Intern', accomplishments: [
        'Developed API integration with an OCR to streamline data entry process.',
        'Automated accounting process for 26 company specific ticket types.',
        'Outlined 47 company specific data entry requests for existing workers.'

      ], company: 'Command Alkon', src:'https://www.supplychainquarterly.com/ext/resources/images/industry_pressroom/uploaded/ca_special_2c_rgb_rgb_600_527.jpg?t=1584337380&width=600'},

      {when: 'May 2019 - August 2019', title: 'Data Entry Intern', accomplishments: [
        'Collaborated with International data entry team.',
        'Handled data degradation on over 1,764 entries.',
        'Exposed myself to PSQL'
      ], company: 'Command Alkon', src:'https://www.supplychainquarterly.com/ext/resources/images/industry_pressroom/uploaded/ca_special_2c_rgb_rgb_600_527.jpg?t=1584337380&width=600'},

      {when: 'May 2019 - August 2021', title: 'High School Calculus Tutor', accomplishments: [
        'Developed website to advertize and schedule tutoring sessions',
        'Credited with raising four students grades in calculus from a "C" or lower to an "A-" or higher',
        'Expanded my service to include Geometry, Advanced Algebra, and Trigonometry'
      ], company: 'Self Employed', src:'https://www.badcredit.org/wp-content/uploads/2020/01/Bad-Credit-Loans-for-the-Self-Employed.jpg'}
    ]
    render() {
  
      return (
        <>
        <Divider inverted> </Divider>
        work
        </>
      )
    }
  }
